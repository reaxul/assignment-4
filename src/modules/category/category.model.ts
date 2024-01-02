import { Schema, model } from "mongoose";
import { ICategory } from "./category.interface";

const categorySchema = new Schema<ICategory>({
    name: { type: 'string' }
})

export const Category = model<ICategory>('Category', categorySchema)