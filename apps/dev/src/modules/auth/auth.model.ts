import mongoose from 'mongoose'
import type { UserRole } from '../../common/middleware/auth.ts'

export interface UserDoc {
  name: string
  username: string
  email: string
  password: string
  role: UserRole
  isEmailVerified: boolean
  institution?: string
  qualification?: string
  subjectExpertise?: string
  classLevel?: string
  xp: number
  walletCredits: number
  referralCode: string
  referredBy?: string
  refreshToken?: string
}

const UserSchema = new mongoose.Schema<UserDoc>(
  {
    name: { type: String, required: true, trim: true },
    username: { type: String, required: true, trim: true, unique: true, index: true },
    email: { type: String, required: true, trim: true, lowercase: true, unique: true, index: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ['super_admin', 'admin', 'staff', 'teacher', 'student'],
      required: true,
      default: 'student',
      index: true
    },
    isEmailVerified: { type: Boolean, default: false, index: true },
    institution: { type: String, trim: true },
    qualification: { type: String, trim: true },
    subjectExpertise: { type: String, trim: true },
    classLevel: { type: String, trim: true },
    xp: { type: Number, default: 0 },
    walletCredits: { type: Number, default: 0 },
    referralCode: { type: String, required: true, unique: true, uppercase: true, index: true },
    referredBy: { type: String, uppercase: true, index: true },
    refreshToken: { type: String }
  },
  { timestamps: true }
)

export const UserModel = mongoose.models.User || mongoose.model<UserDoc>('User', UserSchema)

export interface OtpVerificationDoc {
  email: string
  otp: string
  purpose: 'email_verification' | 'reset_password'
  expiresAt: Date
}

const OtpVerificationSchema = new mongoose.Schema<OtpVerificationDoc>(
  {
    email: { type: String, required: true, lowercase: true, trim: true, index: true },
    otp: { type: String, required: true },
    purpose: { type: String, enum: ['email_verification', 'reset_password'], required: true, index: true },
    expiresAt: { type: Date, required: true, index: true }
  },
  { timestamps: true }
)

OtpVerificationSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 })

export const OtpVerificationModel =
  mongoose.models.OtpVerification || mongoose.model<OtpVerificationDoc>('OtpVerification', OtpVerificationSchema)
