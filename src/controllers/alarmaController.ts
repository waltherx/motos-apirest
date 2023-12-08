import { NextFunction, Request, Response, Router } from "express";
import httpStatus from "http-status";
import { auth } from "../middlewares/authMiddleware";
import { AlarmaCreateInput } from "../models/alarmaModel";
import { createAlarma, deleteAlarma, getAlarma, getAllAlarmas, updateAlarma } from "../services/alarmaService";

const router = Router();

router.get(
    "/alarmas",
    auth,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const alarmas = await getAllAlarmas();
            res.statusCode = httpStatus.OK;
            res.json(alarmas);
        } catch (error) {
            console.error(error.message);
            res
                .status(httpStatus.INTERNAL_SERVER_ERROR)
                .json({ message: "Error Alarmas" });
        }
    }
);

router.get(
    "/alarma/:id",
    auth,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id: string = req.params.id;
            const alarma = await getAlarma(id);
            res.statusCode = httpStatus.OK;
            res.json(alarma);
        } catch (error) {
            console.error(error.message);
            next(error);
            res
                .status(httpStatus.INTERNAL_SERVER_ERROR)
                .json({ message: "Error Alarma" });
        }
    }
);

router.post(
    "/alarma",
    auth,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const alarma = req.body as AlarmaCreateInput;
            const newAlarma = await createAlarma(alarma);
            res.status(httpStatus.CREATED).json(newAlarma);
        } catch (error) {
            console.error(error.message);
            next(error);
            res
                .status(httpStatus.INTERNAL_SERVER_ERROR)
                .json({ message: "Error create Alarma" });
        }
    }
);

router.put(
    "/alarma/:id",
    auth,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = req.params.id;
            if (!id) return res.sendStatus(httpStatus.BAD_REQUEST);
            const alarma = req.body as AlarmaCreateInput;
            await updateAlarma(id, alarma);
            res.status(httpStatus.OK).json({ message: "Alarma actualizado.." });
        } catch (error) {
            console.error(error.message);
            next(error);
            res
                .status(httpStatus.INTERNAL_SERVER_ERROR)
                .json({ message: "Error update Alarma" });
        }
    }
);

router.delete(
    "/alarma/:id",
    auth,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = req.params.id;
            if (!id) return res.sendStatus(httpStatus.BAD_REQUEST);
            await deleteAlarma(id);
            res.status(httpStatus.OK).json({ message: "Alarma eliminado.." });
        } catch (error) {
            console.error(error.message);
            next(error);
            res
                .status(httpStatus.INTERNAL_SERVER_ERROR)
                .json({ message: "Error delete Alarma" });
        }
    }
);

export default router;
