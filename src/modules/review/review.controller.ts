import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { reviewService } from "./review.service";
import { sendSuccessResponse } from "../../utils/sendSuccessResponse";

const createReviewIntoDB = catchAsync(async (req: Request, res: Response) => {
    const review = await reviewService.createReviewIntoDB(req.body);
    sendSuccessResponse(res, {
        statusCode: 201,
        message: "Review created successfully",
        data: review,
    });
})

export const ReviewController = { createReviewIntoDB };