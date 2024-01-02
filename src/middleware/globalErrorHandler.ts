import { NextFunction, Request, Response } from "express";
import { TErrorResponse } from "../types/TErrorResponse";
import mongoose from "mongoose";
import handleCastError from "../errors/handleCastError";
import { ZodError } from "zod";
import handleZodError from "../errors/handleZodError";

export const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    let errorResponse: TErrorResponse = {
        success: false,
        message: "error",
        errorMessage: err.message || "Internal server error!",
    };
    if (err instanceof mongoose.Error.CastError) errorResponse = handleCastError(err);
    if (err instanceof ZodError) errorResponse = handleZodError(err);

    res.status(err.statusCode || 500).json({
        success: errorResponse.success,
        message: errorResponse.message,
        errorMessage: errorResponse.errorMessage,
        errorDetails: err,
        stack: err.stack,
    });
}
