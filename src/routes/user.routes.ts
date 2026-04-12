import express from "express";
import { fetchUsers } from "../controllers/user.controller";
import { cacheMiddleware } from "../middleware/cache.middleware";

const router = express.Router();

router.get("/users", cacheMiddleware, fetchUsers);

export default router;