import { NextFunction, Request, Response } from "express"

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export const notFound = (req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({
        success: false,
        statusCode: 404,
        message: `Api not found! ${req.originalUrl}`
    })
}