import { Router } from "express";
import UserRouter from "./user/user.router";
import registerRouter from "./routes/register";
import authRouter from "./routes/auth";
import refreshRouter from "./routes/refresh";
import classRouter from "./routes/resources/classRouter";

const router = Router();

router.use("/user", UserRouter);

// Auth Server
router.use('/register', registerRouter);
router.use('/auth', authRouter);
router.use('/refresh', refreshRouter)

// Resource Server
router.use('/classes', classRouter);


export default router;
