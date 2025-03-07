import { Request, Response } from 'express'
import ApiErrorResponse from '../utils/ApiErrorResponse.js'
import { statusCodes } from '../constants/statusCodes.js'

export default function globalErrorHandler(error: unknown, req: Request, res: Response) {
    if (error instanceof ApiErrorResponse) {
        res.status(error.statusCode).json(error.getResponse())
        return
    }
    const unexpectedErrorResponse = new ApiErrorResponse(
        statusCodes.SERVER_ERROR,
        'Unexpected Error'
    )
    unexpectedErrorResponse.setError([
        {
            code: '500',
            title: 'Internal Server Error',
            detail: 'An unexpected error occurred. Please try again later.'
        }
    ])
    res.status(unexpectedErrorResponse.statusCode).json(unexpectedErrorResponse.getResponse())
}
