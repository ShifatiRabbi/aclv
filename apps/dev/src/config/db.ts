
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/virtual-chem-lab'

export async function connectDb() {
  await mongoose.connect(mongoUri)
  console.log('MongoDB connected')
}