import type { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

export type UserRole = 'admin' | 'teacher' | 'student'

export interface AuthUserPayload {
  userId: string
  role: UserRole
}

export interface AuthenticatedRequest extends Request {
  user?: AuthUserPayload
}

export function authenticate(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const bearerToken = req.headers.authorization?.replace('Bearer ', '')
  if (!bearerToken) {
    return res.status(401).json({ success: false, message: 'Access token is required' })
  }

  try {
    const secret = process.env.JWT_SECRET ?? 'reaxorium_dev_secret'
    req.user = jwt.verify(bearerToken, secret) as AuthUserPayload
    next()
  } catch {
    return res.status(401).json({ success: false, message: 'Invalid access token' })
  }
}

export function authorize(...roles: UserRole[]) {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({ success: false, message: 'Forbidden resource' })
    }
    next()
  }
}
