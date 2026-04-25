
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/virtual-chem-lab'

mongoose.connect(mongoUri)
  .then(() => {
    console.log('MongoDB connected')
  })
  .catch(err => {
    console.error('DB connection failed', err)
  })