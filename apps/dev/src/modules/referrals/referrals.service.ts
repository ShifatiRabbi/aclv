import { ReferralModel, ReferralUsageModel } from './referrals.model.ts'

export const referralService = {
  async create(payload: {
    name: string
    code: string
    expiresAt: string
    discountPoints?: number
    bonusXp?: number
    usageLimit?: number
    isActive?: boolean
  }) {
    const referralModel = ReferralModel as any
    return referralModel.create({
      ...payload,
      code: payload.code.toUpperCase(),
      expiresAt: new Date(payload.expiresAt)
    })
  },

  list() {
    const referralModel = ReferralModel as any
    return referralModel.find().sort({ createdAt: -1 }).lean()
  },

  update(id: string, payload: Record<string, unknown>) {
    const patch = { ...payload } as Record<string, unknown>
    if (typeof patch.code === 'string') {
      patch.code = patch.code.toUpperCase()
    }
    if (typeof patch.expiresAt === 'string') {
      patch.expiresAt = new Date(patch.expiresAt)
    }
    const referralModel = ReferralModel as any
    return referralModel.findByIdAndUpdate(id, patch, { new: true }).lean()
  },

  delete(id: string) {
    const referralModel = ReferralModel as any
    return referralModel.findByIdAndDelete(id).lean()
  },

  async applyReferralCode(code: string) {
    const referralModel = ReferralModel as any
    const referral = await referralModel.findOne({ code: code.toUpperCase(), isActive: true })
    if (!referral) {
      throw new Error('Invalid referral code')
    }
    if (referral.expiresAt.getTime() < Date.now()) {
      throw new Error('Referral campaign expired')
    }
    if (referral.usedCount >= referral.usageLimit) {
      throw new Error('Referral usage limit reached')
    }
    referral.usedCount += 1
    await referral.save()

    return {
      discountPoints: referral.discountPoints,
      bonusXp: referral.bonusXp
    }
  },

  async addUsage(referralCode: string, userId: string, userRole: 'student' | 'teacher') {
    const usageModel = ReferralUsageModel as any
    await usageModel.create({
      referralCode: referralCode.toUpperCase(),
      userId,
      userRole
    })
  },

  async analytics() {
    const [totalUsage, topPromoters, conversion] = await Promise.all([
      ReferralUsageModel.countDocuments(),
      (ReferralUsageModel as any).aggregate([
        { $group: { _id: '$referralCode', uses: { $sum: 1 } } },
        { $sort: { uses: -1 } },
        { $limit: 5 }
      ]),
      (ReferralModel as any).aggregate([
        {
          $project: {
            code: 1,
            conversionRate: {
              $cond: [{ $gt: ['$usageLimit', 0] }, { $multiply: [{ $divide: ['$usedCount', '$usageLimit'] }, 100] }, 0]
            }
          }
        },
        { $sort: { conversionRate: -1 } },
        { $limit: 5 }
      ])
    ])
    return { totalUsage, topPromoters, conversion }
  }
}
