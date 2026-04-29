import jwt from 'jsonwebtoken'
import type { UserRole } from '../../common/middleware/auth.ts'

export const authService = {
  login(email: string, _password: string) {
    const role: UserRole = email.includes('admin')
      ? 'admin'
      : email.includes('teacher')
        ? 'teacher'
        : 'student'
    const token = jwt.sign({ userId: email, role }, process.env.JWT_SECRET ?? 'reaxorium_dev_secret', {
      expiresIn: '1d'
    })
    return { token, role }
  }
}
