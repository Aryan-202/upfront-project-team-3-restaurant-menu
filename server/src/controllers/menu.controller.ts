import type { Request, Response } from "express";
import { MenuItem } from "../models/menu.model";

export const getMenu = async (req: Request, res: Response) => {
  const items = await MenuItem.find();
  res.json(items);
};