import { NextFunction, Request, Response } from "express";
import { TRoles } from "../modules/user/user.interface";
import catchAsync from "../utils/catchAsync";
import GenericError from "../errors/GenericError";
import { verifyToken } from "../modules/auth/auth.utils";
import { JwtPayload } from "jsonwebtoken";
import { User } from "../modules/user/user.model";

const auth = (...requiredRoles: TRoles[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    if (!token) throw new GenericError("Unauthorized Access", 401);

    const decoded = verifyToken(token) as JwtPayload;

    const { _id } = decoded;

    const user = await User.findById(_id).lean();
    if (!user) throw new GenericError("Unauthorized Access", 401);

    if (requiredRoles && !requiredRoles.includes(user.role))
      throw new GenericError("Unauthorized Access", 401);
    req.user = decoded as JwtPayload;

    next();
  });
};

export default auth;