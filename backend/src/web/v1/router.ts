import { Router } from "express";
import UserRouter from "./user/user.router";
import registerRouter from "./routes/register";
import authRouter from "./routes/auth";
import refreshRouter from "./routes/refresh";

const router = Router();

router.use("/user", UserRouter);

// Auth Server
router.use('/register', registerRouter);
router.use('/auth', authRouter);
router.use('/refresh', refreshRouter)

export default router;
