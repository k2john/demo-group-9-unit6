import { Request, Response } from "express";
import { getUsers } from "../services/user.service";

export const fetchUsers = (req: Request, res: Response) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = 5;

    const data = getUsers(page, limit);

    res.json({
      success: true,
      page,
      data
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error"
    });
  }
};