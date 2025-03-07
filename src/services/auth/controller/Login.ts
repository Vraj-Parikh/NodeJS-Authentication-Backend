import { Request, Response } from 'express'
import { sendApiResponse } from '../../../utils/ApiDataResponse.js'
import { statusCodes } from '../../../constants/statusCodes.js'

export default function loginController(req: Request, res: Response) {
    try {
        const data = [
            {
                id: 'xyz',
                type: 'Login'
            }
        ]
        sendApiResponse(res, statusCodes.OK, data)
    } catch (error) {
        console.error(error)
    }
}
