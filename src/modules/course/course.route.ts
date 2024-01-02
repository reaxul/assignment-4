import { Router } from "express";
import { validateRequest } from "../../middleware/validateRequest";
import { createCourseSchemaValidation, updateCourseSchemaValidation } from "./course.validation";
import { CourseController } from "./course.controller";
import auth from "../../middleware/auth";

const router = Router();

router.post('/courses',
    auth('admin'),
    validateRequest(createCourseSchemaValidation), CourseController.createCourseIntoDB);

router.get('/courses', CourseController.getAllCourseFromDB)

router.put('/courses/:courseId',
    auth('admin'),
    validateRequest(updateCourseSchemaValidation), CourseController.updateCourseIntoDB)

router.get('/courses/:courseId/reviews', CourseController.getCourseWithReviews)

router.get("/courses/best", CourseController.getBestCourseFromDB);

export const CourseRouter = router;