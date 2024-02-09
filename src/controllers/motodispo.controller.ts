import { NextFunction, Request, Response, Router } from 'express';
import { getAllMotoDispos, createMotoDispo, updateMotoDispo, deleteMotoDispo, getMotoDispo } from '../services/motodispo.service';
import httpStatus from 'http-status';
import { auth } from '../middlewares/auth.middleware';
import { isIdValid } from '../utils/validator.utils';
import { MotoDispoCreateInput } from '../models/motodispo.model';
import { check } from 'express-validator';

const router = Router();

router.get('/motodispo', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const motodispos = await getAllMotoDispos();
        res.status(httpStatus.OK).json(motodispos);
    } catch (error) {
        console.error(error);
        next(error);
        res.status(500).json({ message: "Error fetching data MotoDispo" });
    }
});

router.get('/motodispo/:id',
    auth,
    check("id", "id no puede ser vacio o nula").isUUID(),
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id: string = req.params.id as string;
            const motodispo = await getMotoDispo(id);
            if (motodispo)
                res.status(httpStatus.OK).json(motodispo);
            else
                res.status(httpStatus.NOT_FOUND).json({ message: "MotoDispo no encontrado." });
        } catch (error) {
            console.error(error.message);
            next(error);
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error MotoDispo" })
        }
    });


router.post('/motodispo', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const motodispo = req.body as MotoDispoCreateInput;
        const newMotoDispo = await createMotoDispo(motodispo);
        res.status(httpStatus.CREATED).json(newMotoDispo);
    } catch (error) {
        console.error(error.message);
        next(error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error create MotoDispo" })
    }
});

router.put('/motodispo/:id', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id: string = req.params.id as string;
        if (!isIdValid(id)) return res.sendStatus(httpStatus.BAD_REQUEST);

        const motodispo = req.body as MotoDispoCreateInput;
        await updateMotoDispo(id, motodispo);
        res.status(httpStatus.OK).json({ "message": "MotoDispo actualizado.." });
    } catch (error) {
        console.error(error.message);
        next(error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error update MotoDispo" })
    }
});

router.delete('/motodispo/:id', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id: string = req.params.id as string;
        if (!isIdValid(id)) return res.sendStatus(httpStatus.BAD_REQUEST);
        await deleteMotoDispo(id);
        res.status(httpStatus.OK).json({ "message": "MotoDispo eliminado.." });
    } catch (error) {
        console.error(error.message);
        next(error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error delete MotoDispo" })
    }
});

export default router;