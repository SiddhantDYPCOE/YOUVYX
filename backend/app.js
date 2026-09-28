import express from "express";
import dotenv from "dotenv";

import authRoutes from "./src/modules/auth/auth.routes.js"
import genreRoutes from "./src/modules/genres/genre.routes.js"
import contentRoutes from "./src/modules/content/content.routes.js"
import likeRoutes from "./src/modules/like/like.routes.js"
import shareRoutes from "./src/modules/share/share.routes.js"
import { errorMiddleware } from "./src/middlewares/error.middleware.js";

dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "YOUVYX API is running",
  });
});

app.use("/api/youvyx/auth/", authRoutes)
app.use("/api/youvyx/genre/", genreRoutes)
app.use("/api/youvyx/content/", contentRoutes)
app.use("/api/youvyx/content/", likeRoutes)
app.use("/api/youvyx/content/", shareRoutes)

app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`YOUVYX Server running on port ${PORT}`);
});