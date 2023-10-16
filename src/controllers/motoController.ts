import { NextFunction, Request, Response, Router } from 'express';
import { getAllMotos, createMoto, updateMoto, deleteMoto, getMoto, searchMotos, searchMotosByPlaca, searchMotosPlacas, getAllPlacas } from '../services/motoService';
import httpStatus from 'http-status';
import { isIdValid } from '../utils/validator';
import { MotoCreateInput } from '../models/motoModel';
import { check } from 'express-validator';
import { validationInputs } from '../middlewares/validateMiddleware';
import { auth } from 'middlewares/authMiddleware';

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
    auth,
    check("placa", "Ingrese una placa valida.").isAlphanumeric().notEmpty().isLength({ min: 1, max: 10 }),
    validationInputs
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
    check("placa", "placa no puede ser vacia o nula").notEmpty(),
    validationInputs,
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
    check("id", "ID moto no puede ser nulo.").isNumeric().notEmpty(),
    validationInputs,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id: number = parseInt(req.params.id);
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
        const id = parseInt(req.params.id);
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
        const id = parseInt(req.params.id);
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