import type { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

export type UserRole = 'super_admin' | 'admin' | 'staff' | 'teacher' | 'student'

export interface AuthUserPayload {
  userId: string
  role: UserRole
}

export interface AuthenticatedRequest extends Request {
  user?: AuthUserPayload
}

function getAccessToken(req: Request) {
  const bearerToken = req.headers.authorization?.replace('Bearer ', '')
  const cookieToken = (req as Request & { cookies?: Record<string, string> }).cookies?.reaxorium_access_token
  return bearerToken || cookieToken
}

export function authenticate(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const token = getAccessToken(req)
  if (!token) {
    return res.status(401).json({ success: false, message: 'Access token is required' })
  }

  try {
    const secret = process.env.JWT_SECRET ?? 'reaxorium_dev_secret'
    req.user = jwt.verify(token, secret) as AuthUserPayload
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

export function authenticateOptional(req: AuthenticatedRequest, _res: Response, next: NextFunction) {
  const token = getAccessToken(req)
  if (!token) {
    next()
    return
  }

  try {
    const secret = process.env.JWT_SECRET ?? 'reaxorium_dev_secret'
    req.user = jwt.verify(token, secret) as AuthUserPayload
  } catch {
    req.user = undefined
  }
  next()
}
