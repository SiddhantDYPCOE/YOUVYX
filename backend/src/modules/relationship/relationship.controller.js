import * as relationshipService from "./relationship.service.js";

/*
|-------------------------------------------------------------------------- 
| Create relationship
|-------------------------------------------------------------------------- 
*/

export const createRelationship = async (req, res) => {
  try {
    const relationship = await relationshipService.createRelationship(
      req.user.id,
      req.params.userId
    );

    return res.status(201).json({
      success: true,
      message: "Relationship created successfully",
      data: {
        relationship,
      },
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/*
|-------------------------------------------------------------------------- 
| Accept
|-------------------------------------------------------------------------- 
*/

export const acceptRelationship = async (req, res) => {
  try {
    const relationship = await relationshipService.acceptRelationship(
      req.user.id,
      req.params.relationshipId
    );

    return res.status(200).json({
      success: true,
      message: "Follow request accepted successfully",
      data: {
        relationship,
      },
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/*
|-------------------------------------------------------------------------- 
| Reject
|-------------------------------------------------------------------------- 
*/

export const rejectRelationship = async (req, res) => {
  try {
    const relationship = await relationshipService.rejectRelationship(
      req.user.id,
      req.params.relationshipId
    );

    return res.status(200).json({
      success: true,
      message: "Follow request rejected successfully",
      data: {
        relationship,
      },
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/*
|-------------------------------------------------------------------------- 
| Cancel request
|-------------------------------------------------------------------------- 
*/

export const cancelRequest = async (req, res) => {
  try {
    await relationshipService.cancelRequest(
      req.user.id,
      req.params.relationshipId
    );

    return res.status(200).json({
      success: true,
      message: "Follow request cancelled successfully",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/*
|-------------------------------------------------------------------------- 
| Remove relationship
|-------------------------------------------------------------------------- 
*/

export const removeRelationship = async (req, res) => {
  try {
    await relationshipService.removeRelationship(
      req.user.id,
      req.params.userId
    );

    return res.status(200).json({
      success: true,
      message: "Relationship removed successfully",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/*
|-------------------------------------------------------------------------- 
| Received requests
|-------------------------------------------------------------------------- 
*/

export const getReceivedRequests = async (req, res) => {
  try {
    const requests = await relationshipService.getReceivedRequests(
      req.user.id
    );

    return res.status(200).json({
      success: true,
      message: "Received requests retrieved successfully",
      data: {
        requests,
      },
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/*
|-------------------------------------------------------------------------- 
| Sent requests
|-------------------------------------------------------------------------- 
*/

export const getSentRequests = async (req, res) => {
  try {
    const requests = await relationshipService.getSentRequests(
      req.user.id
    );

    return res.status(200).json({
      success: true,
      message: "Sent requests retrieved successfully",
      data: {
        requests,
      },
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/*
|-------------------------------------------------------------------------- 
| Followers
|-------------------------------------------------------------------------- 
*/

export const getFollowers = async (req, res) => {
  try {
    const followers = await relationshipService.getFollowers(
      req.user.id
    );

    return res.status(200).json({
      success: true,
      message: "Followers retrieved successfully",
      data: {
        followers,
      },
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/*
|-------------------------------------------------------------------------- 
| Following
|-------------------------------------------------------------------------- 
*/

export const getFollowing = async (req, res) => {
  try {
    const following = await relationshipService.getFollowing(
      req.user.id
    );

    return res.status(200).json({
      success: true,
      message: "Following retrieved successfully",
      data: {
        following,
      },
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};