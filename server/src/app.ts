import express from "express";
import type { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";

import menuRoutes from "./routes/menu.routes";

dotenv.config();

const app: Express = express();

app.use(cors());
app.use(express.json());

app.use("/api/menu", menuRoutes);

app.get("/", (req, res) => {
  res.send("API is running");
});

export default app;