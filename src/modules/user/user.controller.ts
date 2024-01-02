import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { UserServices } from "./user.service";
import { sendSuccessResponse } from "../../utils/sendSuccessResponse";

const createUser = catchAsync(async (req: Request, res: Response) => {
    const newUser = await UserServices.createUserIntoDB(req.body);

    sendSuccessResponse(res, {
        statusCode: 201,
        message: "User created successfully",
        data: newUser,
    })
})
const getAllUsers = catchAsync(async (req: Request, res: Response) => {
    const users = await UserServices.getAllUsersFromDB();

    sendSuccessResponse(res, {
        statusCode: 200,
        message: "All users fetched successfully",
        data: users,
    });
});

const getUserById = catchAsync(async (req: Request, res: Response) => {
    const user = await UserServices.getUserByIdFromDB(req.params.id);

    sendSuccessResponse(res, {
        statusCode: 200,
        message: "User fetched successfully",
        data: user,
    });
});

const updateUserById = catchAsync(async (req: Request, res: Response) => {
    const updateUser = await UserServices.updateUserByIdFromDB(
        req.params.id,
        req.body,
    );

    sendSuccessResponse(res, {
        statusCode: 200,
        message: "User updated successfully",
        data: updateUser,
    });
});

const deleteUserById = catchAsync(async (req: Request, res: Response) => {
    const deleteUser = await UserServices.deleteUserByIdFromDB(req.params.id);

    sendSuccessResponse(res, {
        statusCode: 200,
        message: "User deleted successfully",
        data: deleteUser,
    });
});

export const UserController = {
    createUser,
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById,
};
