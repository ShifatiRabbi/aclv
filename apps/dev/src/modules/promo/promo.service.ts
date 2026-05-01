import { PromoCodeModel } from './promo.model.ts'

type EligibleRole = 'student' | 'teacher'

export const promoService = {
  async create(payload: {
    code: string
    title: string
    description?: string
    expiresAt: string
    discountPercent?: number
    discountPoints?: number
    bonusXp?: number
    usageLimit?: number
    eligibleRoles?: EligibleRole[]
    isActive?: boolean
  }) {
    const model = PromoCodeModel as any
    return model.create({
      ...payload,
      code: payload.code.toUpperCase(),
      expiresAt: new Date(payload.expiresAt)
    })
  },

  list() {
    const model = PromoCodeModel as any
    return model.find().sort({ createdAt: -1 }).lean()
  },

  update(id: string, payload: Record<string, unknown>) {
    const patch = { ...payload } as Record<string, unknown>
    if (typeof patch.code === 'string') {
      patch.code = patch.code.toUpperCase()
    }
    if (typeof patch.expiresAt === 'string') {
      patch.expiresAt = new Date(patch.expiresAt)
    }
    const model = PromoCodeModel as any
    return model.findByIdAndUpdate(id, patch, { new: true }).lean()
  },

  delete(id: string) {
    const model = PromoCodeModel as any
    return model.findByIdAndDelete(id).lean()
  },

  async applyPromoCode(code: string, role: EligibleRole) {
    const model = PromoCodeModel as any
    const promo = await model.findOne({ code: code.toUpperCase(), isActive: true })
    if (!promo) {
      throw new Error('Invalid promo code')
    }
    if (!promo.eligibleRoles.includes(role)) {
      throw new Error('Promo code is not eligible for this role')
    }
    if (promo.expiresAt.getTime() < Date.now()) {
      throw new Error('Promo code has expired')
    }
    if (promo.usedCount >= promo.usageLimit) {
      throw new Error('Promo usage limit reached')
    }

    promo.usedCount += 1
    await promo.save()

    return {
      discountPercent: promo.discountPercent,
      discountPoints: promo.discountPoints,
      bonusXp: promo.bonusXp
    }
  }
}
