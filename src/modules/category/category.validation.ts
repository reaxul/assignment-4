import { z } from "zod";

export const createCategoryValidation = z.object({
    name: z.string().min(2).max(255)
})