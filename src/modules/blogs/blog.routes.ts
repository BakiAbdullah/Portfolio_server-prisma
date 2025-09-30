import express from "express";
import { BlogController } from "./blog.controller";

const router = express.Router();

router.post("/", BlogController.createBlog);
router.get("/", BlogController.getAllBlogsFromDB);
router.get("/:id", BlogController.getSingleBlogById);
router.delete("/:id", BlogController.deleteBlogById);
router.patch("/:id", BlogController.updateBlog);

export const blogRoutes = router;
