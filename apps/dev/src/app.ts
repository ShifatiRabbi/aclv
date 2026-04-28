import express from 'express'
import cors from 'cors'
import { connectDb } from './config/db.ts'
import chemicalsRouter from './routes/chemicals.ts'
import reactionsRouter from './routes/reactions.ts'
import elementsRouter from './routes/elements.ts'
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
  res.json({ status: 'API running successfully' })
})

app.use('/api/chemicals', chemicalsRouter)
app.use('/api/reactions', reactionsRouter)
app.use('/api/elements', elementsRouter)

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
