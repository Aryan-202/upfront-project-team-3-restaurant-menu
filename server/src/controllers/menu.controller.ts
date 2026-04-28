import type { Request, Response, NextFunction, RequestHandler } from "express";
import { MenuItem } from "../models/menu.model";
import { asyncHandler } from "../middleware/error.middleware";

export const getFullMenu: RequestHandler = asyncHandler(async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Fetch basic info for the main menu list
  const menu = await MenuItem.find({ isAvailable: true })
    .select('name price category thumbnailUrl')
    .lean();

  res.status(200).json({
    success: true,
    count: menu.length,
    data: menu,
  });
});

export const getMenuItemForAR: RequestHandler = asyncHandler(async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  // Populate nutrition data for AR overlays
  const menuItem = await MenuItem.findById(id)
    .populate('nutritionId')
    .lean();

  if (!menuItem) {
    res.status(404).json({ success: false, message: 'Menu item not found' });
    return;
  }

  res.status(200).json({
    success: true,
    data: menuItem,
  });
});