import {
  findAllGenres,
  findGenreById,
  findUserGenres,
  countUserGenres,
  findUserGenre,
  addUserGenre,
  removeUserGenre,
  replaceUserGenres,
  createGenre,
} from "./genre.repository.js";

export async function getAllGenres() {
  return findAllGenres();
}

export async function getUserGenres(userId) {
  return findUserGenres(userId);
}

export async function addGenreToUser(userId, genreId) {
  const genre = await findGenreById(genreId);

  if (!genre) {
    const error = new Error("Genre not found");
    error.statusCode = 404;
    throw error;
  }

  const existingGenre = await findUserGenre(
    userId,
    genreId
  );

  if (existingGenre) {
    const error = new Error(
      "Genre is already selected"
    );
    error.statusCode = 409;
    throw error;
  }

  const genreCount = await countUserGenres(userId);

  if (genreCount >= 5) {
    const error = new Error(
      "You can select a maximum of 5 genres"
    );
    error.statusCode = 400;
    throw error;
  }

  return addUserGenre(userId, genreId);
}

export async function removeGenreFromUser(
  userId,
  genreId
) {
  const existingGenre = await findUserGenre(
    userId,
    genreId
  );

  if (!existingGenre) {
    const error = new Error(
      "Genre is not selected"
    );
    error.statusCode = 404;
    throw error;
  }

  await removeUserGenre(userId, genreId);

  return {
    message: "Genre removed successfully",
  };
}

export async function replaceGenresForUser(
  userId,
  genreIds
) {
  const uniqueGenreIds = [...new Set(genreIds)];

  if (uniqueGenreIds.length > 5) {
    const error = new Error(
      "You can select a maximum of 5 genres"
    );
    error.statusCode = 400;
    throw error;
  }

  for (const genreId of uniqueGenreIds) {
    const genre = await findGenreById(genreId);

    if (!genre) {
      const error = new Error(
        `Genre not found: ${genreId}`
      );
      error.statusCode = 404;
      throw error;
    }
  }

  return replaceUserGenres(
    userId,
    uniqueGenreIds
  );
}

export async function createNewGenre(data) {
  return createGenre(data);
}