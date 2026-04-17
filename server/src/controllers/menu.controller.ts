import type { Request, Response, NextFunction, RequestHandler } from "express";
import { MenuItem } from "../models/menu.model";
import { asyncHandler } from "../middleware/error.middleware";

export const getMenu: RequestHandler = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {

  const items = await MenuItem.find().populate("nutrients");

  res.status(200).json({
    success: true,
    count: items.length,
    data: items
  });
});