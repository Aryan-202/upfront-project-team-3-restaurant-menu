import { Router } from "express";
import { getFullMenu, getMenuItemForAR } from "../controllers/menu.controller";

const router: Router = Router();

router.get("/", getFullMenu);
router.get("/:id", getMenuItemForAR);

export default router;