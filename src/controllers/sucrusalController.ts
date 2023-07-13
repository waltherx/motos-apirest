import { NextFunction, Request, Response, Router } from 'express';
import { getAllSucrusals, createSucrusal, updateSucrusal, deleteSucrusal, getSucrusal } from '../services/sucrusalService';
import httpStatus from 'http-status';
import { isIdValid } from '../utils/validator';
import { SucrusalCreateInput } from '../models/sucrusalModel';

const router = Router();

router.get('/sucrusal', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const sucrusals = await getAllSucrusals();
        res.status(httpStatus.OK).json(sucrusals);
    } catch (error) {
        console.error(error);
        next(error);
        res.status(500).json({ message: "Error fetching data Sucrusal" });
    }
});

router.get('/sucrusal/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id: number = parseInt(req.params.id);
        const sucrusal = await getSucrusal(id);
        res.status(httpStatus.OK).json(sucrusal);
    } catch (error) {
        console.error(error.message);
        next(error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error Sucrusal" })
    }
});


router.post('/sucrusal', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const client = req.body as SucrusalCreateInput;
        const newSucrusal = await createSucrusal(client);
        res.status(httpStatus.CREATED).json(newSucrusal);
    } catch (error) {
        console.error(error.message);
        next(error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error create Sucrusal" })
    }
});

router.put('/sucrusal/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = parseInt(req.params.id);
        if (!isIdValid(id)) return res.sendStatus(httpStatus.BAD_REQUEST);

        const client = req.body as SucrusalCreateInput;
        await updateSucrusal(id, client);
        res.status(httpStatus.OK).json({ "message": "Sucrusal actualizado.." });
    } catch (error) {
        console.error(error.message);
        next(error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error update Sucrusal" })
    }
});

router.delete('/sucrusal/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = parseInt(req.params.id);
        if (!isIdValid(id)) return res.sendStatus(httpStatus.BAD_REQUEST);
        await deleteSucrusal(id);
        res.status(httpStatus.OK).json({ "message": "Sucrusal eliminado.." });
    } catch (error) {
        console.error(error.message);
        next(error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error delete Sucrusal" })
    }
});

export default router;