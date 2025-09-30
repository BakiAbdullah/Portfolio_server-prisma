import { Request, Response } from "express";
import { UserService } from "./user.service";

const getAllUsersFromDB = async (req: Request, res: Response) => {
  try {
    const result = await UserService.getAllUsersFromDB();
    res.status(201).json({
      success: true,
      message: "User Retrieved successfully!",
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

export const UserController = {
  getAllUsersFromDB
};