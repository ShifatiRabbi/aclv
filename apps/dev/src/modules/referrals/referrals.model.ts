import mongoose from 'mongoose'

export interface ReferralDoc {
  name: string
  code: string
  expiresAt: Date
  discountPoints: number
  bonusXp: number
  usageLimit: number
  usedCount: number
  isActive: boolean
}

const ReferralSchema = new mongoose.Schema<ReferralDoc>(
  {
    name: { type: String, required: true, trim: true },
    code: { type: String, required: true, uppercase: true, unique: true, index: true },
    expiresAt: { type: Date, required: true, index: true },
    discountPoints: { type: Number, default: 0, min: 0 },
    bonusXp: { type: Number, default: 0, min: 0 },
    usageLimit: { type: Number, default: 100, min: 1 },
    usedCount: { type: Number, default: 0, min: 0 },
    isActive: { type: Boolean, default: true, index: true }
  },
  { timestamps: true }
)

export const ReferralModel = mongoose.models.Referral || mongoose.model<ReferralDoc>('Referral', ReferralSchema)

export interface ReferralUsageDoc {
  referralCode: string
  userId: string
  userRole: 'student' | 'teacher'
}

const ReferralUsageSchema = new mongoose.Schema<ReferralUsageDoc>(
  {
    referralCode: { type: String, required: true, uppercase: true, index: true },
    userId: { type: String, required: true, index: true },
    userRole: { type: String, enum: ['student', 'teacher'], required: true, index: true }
  },
  { timestamps: true }
)

ReferralUsageSchema.index({ referralCode: 1, userId: 1 }, { unique: true })

export const ReferralUsageModel =
  mongoose.models.ReferralUsage || mongoose.model<ReferralUsageDoc>('ReferralUsage', ReferralUsageSchema)
