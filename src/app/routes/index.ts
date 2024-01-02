import { Router } from "express";
import { CourseRouter } from "../../modules/course/course.route";
import { CategoryRouter } from "../../modules/category/category.route";
import { ReviewRouter } from "../../modules/review/review.route";
import { authRoute } from "../../modules/auth/auth.route";

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
  },
  {
    path: "/auth",
    route: authRoute,
  },
];

routes.forEach(el => router.use(el.path, el.route));

export const globalRouter = router;