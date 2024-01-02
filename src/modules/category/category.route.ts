import { Router } from "express";
import { validateRequest } from "../../middleware/validateRequest";
import { createCategoryValidation } from "./category.validation";
import { CategoryController } from "./category.controller";

const router = Router();

router.post('/',
    validateRequest(createCategoryValidation), CategoryController.createCategoryIntoDB);

router.get('/', CategoryController.getAllCategoriesFromDB)
    
export const CategoryRouter = router;