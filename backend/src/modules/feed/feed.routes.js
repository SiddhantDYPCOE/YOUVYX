import { Router } from "express";
import { getForYouFeed } from "./feed.controller.js";
import { authenticate } from "../../middlewares/auth.middleware.js";

const router = Router();

router.get("/for-you", authenticate, getForYouFeed);

export default router;