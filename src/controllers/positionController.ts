import { NextFunction, Request, Response, Router } from 'express';
import { getAllPositions, createPosition, updatePosition, deletePosition, getPositionMoto } from '../services/positionService';
import httpStatus from 'http-status';
import { isIdValid } from '../utils/validator';
import { PositionCreateInput } from '../models/positionModel';

const router = Router();

router.get('/position', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const positions = await getAllPositions();
        res.status(httpStatus.OK).json(positions);
    } catch (error) {
        console.error(error);
        next(error);
        res.status(500).json({ message: "Error fetching data Position" });
    }
});

router.get('/position/moto/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id: number = parseInt(req.params.id);
        const positions = await getPositionMoto(id);
        res.status(httpStatus.OK).json(positions);
    } catch (error) {
        console.error(error.message);
        next(error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error Position" })
    }
});


router.post('/position', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const client = req.body as PositionCreateInput;
        const newPosition = await createPosition(client);
        res.status(httpStatus.CREATED).json(newPosition);
    } catch (error) {
        console.error(error.message);
        next(error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error create Position" })
    }
});

router.put('/position/:id', async (req: Request, res: Response, next: NextFunction) => {
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

router.delete('/position/:id', async (req: Request, res: Response, next: NextFunction) => {
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