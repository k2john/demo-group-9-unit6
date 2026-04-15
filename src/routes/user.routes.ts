import express from "express";
import {
  addUser,
  editUser,
  fetchUserById,
  fetchUsers,
  removeUser
} from "../controllers/user.controller";
import { cacheMiddleware } from "../middleware/cache.middleware";

const router = express.Router();

router.get("/users", cacheMiddleware, fetchUsers);
router.get("/users/:id", cacheMiddleware, fetchUserById);
router.post("/users", addUser);
router.put("/users/:id", editUser);
router.delete("/users/:id", removeUser);

export default router;
