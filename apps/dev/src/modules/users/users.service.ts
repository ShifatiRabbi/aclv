import { UserModel } from '../auth/auth.model.ts'

const selectableFields = 'name username email role isEmailVerified institution xp walletCredits createdAt'

export const usersService = {
  list(role?: string) {
    const model = UserModel as any
    const query = role ? { role } : {}
    return model.find(query).select(selectableFields).sort({ createdAt: -1 }).lean()
  },
  updateRole(id: string, role: string) {
    const model = UserModel as any
    return model.findByIdAndUpdate(id, { role }, { new: true })
      .select(selectableFields)
      .lean()
  }
}
