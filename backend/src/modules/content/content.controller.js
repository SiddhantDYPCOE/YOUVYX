import {
  createNewContent,
  getContent,
  getCreatorContents,
  getContentsForUser,
  updateExistingContent,
  deleteExistingContent,
} from "./content.service.js";

export async function createContent(req, res, next) {
  try {
    const content = await createNewContent(
      req.user.id,
      req.user.accountType,
      req.body
    );

    return res.status(201).json({
      success: true,
      message: "Content created successfully",
      data: { content },
    });
  } catch (error) {
    next(error);
  }
}

export async function getContentById(
  req,
  res,
  next
) {
  try {
    const content = await getContentById(
      req.params.contentId,
      req.user.id
    );

    return res.status(200).json({
      success: true,
      message: "Content retrieved successfully",
      data: { content },
    });
  } catch (error) {
    next(error);
  }
}

export async function getMyContents(req, res, next) {
  try {
    const contents = await getCreatorContents(
      req.user.id
    );

    return res.status(200).json({
      success: true,
      message: "Your content retrieved successfully",
      data: { contents },
    });
  } catch (error) {
    next(error);
  }
}


export async function getContentsForMyGenres(
  req,
  res,
  next
) {
  try {
    const contents = await getContentsForUser(
      req.user.id
    );

    return res.status(200).json({
      success: true,
      message: "Productive content retrieved successfully",
      data: { contents },
    });
  } catch (error) {
    next(error);
  }
}

export async function updateContent(
  req,
  res,
  next
) {
  try {
    const content = await updateExistingContent(
      req.params.contentId,
      req.user.id,
      req.user.accountType,
      req.body
    );

    return res.status(200).json({
      success: true,
      message: "Content updated successfully",
      data: { content },
    });
  } catch (error) {
    next(error);
  }
}

export async function deleteContent(
  req,
  res,
  next
) {
  try {
    const result = await deleteExistingContent(
      req.params.contentId,
      req.user.id,
      req.user.accountType
    );

    return res.status(200).json({
      success: true,
      message: result.message,
    });
  } catch (error) {
    next(error);
  }
}