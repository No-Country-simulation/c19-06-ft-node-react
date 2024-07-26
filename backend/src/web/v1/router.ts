import { Router } from "express";
import UserRouter from "./user/user.router";
import registerRouter from "./routes/register";
import authRouter from "./routes/auth";
import refreshRouter from "./routes/refresh";
import classRouter from "./routes/resources/classRouter";
import reservationRouter from "./routes/resources/reservationRouter";

const router = Router();

router.use("/user", UserRouter);

// Auth Server
router.use('/register', registerRouter);
router.use('/auth', authRouter);
router.use('/refresh', refreshRouter)

// Resource Server
router.use('/classes', classRouter);
router.use('/reservations', reservationRouter);


export default router;
