import { Response } from "express";

interface ISuccessResponse<T> {
  statusCode: number;
  message: string;
  meta?: IMeta;
  data: T | T[];
}

interface IMeta {
  page?: string | number;
  limit?: string | number;
  total?: string | number;
}

export const sendSuccessResponse = <T>(
  res: Response,
  data: ISuccessResponse<T>,
) => {
  const response = {
    success: true,
    statusCode: data.statusCode,
    message: data.message,
    data: data.data,
  };

  res.status(data.statusCode).json(response);
};
