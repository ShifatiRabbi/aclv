import mongoose from 'mongoose'

const InstitutionSchema = new mongoose.Schema(
  { name: { type: String, required: true, index: true }, code: { type: String, required: true, unique: true } },
  { timestamps: true }
)
const ClassroomSchema = new mongoose.Schema(
  { name: String, teacherId: { type: String, index: true }, studentIds: { type: [String], default: [] } },
  { timestamps: true }
)
const QuizSchema = new mongoose.Schema(
  { title: String, classroomId: { type: String, index: true }, createdBy: { type: String, index: true } },
  { timestamps: true }
)
const QuizAttemptSchema = new mongoose.Schema(
  { quizId: { type: String, index: true }, userId: { type: String, index: true }, score: Number },
  { timestamps: true }
)
const AchievementSchema = new mongoose.Schema(
  { key: { type: String, unique: true, index: true }, title: String, xpReward: Number },
  { timestamps: true }
)
const WalletSchema = new mongoose.Schema(
  { userId: { type: String, unique: true, index: true }, balance: { type: Number, default: 0 } },
  { timestamps: true }
)
const TransactionSchema = new mongoose.Schema(
  { userId: { type: String, index: true }, amount: Number, type: String, status: String },
  { timestamps: true }
)
const NotificationSchema = new mongoose.Schema(
  { userId: { type: String, index: true }, title: String, message: String, isRead: { type: Boolean, default: false } },
  { timestamps: true }
)
const TicketSchema = new mongoose.Schema(
  { userId: { type: String, index: true }, subject: String, status: String, priority: String },
  { timestamps: true }
)
const AuditLogSchema = new mongoose.Schema(
  { actorId: { type: String, index: true }, action: String, target: String, metadata: mongoose.Schema.Types.Mixed },
  { timestamps: true }
)
const ExperimentAttemptSchema = new mongoose.Schema(
  { experimentId: { type: String, index: true }, userId: { type: String, index: true }, score: Number, status: String },
  { timestamps: true }
)

export const InstitutionModel = mongoose.models.Institution || mongoose.model('Institution', InstitutionSchema)
export const ClassroomModel = mongoose.models.Classroom || mongoose.model('Classroom', ClassroomSchema)
export const QuizModel = mongoose.models.Quiz || mongoose.model('Quiz', QuizSchema)
export const QuizAttemptModel = mongoose.models.QuizAttempt || mongoose.model('QuizAttempt', QuizAttemptSchema)
export const AchievementModel = mongoose.models.Achievement || mongoose.model('Achievement', AchievementSchema)
export const WalletModel = mongoose.models.Wallet || mongoose.model('Wallet', WalletSchema)
export const TransactionModel = mongoose.models.Transaction || mongoose.model('Transaction', TransactionSchema)
export const NotificationModel = mongoose.models.Notification || mongoose.model('Notification', NotificationSchema)
export const TicketModel = mongoose.models.Ticket || mongoose.model('Ticket', TicketSchema)
export const AuditLogModel = mongoose.models.AuditLog || mongoose.model('AuditLog', AuditLogSchema)
export const ExperimentAttemptModel =
  mongoose.models.ExperimentAttempt || mongoose.model('ExperimentAttempt', ExperimentAttemptSchema)
