import type { Request, Response, NextFunction } from "express";
import { AppError } from "./error.middleware";

interface RateLimitOptions {
  windowMs: number; // Time window in milliseconds
  maxRequests: number; // Maximum requests per window
  message?: string;
  skipSuccessfulRequests?: boolean;
  skipFailedRequests?: boolean;
}

interface RequestRecord {
  count: number;
  resetTime: number;
}

const requestMap = new Map<string, RequestRecord>();

export const rateLimit = (options: RateLimitOptions) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const {
      windowMs,
      maxRequests,
      message = "Too many requests, please try again later"
    } = options;

    const key = req.ip || req.connection.remoteAddress || "unknown";
    const now = Date.now();
    const record = requestMap.get(key);

    // Clean up expired records
    if (record && now > record.resetTime) {
      requestMap.delete(key);
    }

    const currentRecord = requestMap.get(key) || {
      count: 0,
      resetTime: now + windowMs
    };

    currentRecord.count++;
    if (currentRecord.count > maxRequests) {
      return next(new AppError(message, 429));
    }

    requestMap.set(key, currentRecord);
    next();
  };
};

// Predefined rate limiters
export const strictRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  maxRequests: 100,
  message: "Too many requests from this IP, please try again after 15 minutes"
});

export const apiRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  maxRequests: 1000,
  message: "API rate limit exceeded, please try again later"
});