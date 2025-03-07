import { NextFunction, Request, Response } from 'express'
import { ZodSchema } from 'zod'

export function validator(schema: ZodSchema) {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            schema.parse(req)
            next()
        } catch (error) {
            console.error(error)
            //   next(new AppError(statusCodes.));
        }
    }
}
