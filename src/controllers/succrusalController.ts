import { NextFunction, Request, Response, Router } from "express";
import httpStatus from "http-status";
import { auth } from "../middlewares/authMiddleware";
import { getAllSucrusals, getSucrusal } from "../services/sucrusalService";

const router = Router();

router.get(
    "/sucrusals",
    auth,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const sucrusals = await getAllSucrusals();
            res.statusCode = httpStatus.OK;
            res.json(sucrusals);
        } catch (error) {
            console.error(error.message);
            res
                .status(httpStatus.INTERNAL_SERVER_ERROR)
                .json({ message: "Error Sucrusals" });
        }
    }
);

router.get(
    "/sucrusal/:id",
    auth,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id: string = req.params.id;
            const sucrusal = await getSucrusal(id);
            res.statusCode = httpStatus.OK;
            res.json(sucrusal);
        } catch (error) {
            console.error(error.message);
            next(error);
            res
                .status(httpStatus.INTERNAL_SERVER_ERROR)
                .json({ message: "Error Sucrusal" });
        }
    }
);

export default router;