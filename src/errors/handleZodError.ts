import { ZodError } from "zod";
import { TErrorResponse } from "../types/TErrorResponse";

const handleZodError = (err: ZodError): TErrorResponse => {
  const errorMessagesArray = err.issues.map(el => {
    return `${el.path[el.path.length - 1]} is required`;
  });
  const errorMessage = errorMessagesArray.join(", ");

  return {
    success: false,
    message: "Zod Validation Error",
    errorMessage,
  };
};

export default handleZodError;