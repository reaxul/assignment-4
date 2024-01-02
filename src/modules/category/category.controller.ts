import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { sendSuccessResponse } from "../../utils/sendSuccessResponse";
import { CategoryServices } from "./category.service";

const createCategoryIntoDB = catchAsync(async (req: Request, res: Response) => {
    const category = await CategoryServices.createCategoryIntoDB(req.body);
    sendSuccessResponse(res, {
        statusCode: 201,
        message: "Category created successfully",
        data: category,
    })
})

const getAllCategoriesFromDB = catchAsync(async (req: Request, res: Response) => {
    const categories = await CategoryServices.getAllCategoriesFromDB();
    sendSuccessResponse(res, {
        statusCode: 200,
        message: "Categories retrieved successfully",
        data: categories,
    })
})

export const CategoryController = {
    createCategoryIntoDB,
    getAllCategoriesFromDB,
}