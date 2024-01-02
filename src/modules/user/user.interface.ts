import { USER_ROLE } from "./user.constant";

export type TRoles = keyof typeof USER_ROLE;

type PasswordHistory = {
  password: string;
  timeStamps?: Date;
}[];

export interface IUser {
  username: string;
  email: string;
  password: string;
  role: TRoles;
  passwordHistory?: PasswordHistory;
}