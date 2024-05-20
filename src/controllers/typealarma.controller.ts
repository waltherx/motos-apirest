/*import { NextFunction, Request, Response, Router } from 'express';
import { getAllTypeAlarmas, createTypeAlarma, updateTypeAlarma, deleteTypeAlarma, getTypeAlarma } from '../services/typealarma.service';
import httpStatus from 'http-status';
import { auth } from '../middlewares/auth.middleware';
import { isIdValid } from '../utils/validator.utils';
import { TypeAlarmaCreateInput } from '../models/typealarma.model';

const router = Router();

router.get('/typealarma', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const typealarmas = await getAllTypeAlarmas();
        res.status(httpStatus.OK).json(typealarmas);
    } catch (error) {
        console.error(error);
        next(error);
        res.status(500).json({ message: "Error fetching data TypeAlarma" });
    }
});

router.get('/typealarma/:id',
    auth,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id: string = req.params.id as string;
            const typealarma = await getTypeAlarma(id);
            if (typealarma)
                res.status(httpStatus.OK).json(typealarma);
            else
                res.status(httpStatus.NOT_FOUND).json({ message: "TypeAlarma no encontrado." });
        } catch (error) {
            console.error(error.message);
            next(error);
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error TypeAlarma" })
        }
    });


router.post('/typealarma', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const typealarma = req.body as TypeAlarmaCreateInput;
        const newTypeAlarma = await createTypeAlarma(typealarma);
        res.status(httpStatus.CREATED).json(newTypeAlarma);
    } catch (error) {
        console.error(error.message);
        next(error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error create TypeAlarma" })
    }
});

router.put('/typealarma/:id', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id: string = req.params.id as string;
        if (!isIdValid(id)) return res.sendStatus(httpStatus.BAD_REQUEST);

        const typealarma = req.body as TypeAlarmaCreateInput;
        await updateTypeAlarma(id, typealarma);
        res.status(httpStatus.OK).json({ "message": "TypeAlarma actualizado.." });
    } catch (error) {
        console.error(error.message);
        next(error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error update TypeAlarma" })
    }
});

router.delete('/typealarma/:id', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id: string = req.params.id as string;
        if (!isIdValid(id)) return res.sendStatus(httpStatus.BAD_REQUEST);
        await deleteTypeAlarma(id);
        res.status(httpStatus.OK).json({ "message": "TypeAlarma eliminado.." });
    } catch (error) {
        console.error(error.message);
        next(error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error delete TypeAlarma" })
    }
});

export default router;*/