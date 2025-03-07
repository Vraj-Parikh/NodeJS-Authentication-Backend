import { Response } from 'express'
import { TApiResponse, TApiResponseMeta, TApiResponseResourceData } from '../types/ApiResponse.js'

export function sendApiResponse(
    res: Response,
    statusCode: number,
    data: TApiResponseResourceData[],
    meta?: TApiResponseMeta
) {
    const response: TApiResponse = {
        meta: null,
        errors: null,
        data: null
    }
    response.data = data
    if (meta) {
        response.meta = meta
    }
    res.status(statusCode).json(response)
}
