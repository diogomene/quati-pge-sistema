import { Router } from "express";
import processoRouter from "./processo.router";

const router = Router();

router.use('/processo', processoRouter);

export default router;