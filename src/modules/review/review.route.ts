import { Router } from "express";
import { ReviewController } from "./review.controller";

const router = Router();

router.post('/', ReviewController.createReviewIntoDB);

export const ReviewRouter = router;