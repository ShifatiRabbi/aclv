import { Router } from 'express'
import fs from 'node:fs'
import path from 'node:path'
import multer from 'multer'
import { authenticate, authenticateOptional, authorize } from '../../common/middleware/auth.ts'
import { validateRequest } from '../../common/middleware/validate.ts'
import { feedbackController } from './feedback.controller.ts'
import { adminFeedbackQuerySchema, createFeedbackSchema, updateFeedbackStatusSchema } from './feedback.validation.ts'

const feedbackRouter = Router()

const uploadDir = path.join(process.cwd(), 'uploads', 'feedback')
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true })
}

const upload = multer({
  storage: multer.diskStorage({
    destination: (_req, _file, cb) => cb(null, uploadDir),
    filename: (_req, file, cb) => {
      const ext = path.extname(file.originalname).toLowerCase()
      cb(null, `${Date.now()}-${Math.random().toString(16).slice(2)}${ext}`)
    }
  }),
  limits: { fileSize: 1024 * 1024, files: 1 },
  fileFilter: (_req, file, cb) => {
    if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.mimetype)) {
      cb(new Error('Only jpeg, png, and webp images are allowed'))
      return
    }
    cb(null, true)
  }
})

feedbackRouter.post('/', authenticateOptional, upload.single('image'), validateRequest(createFeedbackSchema), feedbackController.create)
feedbackRouter.get(
  '/admin/feedback',
  authenticate,
  authorize('super_admin', 'admin', 'staff'),
  validateRequest(adminFeedbackQuerySchema),
  feedbackController.list
)
feedbackRouter.patch(
  '/admin/feedback/:id',
  authenticate,
  authorize('super_admin', 'admin', 'staff'),
  validateRequest(updateFeedbackStatusSchema),
  feedbackController.updateStatus
)

feedbackRouter.use((err: any, _req: any, res: any, next: any) => {
  if (err instanceof multer.MulterError || err?.message?.includes('Only jpeg')) {
    return res.status(400).json({ success: false, message: err.message })
  }
  next(err)
})

export default feedbackRouter

