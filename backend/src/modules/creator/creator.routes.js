import express from "express";

import * as creatorController from "./creator.controller.js";

import {
  createCreatorSchema,
  creatorSearchSchema,
  updateCreatorSchema,
  userIdParamSchema,
} from "./creator.validator.js";

import { authenticate } from "../../middlewares/auth.middleware.js";
import { validate, validateParams, validateQuery } from "../../middlewares/validate.middleware.js";

const router = express.Router();

router.post(
  "/",
  authenticate,
  validate(createCreatorSchema),
  creatorController.createCreatorProfile
);

router.get(
  "/me",
  authenticate,
  creatorController.getMyCreatorProfile
);

router.get(
  "/search",
  validateQuery(creatorSearchSchema),
  creatorController.searchCreatorsAndUsers
);

router.get(
  "/:userId",
  validateParams(userIdParamSchema),
  creatorController.getCreatorProfileByUserId
);

router.patch(
  "/me",
  authenticate,
  validate(updateCreatorSchema),
  creatorController.updateCreatorProfile
);



export default router;