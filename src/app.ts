import express from 'express'
import cors from 'cors'
import corsConfig from './config/cors.config.js'
import apiRoutes from './config/apiRoutes.js'
import morgan from 'morgan'
import helmet from 'helmet'
import globalErrorHandler from './middlewares/globalErrorHandler.js'
import path from 'path'

const app = express()

// middleware
app.use(express.json({ limit: '16kb' }))
app.use(express.static(path.join(import.meta.dirname, '../', 'public')))
app.use(cors(corsConfig))
app.use(helmet())
app.use(morgan('dev'))

// routes
app.use('/api/v1', apiRoutes)

// 404 handler

//global error handler
app.use(globalErrorHandler)

export default app
