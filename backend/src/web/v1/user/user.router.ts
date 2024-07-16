import { Router } from "express";
import { getAllUsers } from "./controller/user";

const router = Router();

router.get("/", getAllUsers);

export default router;
