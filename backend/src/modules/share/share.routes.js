import express from "express";

import { authenticate } from "../../middlewares/auth.middleware.js";
import {
  shareContentController,
} from "./share.controller.js";

const router = express.Router();

router.post(
  "/:contentId/share",
  authenticate,
  shareContentController
);

export default router;