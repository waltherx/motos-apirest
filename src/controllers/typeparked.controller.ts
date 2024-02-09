import { NextFunction, Request, Response, Router } from 'express';
import { getAllTypeParkeds, createTypeParked, updateTypeParked, deleteTypeParked, getTypeParked } from '../services/typeparked.service';
import httpStatus from 'http-status';
import { auth } from '../middlewares/auth.middleware';
import { isIdValid } from '../utils/validator.utils';
import { TypeparkedCreateInput } from '../models/typeparked.model';
import { check } from 'express-validator';

const router = Router();

router.get('/typeparked', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const typeparkeds = await getAllTypeParkeds();
        res.status(httpStatus.OK).json(typeparkeds);
    } catch (error) {
        console.error(error);
        next(error);
        res.status(500).json({ message: "Error fetching data Typeparked" });
    }
});

router.get('/typeparked/:id',
    auth,
    check("id", "id no puede ser vacio o nula").isUUID(),
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id: string = req.params.id as string;
            const typeparked = await getTypeParked(id);
            if (typeparked)
                res.status(httpStatus.OK).json(typeparked);
            else
                res.status(httpStatus.NOT_FOUND).json({ message: "Typeparked no encontrado." });
        } catch (error) {
            console.error(error.message);
            next(error);
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error Typeparked" })
        }
    });


router.post('/typeparked', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const client = req.body as TypeparkedCreateInput;
        const newTypeparked = await createTypeParked(client);
        res.status(httpStatus.CREATED).json(newTypeparked);
    } catch (error) {
        console.error(error.message);
        next(error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error create Typeparked" })
    }
});

router.put('/typeparked/:id', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id: string = req.params.id as string;
        if (!isIdValid(id)) return res.sendStatus(httpStatus.BAD_REQUEST);

        const client = req.body as TypeparkedCreateInput;
        await updateTypeParked(id, client);
        res.status(httpStatus.OK).json({ "message": "Typeparked actualizado.." });
    } catch (error) {
        console.error(error.message);
        next(error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error update Typeparked" })
    }
});

router.delete('/typeparked/:id', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id: string = req.params.id as string;
        if (!isIdValid(id)) return res.sendStatus(httpStatus.BAD_REQUEST);
        await deleteTypeParked(id);
        res.status(httpStatus.OK).json({ "message": "Typeparked eliminado.." });
    } catch (error) {
        console.error(error.message);
        next(error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error delete Typeparked" })
    }
});

export default router;