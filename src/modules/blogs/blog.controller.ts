import { Request, Response } from "express";
import { BlogServices } from "./blog.service";

const createBlog = async (req: Request, res: Response) => {
  try {
    const result = await BlogServices.createBlog(req.body);
    res.status(201).json({
      success: true,
      message: "Blog created successfully!",
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
    });
  }
};

const getAllBlogsFromDB = async (req: Request, res: Response) => {
  try {
    const result = await BlogServices.getAllBlogsFromDB();
    res.status(201).json({
      success: true,
      message: "Blogs Retrieved successfully!",
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
    });
  }
};

const getSingleBlogById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const result = await BlogServices.getSingleBlogById(id);
    res.status(201).json({
      success: true,
      message: "Blog Retrieved successfully!",
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
    });
  }
};

const updateBlog = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const payload = req.body;

    const result = await BlogServices.updateBlog(id, payload);
    res.status(201).json({
      success: true,
      message: "Blog Updated successfully!",
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
    });
  }
};

const deleteBlogById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const result = await BlogServices.deleteBlogById(id);
    res.status(201).json({
      success: true,
      message: "Blog Deleted!",
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
    });
  }
};

export const BlogController = {
  createBlog,
  getAllBlogsFromDB,
  getSingleBlogById,
  updateBlog,
  deleteBlogById,
};