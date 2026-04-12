"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cacheMiddleware = void 0;
const cache = {};
const cacheMiddleware = (req, res, next) => {
    const key = req.originalUrl;
    if (cache[key]) {
        console.log("⚡ Cache Hit");
        return res.json(cache[key]);
    }
    res.sendResponse = res.json;
    res.json = (body) => {
        cache[key] = body;
        res.sendResponse(body);
    };
    next();
};
exports.cacheMiddleware = cacheMiddleware;
