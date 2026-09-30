
import {
  registerUser,
  loginUser,
  getCurrentUser,
  becomeCreator,
} from "./auth.service.js";

export async function register(req, res, next) {
  try {
    const user = await registerUser(req.body);

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: {
        user,
      },
    });
  } catch (error) {
    next(error);
  }
}

export async function login(req, res, next) {
  try {
    const result = await loginUser(
      req.body.email,
      req.body.password
    );

    return res.status(200).json({
      success: true,
      message: "Login successful",
      data: result,
    });
  } catch (error) {
    next(error);
  }
}

export async function getMe(req, res, next) {
  try {
    const user = await getCurrentUser(req.user.id);

    return res.status(200).json({
      success: true,
      message: "Current user retrieved successfully",
      data: {
        user,
      },
    });
  } catch (error) {
    next(error);
  }
}

export async function becomeCreatorHandler(req, res, next) {
  try {
    const result = await becomeCreator(req.user.id);

    return res.status(200).json({
      success: true,
      message: "You are now a creator",
      data: result,
    });
  } catch (error) {
    next(error);
  }
}

