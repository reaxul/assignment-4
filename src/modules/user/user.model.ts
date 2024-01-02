import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

const userSchema = new Schema<IUser>({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: {
        type: String,
        required: true,
        select: false,
    },
    role: {
        type: String,
        required: true,
        enum: ["user", "admin"],
        default: "user",
    },
    passwordHistory: [
        {
            password: { type: String, required: true },
            timeStamps: { type: String },
        },
    ],
})

userSchema.set('toJSON', {
    transform: function(doc, ret) {
        delete ret.password
        delete ret.passwordHistory
    }
})

export const User=model<IUser>('User', userSchema)