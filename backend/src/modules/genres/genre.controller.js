import {
  getAllGenres,
  getUserGenres,
  addGenreToUser,
  removeGenreFromUser,
  replaceGenresForUser,
  createNewGenre,
} from "./genre.service.js";

export async function getGenres(req, res, next) {
  try {
    const genres = await getAllGenres();

    return res.status(200).json({
      success: true,
      message: "Genres retrieved successfully",
      data: { genres },
    });
  } catch (error) {
    next(error);
  }
}

export async function getMyGenres(req, res, next) {
  try {
    const genres = await getUserGenres(req.user.id);

    return res.status(200).json({
      success: true,
      message: "Selected genres retrieved successfully",
      data: { genres },
    });
  } catch (error) {
    next(error);
  }
}

export async function addGenre(req, res, next) {
  try {
    const { genreId } = req.body;

    const genres = [];

    for (const id of genreId) {
      const genre = await addGenreToUser(
        req.user.id,
        id
      );

      genres.push(genre);
    }

    return res.status(201).json({
      success: true,
      message: "Genres added successfully",
      data: { genres },
    });
  } catch (error) {
    next(error);
  }
}

export async function replaceGenres(req, res, next) {
  try {
    const genres = await replaceGenresForUser(
      req.user.id,
      req.body.genreIds
    );

    return res.status(200).json({
      success: true,
      message: "Genres updated successfully",
      data: { genres },
    });
  } catch (error) {
    next(error);
  }
}

export async function removeGenre(req, res, next) {
  try {
    const result = await removeGenreFromUser(
      req.user.id,
      req.params.genreId
    );

    return res.status(200).json({
      success: true,
      message: result.message,
    });
  } catch (error) {
    next(error);
  }
}

export async function createGenreHandler(req, res, next) {
  try {
    const genre = await createNewGenre(req.body);

    return res.status(201).json({
      success: true,
      message: "Genre created successfully",
      data: { genre },
    });
  } catch (error) {
    next(error);
  }
}