import { IUser } from "./user.interface";
import { User } from "./user.model";

const createUserIntoDB = async (user: IUser) => {
    const newUser = User.create(user);
    return newUser;
}

export const UserServices = {
    createUserIntoDB,
}