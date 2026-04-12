const cache: Record<string, any> = {};

export const cacheMiddleware = (req: any, res: any, next: any) => {
  const key = req.originalUrl;

  if (cache[key]) {
    console.log("⚡ Cache HIT");
    return res.json(cache[key]);
  }

  const originalJson = res.json;

  res.json = (body: any) => {
    cache[key] = body;
    return originalJson.call(res, body);
  };

  next();
};