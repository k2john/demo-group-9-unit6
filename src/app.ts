import express from "express";
import cors from "cors";
import path from "path";
import userRoutes from "./routes/user.routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(process.cwd(), "frontend")));

app.use("/api", userRoutes);

export default app;
