"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user.controller");
const cache_middleware_1 = require("../middleware/cache.middleware");
const router = express_1.default.Router();
router.get("/users", cache_middleware_1.cacheMiddleware, user_controller_1.fetchUsers);
exports.default = router;
