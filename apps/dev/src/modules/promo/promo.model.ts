import mongoose from 'mongoose'

export interface PromoCodeDoc {
  code: string
  title: string
  description?: string
  expiresAt: Date
  discountPercent: number
  discountPoints: number
  bonusXp: number
  usageLimit: number
  usedCount: number
  eligibleRoles: Array<'student' | 'teacher'>
  isActive: boolean
}

const PromoCodeSchema = new mongoose.Schema<PromoCodeDoc>(
  {
    code: { type: String, required: true, unique: true, uppercase: true, index: true },
    title: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    expiresAt: { type: Date, required: true, index: true },
    discountPercent: { type: Number, default: 0, min: 0, max: 100 },
    discountPoints: { type: Number, default: 0, min: 0 },
    bonusXp: { type: Number, default: 0, min: 0 },
    usageLimit: { type: Number, default: 100, min: 1 },
    usedCount: { type: Number, default: 0, min: 0 },
    eligibleRoles: { type: [String], default: ['student', 'teacher'] },
    isActive: { type: Boolean, default: true, index: true }
  },
  { timestamps: true }
)

export const PromoCodeModel =
  mongoose.models.PromoCode || mongoose.model<PromoCodeDoc>('PromoCode', PromoCodeSchema)
