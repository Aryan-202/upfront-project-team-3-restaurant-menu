import { Router } from "express";
import { getMenu } from "../controllers/menu.controller";

const router: Router = Router();

router.get("/", getMenu);

export default router;