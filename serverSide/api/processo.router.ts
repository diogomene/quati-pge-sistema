import { Router } from "express";
import { getProcessos, getProcessoById } from "../controllers/processo.controller";

const processoRouter = Router();

processoRouter.get('/', (req, res) => {
    getProcessos(req, res);
});

processoRouter.get('/:id', (req, res) => {
    getProcessoById(req, res);
});

export default processoRouter;