import express from "express";

import * as relationshipController from "./relationship.controller.js";

import {
  userIdParamSchema,
  relationshipIdParamSchema,
} from "./relationship.validator.js";

import { authenticate } from "../../middlewares/auth.middleware.js";
import { validateParams } from "../../middlewares/validate.middleware.js";

const router = express.Router();

/*
|-------------------------------------------------------------------------- 
| Requests
|-------------------------------------------------------------------------- 
*/

router.get(
  "/requests/received",
  authenticate,
  relationshipController.getReceivedRequests
);

router.get(
  "/requests/sent",
  authenticate,
  relationshipController.getSentRequests
);

/*
|-------------------------------------------------------------------------- 
| Followers / Following
|-------------------------------------------------------------------------- 
*/

router.get(
  "/followers",
  authenticate,
  relationshipController.getFollowers
);

router.get(
  "/following",
  authenticate,
  relationshipController.getFollowing
);

router.get("/:userId/followers", relationshipController.getFollowersByUserId);
router.get("/:userId/following", relationshipController.getFollowingByUserId);

router.get(
  "/:userId/status",
  authenticate,
  relationshipController.getRelationshipStatus
);


/*
|-------------------------------------------------------------------------- 
| Create relationship
|-------------------------------------------------------------------------- 
*/

router.post(
  "/:userId",
  authenticate,
  validateParams(userIdParamSchema),
  relationshipController.createRelationship
);

/*
|-------------------------------------------------------------------------- 
| Accept request
|-------------------------------------------------------------------------- 
*/

router.patch(
  "/:relationshipId/accept",
  authenticate,
  validateParams(relationshipIdParamSchema),
  relationshipController.acceptRelationship
);

/*
|-------------------------------------------------------------------------- 
| Reject request
|-------------------------------------------------------------------------- 
*/

router.patch(
  "/:relationshipId/reject",
  authenticate,
  validateParams(relationshipIdParamSchema),
  relationshipController.rejectRelationship
);

/*
|-------------------------------------------------------------------------- 
| Cancel request
|-------------------------------------------------------------------------- 
*/

router.delete(
  "/:relationshipId/request",
  authenticate,
  validateParams(relationshipIdParamSchema),
  relationshipController.cancelRequest
);

/*
|-------------------------------------------------------------------------- 
| Remove relationship
|-------------------------------------------------------------------------- 
*/

router.delete(
  "/:userId",
  authenticate,
  validateParams(userIdParamSchema),
  relationshipController.removeRelationship
);

export default router;