import express from "express";
import type { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";

import menuRoutes from "./routes/menu.routes";
import { requestLogger } from "./middleware/logger.middleware";
import { errorHandler, notFound } from "./middleware/error.middleware";
import { apiRateLimit } from "./middleware/rateLimit.middleware";

dotenv.config();

const app: Express = express();

// Trust proxy for rate limiting behind reverse proxies
app.set("trust proxy", 1);

// Request logging middleware
app.use(requestLogger);

// Rate limiting middleware
app.use("/api", apiRateLimit);

// CORS middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:5173",
  credentials: true
}));

// Body parsing middleware
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// Routes
app.use("/api/menu", menuRoutes);

// Health check route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "API is running",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || "development"
  });
});

// 404 handler
app.use(notFound);

// Error handling middleware (must be last)
app.use(errorHandler);

export default app;