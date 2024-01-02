import { Router } from "express";
import { validateRequest } from "../../middleware/validateRequest";
import { createCourseSchemaValidation, updateCourseSchemaValidation } from "./course.validation";
import { CourseController } from "./course.controller";

const router = Router();

router.post('/course',
    validateRequest(createCourseSchemaValidation), CourseController.createCourseIntoDB);

router.get('/courses', CourseController.getAllCourseFromDB)

router.put('/courses/:courseId',
    validateRequest(updateCourseSchemaValidation), CourseController.updateCourseIntoDB)

router.get('/courses/:courseId/reviews', CourseController.getCourseWithReviews)

router.get("/course/best", CourseController.getBestCourseFromDB);

export const CourseRouter = router;