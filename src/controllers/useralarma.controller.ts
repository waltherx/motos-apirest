import { NextFunction, Request, Response, Router } from 'express';
import { getAllUserAlarmas, createUserAlarma, updateUserAlarma, deleteUserAlarma, getUserAlarma } from '../services/useralarma.service';
import httpStatus from 'http-status';
import { auth } from '../middlewares/auth.middleware';
import { isIdValid } from '../utils/validator.utils';
import { UserAlarmaCreateInput } from '../models/useralarma.model';
import { check } from 'express-validator';

const router = Router();

router.get('/useralarma', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const useralarmas = await getAllUserAlarmas();
        res.status(httpStatus.OK).json(useralarmas);
    } catch (error) {
        console.error(error);
        next(error);
        res.status(500).json({ message: "Error fetching data UserAlarma" });
    }
});

router.get('/useralarma/:id',
    auth,
    check("id", "id no puede ser vacio o nula").isUUID(),
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id: string = req.params.id as string;
            const useralarma = await getUserAlarma(id);
            if (useralarma)
                res.status(httpStatus.OK).json(useralarma);
            else
                res.status(httpStatus.NOT_FOUND).json({ message: "UserAlarma no encontrado." });
        } catch (error) {
            console.error(error.message);
            next(error);
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error UserAlarma" })
        }
    });


router.post('/useralarma', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const client = req.body as UserAlarmaCreateInput;
        const newUserAlarma = await createUserAlarma(client);
        res.status(httpStatus.CREATED).json(newUserAlarma);
    } catch (error) {
        console.error(error.message);
        next(error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error create UserAlarma" })
    }
});

router.put('/useralarma/:id', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id: string = req.params.id as string;
        if (!isIdValid(id)) return res.sendStatus(httpStatus.BAD_REQUEST);

        const client = req.body as UserAlarmaCreateInput;
        await updateUserAlarma(id, client);
        res.status(httpStatus.OK).json({ "message": "UserAlarma actualizado.." });
    } catch (error) {
        console.error(error.message);
        next(error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error update UserAlarma" })
    }
});

router.delete('/useralarma/:id', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id: string = req.params.id as string;
        if (!isIdValid(id)) return res.sendStatus(httpStatus.BAD_REQUEST);
        await deleteUserAlarma(id);
        res.status(httpStatus.OK).json({ "message": "UserAlarma eliminado.." });
    } catch (error) {
        console.error(error.message);
        next(error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error delete UserAlarma" })
    }
});

export default router;