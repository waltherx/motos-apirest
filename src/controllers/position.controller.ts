import { NextFunction, Request, Response, Router } from 'express';
import httpStatus from 'http-status';
import { auth } from '../middlewares/auth.middleware';
import { validateData } from '../middlewares/validate.middleware'
import { PositionCreate, PositionCreateInput, PositionSearchDate } from '../entities/position.model';
import { positionSearhDateSchema } from '../schemas/position.schema';
import { getDispositivoSerial } from '../services/dispositivo.service';
import { getMoto } from '../services/moto.service';
import { getMotoDispoById } from '../services/motodispo.service';
import { createPosition, deletePosition, getAlarmasByPosition, getPositionDayBegin, getPositionDayEnd, getPositionDispositivo, getPositionLast, getPositionLimit, updatePosition } from '../services/position.service';
import { radioAllow } from '../utils/distance.utils';
import { isIdValid } from '../utils/validator.utils';

const router = Router();

router.get('/position/moto/:id', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id: number = parseInt(req.params.id);
        const positions = await getPositionDispositivo(id);
        res.status(httpStatus.OK).json(positions);
    } catch (error) {
        next(error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error Position" })
    }
});

router.get('/position/last/:id',
    auth,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id: number = parseInt(req.params.id);
            const position = await getPositionLast(id);
            res.status(httpStatus.OK).json(position);
        } catch (error) {
            next(error);
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error Position" })
        }
    });

router.get('/position/last/2/:id',
    auth,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id: number = parseInt(req.params.id);
            const position = await getPositionLast(id);
            const motodispo = await getMotoDispoById(id);
            const moto = await getMoto(motodispo.moto_id);
            res.status(httpStatus.OK).json({ "position": position, "moto": moto });
        } catch (error) {
            next(error);
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error Position" })
        }
    });

router.get('/position/:id/limit/:limit',
    auth,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id: number = parseInt(req.params.id);
            const limit: number = parseInt(req.params.limit);
            const position = await getPositionLimit(id, limit);
            res.status(httpStatus.OK).json(position);
        } catch (error) {
            next(error);
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error Position" })
        }
    });

router.get('/position/day/begin',
    auth,
    validateData(positionSearhDateSchema),
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const data = req.body as PositionSearchDate;

            const positions = await getPositionDayBegin(data.id, data.fecha, data?.limit)
            return res.status(httpStatus.OK).json(positions);
        } catch (error) {
            next(error);
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error Position" })
        }
    });


router.get('/position/alarma/:id',
    //validateSchema(positionSearhDateSchema),
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id: number = parseInt(req.params.id);
            const alarmas = await getAlarmasByPosition(id);
            return res.status(httpStatus.OK).json(alarmas);
        } catch (error) {
            next(error);
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error Position" })
        }
    });

router.get('/position/day/end',
    auth,
    validateData(positionSearhDateSchema),
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const data = req.body as PositionSearchDate;
            const positions = await getPositionDayEnd(data.id, data.fecha, data?.limit)
            return res.status(httpStatus.OK).json(positions);
        } catch (error) {
            next(error);
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error Position" })
        }
    });

router.post('/position', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const position = req.body as PositionCreate;
        const allow = radioAllow(Number(position.latitude), Number(position.longitude));
        if (allow) {
            const dispositivo = await getDispositivoSerial(position.dispositivo_id.toString());
            position.dispositivo_id = dispositivo.id;
            const newPosition = await createPosition(position);
            res.status(httpStatus.CREATED).json(newPosition);
        } else {
            res.status(httpStatus.BAD_REQUEST).json({ message: "Error Position no valida" });
        }
    } catch (error) {
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
        next(error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error delete Position" })
    }
});

export default router;