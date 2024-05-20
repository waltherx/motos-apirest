import { NextFunction, Request, Response, Router } from 'express';
import httpStatus from 'http-status';
import { auth } from '../middlewares/auth.middleware';

import { MotoCreateInput } from '../entities/moto.model';
import { createMoto, deleteMoto, getAllMotos, getAllPlacas, getMoto, searchMotos, searchMotosByPlaca, searchMotosPlacas, updateMoto } from '../services/moto.service';
import { isIdValid } from '../utils/validator.utils';

const router = Router();

router.get('/moto', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const motos = await getAllMotos();
        res.status(httpStatus.OK).json(motos);
    } catch (error) {
        console.error(error);
        next(error);
        res.status(500).json({ message: "Error fetching data Moto" });
    }
});

router.get('/moto/placas', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const motos = await getAllPlacas();
        res.status(httpStatus.OK).json(motos);
    } catch (error) {
        console.error(error);
        next(error);
        res.status(500).json({ message: "Error fetching data Moto" });
    }
});

router.get('/moto/placa/:placa',
    auth
    , async (req: Request, res: Response, next: NextFunction) => {
        try {
            const placa: string = req.params.placa;
            const moto = await searchMotosByPlaca(placa);
            res.status(httpStatus.OK).json(moto);
        } catch (error) {
            console.error(error.message);
            next(error);
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error Moto" })
        }
    });

router.get('/moto/auto/:placa',
    auth,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const placa: string = req.params.placa;
            const moto = await searchMotosPlacas(placa);
            res.status(httpStatus.OK).json(moto);
        } catch (error) {
            console.error(error.message);
            next(error);
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error Moto" })
        }
    });

router.get('/moto/search/:placa', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const placa: string = req.params.placa;
        const moto = await searchMotos(placa);
        res.status(httpStatus.OK).json(moto);
    } catch (error) {
        console.error(error.message);
        next(error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error Moto" })
    }
});

router.get('/moto/:id',
    auth,

    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id: string = req.params.id as string;
            const moto = await getMoto(id);
            res.status(httpStatus.OK).json(moto);
        } catch (error) {
            console.error(error.message);
            next(error);
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error Moto" })
        }
    });


router.post('/moto', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const client = req.body as MotoCreateInput;
        const newMoto = await createMoto(client);
        res.status(httpStatus.CREATED).json(newMoto);
    } catch (error) {
        console.error(error.message);
        next(error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error create Moto" })
    }
});

router.put('/moto/:id', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id: string = req.params.id as string;
        if (!isIdValid(id)) return res.sendStatus(httpStatus.BAD_REQUEST);

        const client = req.body as MotoCreateInput;
        await updateMoto(id, client);
        res.status(httpStatus.OK).json({ "message": "Moto actualizado.." });
    } catch (error) {
        console.error(error.message);
        next(error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error update Moto" })
    }
});

router.delete('/moto/:id', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id: string = req.params.id as string;
        if (!isIdValid(id)) return res.sendStatus(httpStatus.BAD_REQUEST);
        await deleteMoto(id);
        res.status(httpStatus.OK).json({ "message": "Moto eliminado.." });
    } catch (error) {
        console.error(error.message);
        next(error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error delete Moto" })
    }
});

export default router;