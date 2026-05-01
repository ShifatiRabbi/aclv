import express from 'express'
import cors from 'cors'
import { connectDb } from './config/db.ts'
import chemicalsRouter from './modules/chemicals/chemicals.route.ts'
import reactionsRouter from './modules/reactions/reactions.route.ts'
import elementsRouter from './modules/elements/elements.route.ts'
import accessoriesRouter from './modules/accessories/accessories.route.ts'
import authRouter from './modules/auth/auth.route.ts'
import { seedLabDataIfEmpty, seedElementsIfEmpty } from './seed/seedLabData.ts'

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}))

app.use(express.json())
app.use('/uploads', express.static('uploads'))

app.get('/api/health', (_, res) => {
  res.json({
    success: true,
    message: 'API running successfully',
    data: { status: 'ok' }
  })
})

app.use('/api/chemicals', chemicalsRouter)
app.use('/api/reactions', reactionsRouter)
app.use('/api/elements', elementsRouter)
app.use('/api/accessories', accessoriesRouter)
app.use('/api/auth', authRouter)

async function bootstrap() {
  try {
    await connectDb()
    await seedLabDataIfEmpty()
    await seedElementsIfEmpty()
  } catch (err) {
    console.error('Startup failed', err)
  }

  app.listen(PORT, () => {
    console.log(`Server running on  http://localhost:${PORT}`)
  })
}

bootstrap()

export default app
