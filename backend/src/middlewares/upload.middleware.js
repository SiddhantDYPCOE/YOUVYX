import multer from "multer";

const storage = multer.memoryStorage();

/* ---------- existing: PDF upload (unchanged) ---------- */
const pdfFilter = (req, file, cb) => {
  if (file.mimetype === "application/pdf") {
    cb(null, true);
    return;
  }

  cb(new Error("Only PDF files are allowed"), false);
};

export const upload = multer({
  storage,
  fileFilter: pdfFilter,
  limits: {
    fileSize: 10 * 1024 * 1024,
  },
});

/* ---------- NEW: image upload for posts ---------- */
const ALLOWED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"];

const imageFilter = (req, file, cb) => {
  if (ALLOWED_IMAGE_TYPES.includes(file.mimetype)) {
    cb(null, true);
    return;
  }

  cb(new Error("Only JPG, PNG or WEBP images are allowed"), false);
};

const imageUpload = multer({
  storage,
  fileFilter: imageFilter,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10 MB
    files: 1,
  },
});

// Wrapper so multer errors come back as clean 400 responses
export const uploadPostImage = (req, res, next) => {
  imageUpload.single("image")(req, res, (err) => {
    if (!err) return next();

    const message =
      err instanceof multer.MulterError && err.code === "LIMIT_FILE_SIZE"
        ? "Image must be 10 MB or smaller"
        : err.message || "Image upload failed";

    return res.status(400).json({ success: false, message });
  });
};

// multipart/form-data sends everything as strings, so normalise the body
// BEFORE it reaches your validator.
export const parsePostFormData = (req, res, next) => {
  try {
    let ids = req.body.taggedUserIds;

    if (typeof ids === "string") {
      ids = ids.trim() ? JSON.parse(ids) : [];
    }

    req.body.taggedUserIds = Array.isArray(ids) ? ids : [];

    if (!req.body.challengeId) delete req.body.challengeId;

    next();
  } catch {
    res.status(400).json({
      success: false,
      message: "taggedUserIds must be a valid JSON array",
    });
  }
};