import express from "express";
import { ProjectController } from "./projects.controller";

const router = express.Router();

router.post("/", ProjectController.createProject);
router.get("/", ProjectController.getAllProjectsFromDB);
router.get("/:id", ProjectController.getSingleProjectById);

export const projectRoutes = router;
