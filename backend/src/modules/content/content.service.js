import {
  createContent,
  findContentById,
  findContentsByCreator,
  findContentsByGenres,
  updateContent,
  softDeleteContent,
  findContentsWithEngagement,
  findContentWithEngagement,
  createArticle,
} from "./content.repository.js";

import {
  findGenreById,
  findUserGenres,
} from "../genres/genre.repository.js";

async function validateGenre(genreId) {
  const genre = await findGenreById(genreId);

  if (!genre) {
    const error = new Error("Genre not found");
    error.statusCode = 404;
    throw error;
  }

  return genre;
}

async function validateCreator(accountType) {
  if (accountType !== "CREATOR") {
    const error = new Error(
      "Only creator accounts can manage content"
    );

    error.statusCode = 403;
    throw error;
  }
}

export async function createNewContent(
  userId,
  accountType,
  data
) {
  await validateCreator(accountType);

  await validateGenre(data.genreId);

  return createContent({
    ...data,
    creatorId: userId,
  });
}

export async function getContent(contentId) {
  const content = await findContentById(contentId);

  if (!content) {
    const error = new Error("Content not found");
    error.statusCode = 404;
    throw error;
  }

  return content;
}

export async function getCreatorContents(creatorId) {
  return findContentsByCreator(creatorId);
}


export async function getContentsForUser(userId) {
  const userGenres = await findUserGenres(userId);

  const genreIds = userGenres.map(
    (userGenre) => userGenre.genreId
  );

  if (genreIds.length === 0) {
    return [];
  }

  const contents = await findContentsByGenres(
    genreIds,
    userId
  );

  return contents.map((content) => ({
    id: content.id,
    title: content.title,
    description: content.description,
    body: content.body,
    type: content.type,
    externalUrl: content.externalUrl,
    mediaUrl: content.mediaUrl,

    genre: content.genre,
    creator: content.creator,

    likeCount: content._count.likes,
    shareCount: content._count.shares,
    likedByMe: content.likes.length > 0,

    createdAt: content.createdAt,
    updatedAt: content.updatedAt,
  }));
}

export async function updateExistingContent(
  contentId,
  userId,
  accountType,
  data
) {
  await validateCreator(accountType);

  const content = await findContentById(contentId);

  if (!content) {
    const error = new Error("Content not found");
    error.statusCode = 404;
    throw error;
  }

  if (content.creatorId !== userId) {
    const error = new Error(
      "You can only update your own content"
    );

    error.statusCode = 403;
    throw error;
  }

  if (data.genreId) {
    await validateGenre(data.genreId);
  }

  return updateContent(contentId, data);
}

export async function deleteExistingContent(
  contentId,
  userId,
  accountType
) {
  await validateCreator(accountType);

  const content = await findContentById(contentId);

  if (!content) {
    const error = new Error("Content not found");
    error.statusCode = 404;
    throw error;
  }

  if (content.creatorId !== userId) {
    const error = new Error(
      "You can only delete your own content"
    );

    error.statusCode = 403;
    throw error;
  }

  await softDeleteContent(contentId);

  return {
    message: "Content deleted successfully",
  };
}


export async function getContentByIdService(
  contentId,
  userId
) {
  const content = await findContentById(
    contentId,
    userId
  );

  if (!content) {
    const error = new Error("Content not found");
    error.statusCode = 404;
    throw error;
  }

  return {
    id: content.id,

    title: content.title,
    description: content.description,

    type: content.type,

    // Generic/legacy fields if they still exist
    body: content.body,
    externalUrl: content.externalUrl,
    mediaUrl: content.mediaUrl,

    // Content relationships
    genre: content.genre,
    creator: content.creator,

    // Content type specific data
    article: content.article,
    image: content.image,
    video: content.video,

    challenge: content.challenge,

    // Engagement
    likeCount: content._count.likes,
    shareCount: content._count.shares,
    likedByMe: content.likes.length > 0,

    createdAt: content.createdAt,
    updatedAt: content.updatedAt,
  };
}

export async function getContents(userId) {
  const contents = await findContentsWithEngagement(userId);

  return contents.map((content) => ({
    id: content.id,
    title: content.title,
    description: content.description,
    body: content.body,
    type: content.type,
    externalUrl: content.externalUrl,
    mediaUrl: content.mediaUrl,

    genre: content.genre,
    creator: content.creator,

    likeCount: content._count.likes,
    shareCount: content._count.shares,
    likedByMe: content.likes.length > 0,

    createdAt: content.createdAt,
    updatedAt: content.updatedAt,
  }));
}


export const createArticleService = async ({
  creatorId,
  title,
  description,
  genreId,
  subject,
  body,
  pdfUrl,
  pdfFileName,
}) => {
  const cleanBody = body?.trim() || null;

  if (!cleanBody && !pdfUrl) {
    throw new Error(
      "Article must contain either body content or a PDF"
    );
  }

  const article = await createArticle({
    creatorId,
    title: title.trim(),
    description: description.trim(),
    genreId: genreId.trim(),
    subject: subject.trim(),
    body: cleanBody,
    pdfUrl,
    pdfFileName,
  });

  return article;
};