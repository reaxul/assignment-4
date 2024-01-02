import { Router } from "express";
import { validateRequest } from "../../middleware/validateRequest";
import { authValidation } from "./auth.validation";
import { AuthController } from "./auth.controller";
import auth from "../../middleware/auth";

const router = Router();

router.post(
  "/register",
  validateRequest(authValidation.registerValidation),
  AuthController.register,
);

router.post(
  "/login",
  validateRequest(authValidation.loginValidation),
  AuthController.login,
);

router.post(
  "/change-password",
  auth("admin", "user"),
  validateRequest(authValidation.changePasswordValidation),
  AuthController.changePassword,
);

export const authRoute = router;
