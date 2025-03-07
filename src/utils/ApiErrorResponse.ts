import { NextFunction } from 'express'
import { TApiResponse, TApiResponseErrorType, TApiResponseMeta } from '../types/ApiResponse.js'

export function sendApiError(
    next: NextFunction,
    errorType: string,
    statusCode: number,
    errors: TApiResponseErrorType[],
    meta?: TApiResponseMeta
) {
    const response: TApiResponse = {
        meta: null,
        errors: null,
        data: null
    }
    response.errors = errors
    if (meta) {
        response.meta = meta
    }
    const errorInstance = new ApiErrorResponse(statusCode, errorType)
    errorInstance.setError(errors)
    if (meta) {
        errorInstance.setMeta(meta)
    }
    next(errorInstance)
}

class ApiErrorResponse extends Error {
    statusCode: number
    response: TApiResponse
    constructor(statusCode: number, errorType: string) {
        super(errorType)
        this.statusCode = statusCode
        this.response = {
            meta: null,
            errors: null,
            data: null
        }
    }
    getResponse() {
        return this.response
    }
    setError(errors: TApiResponseErrorType[]) {
        this.response.errors = [...(this.response.errors || []), ...errors]
    }
    setMeta(meta: TApiResponseMeta) {
        this.response.meta = meta
    }
}

export default ApiErrorResponse
