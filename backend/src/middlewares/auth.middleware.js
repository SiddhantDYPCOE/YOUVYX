import jwt from "jsonwebtoken";

export function authenticate(req, res, next) {
  try {
    /*
    |-------------------------------------------------------------------------- 
    | Get token from cookie
    |-------------------------------------------------------------------------- 
    */

    let token = req.cookies?.accessToken;

    /*
    |-------------------------------------------------------------------------- 
    | Optional Bearer token fallback
    |-------------------------------------------------------------------------- 
    | Useful during development/Postman.
    | Cookie remains the primary authentication method.
    */

    if (!token) {
      const authHeader = req.headers.authorization;

      if (authHeader) {
        const [scheme, bearerToken] = authHeader.split(" ");

        if (scheme === "Bearer" && bearerToken) {
          token = bearerToken;
        }
      }
    }

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    /*
    |-------------------------------------------------------------------------- 
    | JWT secret
    |-------------------------------------------------------------------------- 
    */

    if (!process.env.JWT_SECRET) {
      return res.status(500).json({
        success: false,
        message: "JWT_SECRET is not configured",
      });
    }

    /*
    |-------------------------------------------------------------------------- 
    | Verify token
    |-------------------------------------------------------------------------- 
    */

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    req.user = {
      id: decoded.userId,
      accountType: decoded.accountType,
    };

    next();
  } catch (error) {
    next(error);
  }
}