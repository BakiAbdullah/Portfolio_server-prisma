import express from "express";
import { UserController } from "./user.controller";

const router = express.Router();

router.get("/", UserController.getAllUsersFromDB);
router.delete("/:id", UserController.deleteUserFromDB);

export const userRoutes = router;
