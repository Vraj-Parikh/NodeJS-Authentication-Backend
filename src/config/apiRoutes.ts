import { Router } from 'express'
import authRouter from '../services/auth/router/router.js'

const apiRoutes = Router()
apiRoutes.use('/user/auth', authRouter)

export default apiRoutes
