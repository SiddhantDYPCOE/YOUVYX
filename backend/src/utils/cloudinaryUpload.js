import cloudinary from "../config/cloudinary.js";

export const uploadToCloudinary = ({
  buffer,
  folder,
  resourceType = "auto",
  publicId,
  transformation, // NEW: optional incoming transformation (e.g. crop to aspect ratio)
}) => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder,
        resource_type: resourceType,
        public_id: publicId,
        ...(transformation ? { transformation } : {}),
      },
      (error, result) => {
        if (error) {
          reject(error);
          return;
        }
 
        resolve(result);
      }
    );
 
    uploadStream.end(buffer);
  });
};
 