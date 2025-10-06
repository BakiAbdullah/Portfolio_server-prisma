import { Request, Response } from "express";
import { ProjectServices } from "./projects.service";

const createProject = async (req: Request, res: Response) => {
  try {
    const result = await ProjectServices.createProject(req.body);
    res.status(201).json({
      success: true,
      message: "Project created successfully!",
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

const getAllProjectsFromDB = async (req: Request, res: Response) => {
  try {
    const result = await ProjectServices.getAllProjectsFromDB();
    res.status(201).json({
      success: true,
      message: "Projects Retrieved successfully!",
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

const getSingleProjectById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const result = await ProjectServices.getSingleProjectById(id);
    res.status(201).json({
      success: true,
      message: "Project Retrieved successfully!",
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



export const ProjectController = {
  createProject,
  getAllProjectsFromDB,
  getSingleProjectById,
};