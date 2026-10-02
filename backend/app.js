import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors"

import authRoutes from "./src/modules/auth/auth.routes.js"
import genreRoutes from "./src/modules/genres/genre.routes.js"
import contentRoutes from "./src/modules/content/content.routes.js"
import likeRoutes from "./src/modules/like/like.routes.js"
import creatorRoutes from "./src/modules/creator/creator.routes.js"
import shareRoutes from "./src/modules/share/share.routes.js"
import relationshipRoutes from "./src/modules/relationship/relationship.routes.js";
import { errorMiddleware } from "./src/middlewares/error.middleware.js";



dotenv.config();

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://192.168.1.22:5173",
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  })
);

app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "YOUVYX API is running",
  });
});

app.use("/api/youvyx/auth/", authRoutes)
app.use("/api/youvyx/genres/", genreRoutes)
app.use("/api/youvyx/content/", contentRoutes)
app.use("/api/youvyx/content/", likeRoutes)
app.use("/api/youvyx/content/", shareRoutes)
app.use("/api/youvyx/creator", creatorRoutes);
app.use("/api/youvyx/relationship", relationshipRoutes);

app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0",() => {
  console.log(`YOUVYX Server running on port ${PORT}`);
});