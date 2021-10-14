import { Router } from "express";

import UserController from "./Modules/Users/UserController";

const router = Router();

router.get("/users", UserController.index);

export default router;
