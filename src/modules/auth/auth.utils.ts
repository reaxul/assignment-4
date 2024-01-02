import jwt from "jsonwebtoken";
import { Types } from "mongoose";
import config from "../../app/config";

export const createToken = (payload: { _id: Types.ObjectId; email: string; role: string; }) => {
    return jwt.sign(payload, config.jwt_access_secret!, { expiresIn: '1d' });
}

export const verifyToken = (token: string) => {
    return jwt.verify(token, config.jwt_access_secret!);
}