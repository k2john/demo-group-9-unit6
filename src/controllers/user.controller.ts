import { Request, Response } from "express";
import {
  createUser,
  deleteUser,
  getUserById,
  getUsers,
  updateUser
} from "../services/user.service";
import { clearCache } from "../middleware/cache.middleware";

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

export const fetchUserById = (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    if (Number.isNaN(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid user id"
      });
    }

    const user = getUserById(id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    return res.json({
      success: true,
      data: user
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server Error"
    });
  }
};

export const addUser = (req: Request, res: Response) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({
        success: false,
        message: "name and email are required"
      });
    }

    const user = createUser(String(name), String(email));
    clearCache();

    return res.status(201).json({
      success: true,
      message: "User created",
      data: user
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server Error"
    });
  }
};

export const editUser = (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const { name, email } = req.body;

    if (Number.isNaN(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid user id"
      });
    }

    if (name === undefined && email === undefined) {
      return res.status(400).json({
        success: false,
        message: "Provide at least name or email"
      });
    }

    const updatedUser = updateUser(
      id,
      name !== undefined ? String(name) : undefined,
      email !== undefined ? String(email) : undefined
    );

    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    clearCache();

    return res.json({
      success: true,
      message: "User updated",
      data: updatedUser
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server Error"
    });
  }
};

export const removeUser = (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    if (Number.isNaN(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid user id"
      });
    }

    const deletedUser = deleteUser(id);

    if (!deletedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    clearCache();

    return res.json({
      success: true,
      message: "User deleted",
      data: deletedUser
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server Error"
    });
  }
};
