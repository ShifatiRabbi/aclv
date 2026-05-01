import jwt from 'jsonwebtoken'
import type { UserRole } from '../../common/middleware/auth.ts'
import bcrypt from 'bcryptjs'
import { OtpVerificationModel, UserModel } from './auth.model.ts'
import { promoService } from '../promo/promo.service.ts'
import { referralService } from '../referrals/referrals.service.ts'

interface AuthTokens {
  accessToken: string
  refreshToken: string
}

interface RegisterInput {
  name: string
  username: string
  email: string
  password: string
  role: 'student' | 'teacher'
  institution?: string
  qualification?: string
  subjectExpertise?: string
  classLevel?: string
  referralCode?: string
  promoCode?: string
}

function createOtp() {
  return Math.floor(100000 + Math.random() * 900000).toString()
}

function createReferralCode(username: string) {
  const prefix = username.replace(/[^A-Za-z0-9]/g, '').slice(0, 4).toUpperCase() || 'RXRM'
  const suffix = Math.random().toString(36).slice(2, 7).toUpperCase()
  return `${prefix}${suffix}`
}

export const authService = {
  createTokens(userId: string, role: UserRole): AuthTokens {
    const secret = process.env.JWT_SECRET ?? 'reaxorium_dev_secret'
    const refreshSecret = process.env.JWT_REFRESH_SECRET ?? 'reaxorium_dev_refresh_secret'
    const accessToken = jwt.sign({ userId, role }, secret, { expiresIn: (process.env.JWT_ACCESS_EXPIRES_IN ?? '15m') as jwt.SignOptions['expiresIn'] })
    const refreshToken = jwt.sign({ userId, role }, refreshSecret, { expiresIn: (process.env.JWT_REFRESH_EXPIRES_IN ?? '7d') as jwt.SignOptions['expiresIn'] })

    return { accessToken, refreshToken }
  },

  async register(payload: RegisterInput) {
    const userModel = UserModel as any
    const otpModel = OtpVerificationModel as any
    const existing = await userModel.findOne({
      $or: [{ email: payload.email.toLowerCase() }, { username: payload.username }]
    }).lean()

    if (existing) {
      throw new Error('User with email or username already exists')
    }

    const password = await bcrypt.hash(payload.password, 10)
    const referralCode = createReferralCode(payload.username)

    let bonusXp = 0
    let bonusCredits = 0

    if (payload.promoCode) {
      const promo = await promoService.applyPromoCode(payload.promoCode, payload.role)
      bonusXp += promo.bonusXp
      bonusCredits += promo.discountPoints
    }

    if (payload.referralCode) {
      const referral = await referralService.applyReferralCode(payload.referralCode)
      bonusXp += referral.bonusXp
      bonusCredits += referral.discountPoints
    }

    const user = await userModel.create({
      ...payload,
      email: payload.email.toLowerCase(),
      password,
      referralCode,
      referredBy: payload.referralCode?.toUpperCase(),
      xp: bonusXp,
      walletCredits: bonusCredits
    })

    if (payload.referralCode) {
      await referralService.addUsage(payload.referralCode, String(user._id), payload.role)
    }

    const otp = createOtp()
    await otpModel.create({
      email: user.email,
      otp,
      purpose: 'email_verification',
      expiresAt: new Date(Date.now() + 1000 * 60 * 10)
    })

    return {
      user: {
        id: String(user._id),
        name: user.name,
        username: user.username,
        email: user.email,
        role: user.role,
        isEmailVerified: user.isEmailVerified,
        referralCode: user.referralCode,
        xp: user.xp,
        walletCredits: user.walletCredits
      },
      verificationOtp: otp
    }
  },

  async login(email: string, passwordInput: string) {
    const userModel = UserModel as any
    const user = await userModel.findOne({ email: email.toLowerCase() })
    if (!user) {
      throw new Error('Invalid credentials')
    }

    const matched = await bcrypt.compare(passwordInput, user.password)
    if (!matched) {
      throw new Error('Invalid credentials')
    }

    const tokens = this.createTokens(String(user._id), user.role)
    user.refreshToken = tokens.refreshToken
    await user.save()

    return {
      ...tokens,
      role: user.role,
      user: {
        id: String(user._id),
        name: user.name,
        email: user.email,
        role: user.role,
        username: user.username,
        referralCode: user.referralCode,
        isEmailVerified: user.isEmailVerified
      }
    }
  },

  async refresh(refreshToken: string) {
    const userModel = UserModel as any
    const secret = process.env.JWT_REFRESH_SECRET ?? 'reaxorium_dev_refresh_secret'
    const payload = jwt.verify(refreshToken, secret) as { userId: string; role: UserRole }
    const user = await userModel.findById(payload.userId)
    if (!user || user.refreshToken !== refreshToken) {
      throw new Error('Invalid refresh token')
    }

    const tokens = this.createTokens(String(user._id), user.role)
    user.refreshToken = tokens.refreshToken
    await user.save()
    return { ...tokens, role: user.role }
  },

  async requestForgotPassword(email: string) {
    const userModel = UserModel as any
    const otpModel = OtpVerificationModel as any
    const user = await userModel.findOne({ email: email.toLowerCase() })
    if (!user) {
      return { sent: true }
    }

    const otp = createOtp()
    await otpModel.create({
      email: user.email,
      otp,
      purpose: 'reset_password',
      expiresAt: new Date(Date.now() + 1000 * 60 * 10)
    })

    return { sent: true, resetOtp: otp }
  },

  async verifyOtp(email: string, otp: string, purpose: 'email_verification' | 'reset_password') {
    const userModel = UserModel as any
    const otpModel = OtpVerificationModel as any
    const record = await otpModel.findOne({
      email: email.toLowerCase(),
      otp,
      purpose
    }).sort({ createdAt: -1 })

    if (!record) {
      throw new Error('Invalid or expired OTP')
    }

    if (purpose === 'email_verification') {
      await userModel.updateOne({ email: email.toLowerCase() }, { $set: { isEmailVerified: true } })
    }

    await otpModel.deleteOne({ _id: record._id })
    return { verified: true }
  },

  async resetPassword(email: string, otp: string, newPassword: string) {
    const userModel = UserModel as any
    await this.verifyOtp(email, otp, 'reset_password')
    const password = await bcrypt.hash(newPassword, 10)
    await userModel.updateOne({ email: email.toLowerCase() }, { $set: { password } })
    return { reset: true }
  },

  async logout(userId: string) {
    const userModel = UserModel as any
    await userModel.updateOne({ _id: userId }, { $unset: { refreshToken: '' } })
    return { logout: true }
  },

  async ensureDefaultSuperAdmin() {
    const userModel = UserModel as any
    const email = 'rabbishifati@gmail.com'
    const existing = await userModel.findOne({ email }).lean()
    if (existing) {
      return
    }

    const password = await bcrypt.hash('Reaxorium', 10)
    await userModel.create({
      name: 'Shifati Rabbi',
      username: 'shifati_rabbi',
      email,
      password,
      role: 'super_admin',
      isEmailVerified: true,
      referralCode: 'SHIFATI01',
      xp: 1000,
      walletCredits: 1000
    })
  }
}
