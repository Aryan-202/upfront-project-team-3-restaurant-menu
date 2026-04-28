import type { Request, Response, NextFunction } from "express";
import { AppError } from "./error.middleware";

interface ValidationRule {
  field: string;
  type: "string" | "number" | "boolean" | "array";
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
  enum?: string[];
}

export const validateRequest = (rules: ValidationRule[]) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const errors: string[] = [];

    for (const rule of rules) {
      const value = req.body[rule.field];

      // Check required fields
      if (rule.required && (value === undefined || value === null || value === "")) {
        errors.push(`${rule.field} is required`);
        continue;
      }

      // Skip validation if field is not required and not provided
      if (!rule.required && (value === undefined || value === null)) {
        continue;
      }

      // Type validation
      switch (rule.type) {
        case "string":
          if (typeof value !== "string") {
            errors.push(`${rule.field} must be a string`);
          } else {
            if (rule.minLength && value.length < rule.minLength) {
              errors.push(`${rule.field} must be at least ${rule.minLength} characters long`);
            }
            if (rule.maxLength && value.length > rule.maxLength) {
              errors.push(`${rule.field} must be no more than ${rule.maxLength} characters long`);
            }
            if (rule.enum && !rule.enum.includes(value)) {
              errors.push(`${rule.field} must be one of: ${rule.enum.join(", ")}`);
            }
          }
          break;

        case "number":
          if (typeof value !== "number" && isNaN(Number(value))) {
            errors.push(`${rule.field} must be a number`);
          } else {
            const numValue = Number(value);
            if (rule.min !== undefined && numValue < rule.min) {
              errors.push(`${rule.field} must be at least ${rule.min}`);
            }
            if (rule.max !== undefined && numValue > rule.max) {
              errors.push(`${rule.field} must be no more than ${rule.max}`);
            }
          }
          break;

        case "boolean":
          if (typeof value !== "boolean" && value !== "true" && value !== "false") {
            errors.push(`${rule.field} must be a boolean`);
          }
          break;

        case "array":
          if (!Array.isArray(value)) {
            errors.push(`${rule.field} must be an array`);
          }
          break;
      }
    }

    if (errors.length > 0) {
      return next(new AppError(`Validation failed: ${errors.join(", ")}`, 400));
    }

    next();
  };
};

import { MenuCategory } from "../@types/models";

// Common validation rules
export const menuItemValidationRules: ValidationRule[] = [
  { field: "name", type: "string", required: true, minLength: 1, maxLength: 100 },
  { field: "description", type: "string", required: true },
  { field: "price", type: "number", required: true, min: 0 },
  { field: "category", type: "string", required: true, enum: Object.values(MenuCategory) },
  { field: "thumbnailUrl", type: "string", required: true, minLength: 1 },
  { field: "nutritionId", type: "string", required: true },
];