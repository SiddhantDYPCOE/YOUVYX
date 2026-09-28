export function requireAdmin(req, res, next) {
  if (req.user?.accountType !== "ADMIN") {
    return res.status(403).json({
      success: false,
      message: "Admin access required",
    });
  }

  next();
}