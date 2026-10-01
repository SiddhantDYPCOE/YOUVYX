import * as creatorService from "./creator.service.js";

export const createCreatorProfile = async (req, res, next) => {
  try {
    const creator =
      await creatorService.createCreatorProfile(
        req.user.id,
        req.body
      );

    return res.status(201).json({
      success: true,
      message: "Creator profile created successfully",
      data: {
        creator,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const getMyCreatorProfile = async (req, res, next) => {
  try {
    const creator =
      await creatorService.getMyCreatorProfile(
        req.user.id
      );

    return res.status(200).json({
      success: true,
      message: "Creator profile retrieved successfully",
      data: {
        creator,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const updateCreatorProfile = async (req, res, next) => {
  try {
    const creator =
      await creatorService.updateCreatorProfile(
        req.user.id,
        req.body
      );

    return res.status(200).json({
      success: true,
      message: "Creator profile updated successfully",
      data: {
        creator,
      },
    });
  } catch (error) {
    next(error);
  }
};
export const getCreatorProfileByUserId = async (
  req,
  res,
  next
) => {
  try {
    const creator =
      await creatorService.getCreatorProfileByUserId(
        req.params.userId
      );

    return res.status(200).json({
      success: true,
      message: "Creator profile retrieved successfully",
      data: {
        creator,
      },
    });
  } catch (error) {
    next(error);
  }
};
export const searchCreatorsAndUsers = async (
  req,
  res,
  next
) => {
  try {
    const result =
      await creatorService.searchCreatorsAndUsers(
        req.validatedQuery.query
      );

    return res.status(200).json({
      success: true,
      message: "Search results retrieved successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};


