import { Router } from 'express'
import loginController from '../controller/Login.js'
import registerController from '../controller/Register.js'
import logoutController from '../controller/Logout.js'

const authRouter = Router()

authRouter.post('/login', loginController)
authRouter.post('/register', registerController)
authRouter.get('/log-out', logoutController)

export default authRouter
