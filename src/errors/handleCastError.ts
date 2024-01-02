import mongoose from "mongoose";
import { TErrorResponse } from "../types/TErrorResponse";

const handleCastError = (err: mongoose.Error.CastError): TErrorResponse => {
  const regex = /"(.*?)"/;
  const matches = err.message.match(regex);
  const message = `${matches![1]} is not a valid ID!`;

  return {
    success: false,
    message: "Invalid ID",
    errorMessage: message,
  };
};

export default handleCastError;