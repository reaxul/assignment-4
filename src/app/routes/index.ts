import { Router } from "express";
import { CourseRouter } from "../../modules/course/course.route";
import { CategoryRouter } from "../../modules/category/category.route";
import { ReviewRouter } from "../../modules/review/review.route";

const router = Router();

const routes = [
  {
    path: "/",
    route: CourseRouter,
  },
  {
    path: '/categories',
    route:CategoryRouter
  },
  {
    path: '/reviews',
    route:ReviewRouter
  }
];

routes.forEach(el => router.use(el.path, el.route));

export const globalRouter = router;