import { Request, Response } from "express";
import { AuthServices } from "./auth.service";

const loginWithCredentials = async (req: Request, res: Response) => {
  try {
    const result = await AuthServices.loginWithCredentials(req.body);
    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      data: result,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: (error as Error).message,
    });
  }
}

export const AuthController = {
  loginWithCredentials
}