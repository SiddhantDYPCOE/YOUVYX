export function errorMiddleware(err, req, res, next) {
  console.error("ERROR:", {
    message: err.message,
    name: err.name,
    code: err.code,
    path: req.path,
    method: req.method,
  });

  // -----------------------------------------
  // ZOD VALIDATION ERROR
  // -----------------------------------------
  if (err.name === "ZodError") {
    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors: err.issues.map((issue) => ({
        field: issue.path.join(".") || "unknown",
        message: issue.message,
      })),
    });
  }

  // -----------------------------------------
  // PRISMA ERRORS
  // -----------------------------------------

  // Unique constraint violation
  if (err.code === "P2002") {
    const target = Array.isArray(err.meta?.target)
      ? err.meta.target
      : [err.meta?.target];

    return res.status(409).json({
      success: false,
      message: "A record with this value already exists",
      fields: target.filter(Boolean),
    });
  }

  // Record not found
  if (err.code === "P2025") {
    return res.status(404).json({
      success: false,
      message: "Requested record was not found",
    });
  }

  // Foreign key constraint failed
  if (err.code === "P2003") {
    return res.status(400).json({
      success: false,
      message: "Invalid related record",
    });
  }

  // Required relation violation
  if (err.code === "P2014") {
    return res.status(400).json({
      success: false,
      message: "Invalid relationship between records",
    });
  }

  // -----------------------------------------
  // JWT ERRORS
  // -----------------------------------------

  if (err.name === "JsonWebTokenError") {
    return res.status(401).json({
      success: false,
      message: "Invalid authentication token",
    });
  }

  if (err.name === "TokenExpiredError") {
    return res.status(401).json({
      success: false,
      message: "Authentication token has expired",
    });
  }

  if (err.name === "NotBeforeError") {
    return res.status(401).json({
      success: false,
      message: "Authentication token is not active",
    });
  }

  // -----------------------------------------
  // AUTHENTICATION / AUTHORIZATION
  // -----------------------------------------

  if (err.statusCode === 401) {
    return res.status(401).json({
      success: false,
      message: err.message || "Authentication required",
    });
  }

  if (err.statusCode === 403) {
    return res.status(403).json({
      success: false,
      message: err.message || "You do not have permission to perform this action",
    });
  }

  // -----------------------------------------
  // JSON BODY PARSING ERROR
  // -----------------------------------------

  if (
    err instanceof SyntaxError &&
    err.status === 400 &&
    err.type === "entity.parse.failed"
  ) {
    return res.status(400).json({
      success: false,
      message: "Invalid JSON request body",
    });
  }

  // -----------------------------------------
  // CUSTOM APPLICATION ERRORS
  // -----------------------------------------

  if (err.statusCode) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message || "Request failed",
    });
  }

  // -----------------------------------------
  // UNKNOWN / UNEXPECTED ERROR
  // -----------------------------------------

  return res.status(500).json({
    success: false,
    message: "Internal server error",
  });
}