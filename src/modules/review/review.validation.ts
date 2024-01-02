import { Types } from "mongoose";
import { z } from "zod";

export const reviewSchema = z.object({
    courseId: z.string().refine((value) => Types.ObjectId.isValid(value), {
      message: "Invalid ObjectId for courseId",
    }),
    rating: z.number().int().min(1).max(5),
    review: z.string(),
  });