import { Router } from "express";
import { authenticate } from "../../middlewares/auth.middleware.js";
import { validate } from "../../middlewares/validate.middleware.js";
import { getMe, login, register } from "./auth.controller.js";
import { loginSchema, registerSchema } from "./auth.validator.js";

const router = Router();

router.post("/register", validate(registerSchema),register);

router.post("/login", validate(loginSchema),login);

router.get(
  "/me",
  authenticate,
  getMe
);


export default router;