import { Router } from "express";

import { authenticate } from "../../middlewares/auth.middleware.js";
import {
  validate,
  validateParams,
} from "../../middlewares/validate.middleware.js";

import {
  getMe,
  getPublicUserProfile,
  login,
  register,
} from "./auth.controller.js";

import {
  loginSchema,
  registerSchema,
  userIdParamSchema,
} from "./auth.validator.js";

const router = Router();

router.post(
  "/register",
  validate(registerSchema),
  register
);

router.post(
  "/login",
  validate(loginSchema),
  login
);

router.get(
  "/me",
  authenticate,
  getMe
);

router.get(
  "/:userId",
  validateParams(userIdParamSchema),
  getPublicUserProfile
);

export default router;