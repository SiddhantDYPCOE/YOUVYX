import {
  registerUser,
  loginUser,
  getCurrentUser,
  getPublicUserProfileService,
} from "./auth.service.js";

import { setAuthCookie } from "../../utils/authCookie.js";

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

    setAuthCookie(res, result.token);

    return res.status(200).json({
      success: true,
      message: "Login successful",
      data: {
        user: result.user,
      },
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


export const getPublicUserProfile = async (req, res, next) => {
  try {
    const user = await getPublicUserProfileService(
      req.params.userId
    );

    return res.status(200).json({
      success: true,
      message: "User profile retrieved successfully",
      data: {
        user,
      },
    });
  } catch (error) {
    next(error);
  }
};