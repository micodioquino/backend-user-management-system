import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv/config'
import db from './database/db.js'
import userRoutes from './routes/userRoutes.js'
import authRoutes from './routes/authRoutes.js'
const port = process.env.PORT || 8000

const app = express()

app.use(cors())
app.use(express.json())
app.use('/users', userRoutes)
app.use('/', authRoutes)

try {
    await db.authenticate()
    console.log('Database connected')
} catch (error) {
    console.log(`Database not connected: ${error} `)
}


app.listen(port, () => {
    console.log(`Server is running in port ${port}`)
})