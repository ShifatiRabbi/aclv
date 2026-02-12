import express from 'express'
import cors from 'cors'
import './config/db.ts'

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

app.listen(PORT, () => {
  console.log(`Server running on  http://localhost:${PORT}`)
})

export default app
