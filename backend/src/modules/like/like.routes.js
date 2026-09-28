import express from "express";

import { authenticate } from "../../middlewares/auth.middleware.js";
import { toggleLikeController } from "./like.controller.js";

const router = express.Router();

router.post(
  "/:contentId/like",
  authenticate,
  toggleLikeController
);

export default router;