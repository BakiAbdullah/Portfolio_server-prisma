import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import { AuthRoutes } from "./modules/auth/auth.routes";
import { blogRoutes } from "./modules/blogs/blog.routes";
import { userRoutes } from "./modules/user/user.routes";
const app = express();

// Middleware
app.use(express.json()); // Parse incoming JSON requests
app.use(cookieParser());
app.set("trust proxy", 1);
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "https://portfolio-app-nextjs-nine.vercel.app",
    credentials: true,
  })
);
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     credentials: true,
//   })
// );

app.use("/api/v1/auth", AuthRoutes);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/blogs", blogRoutes);

// Default route for testing
app.get("/", (_req, res) => {
  res.send("Portfolio API is running");
});

// 404 Handler
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

export default app;
