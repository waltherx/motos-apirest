import { NextFunction, Request, Response, Router } from 'express';
import { check } from 'express-validator';
import httpStatus from 'http-status';
import { auth } from '../middlewares/authMiddleware';
import { validationInputs } from '../middlewares/validateMiddleware';
import { PositionCreate, PositionCreateInput } from '../models/positionModel';
import { getDispositivoSerial } from '../services/dispositivoService';
import { createPosition, deletePosition, getAllPositions, getPositionDispositivo, getPositionLast, getPositionLimit, updatePosition } from '../services/positionService';
import { isIdValid } from '../utils/validator';

const router = Router();

router.get('/position', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const positions = await getAllPositions();
        res.status(httpStatus.OK).json(positions);
    } catch (error) {
        console.error(error);
        next(error);
        res.status(500).json({ message: "Error fetching data Position" });
    }
});

router.get('/position/moto/:id', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id: number = parseInt(req.params.id);
        const positions = await getPositionDispositivo(id);
        res.status(httpStatus.OK).json(positions);
    } catch (error) {
        console.error(error.message);
        next(error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error Position" })
    }
});

router.get('/position/last/:id',
    auth,
    check("id", "Ingresa un ID valido").isNumeric().notEmpty().isLength({ min: 1 }),
    validationInputs,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id: number = parseInt(req.params.id);
            const position = await getPositionLast(id);
            console.log(position);
            res.status(httpStatus.OK).json(position);
        } catch (error) {
            console.error(error.message);
            next(error);
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error Position" })
        }
    });

router.get('/position/:id/limit/:limit',
    auth,
    check("id", "Ingresa un ID valido").isNumeric().notEmpty().isLength({ min: 1 }),
    check("limit", "Ingresa un Limite valido").isNumeric().notEmpty().isLength({ min: 1 }),
    validationInputs,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id: number = parseInt(req.params.id);
            const limit: number = parseInt(req.params.limit);
            const position = await getPositionLimit(id, limit);
            res.status(httpStatus.OK).json(position);
        } catch (error) {
            console.error(error.message);
            next(error);
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error Position" })
        }
    });


router.post('/position', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const position = req.body as PositionCreate;
        const dispositivo = await getDispositivoSerial(position.dispositivo_id.toString());
        position.dispositivo_id = dispositivo.id;
        const newPosition = await createPosition(position);
        res.status(httpStatus.CREATED).json(newPosition);
    } catch (error) {
        console.error(error.message);
        next(error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error create Position" })
    }
});

router.put('/position/:id', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = parseInt(req.params.id);
        if (!isIdValid(id)) return res.sendStatus(httpStatus.BAD_REQUEST);

        const client = req.body as PositionCreateInput;
        await updatePosition(id, client);
        res.status(httpStatus.OK).json({ "message": "Position actualizado.." });
    } catch (error) {
        console.error(error.message);
        next(error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error update Position" })
    }
});

router.delete('/position/:id', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = parseInt(req.params.id);
        if (!isIdValid(id)) return res.sendStatus(httpStatus.BAD_REQUEST);
        await deletePosition(id);
        res.status(httpStatus.OK).json({ "message": "Position eliminado.." });
    } catch (error) {
        console.error(error.message);
        next(error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error delete Position" })
    }
});

export default router;