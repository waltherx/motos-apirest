import { NextFunction, Request, Response, Router } from 'express';
import { getAllCircles, createCircle, updateCircle, deleteCircle, getCircle } from '../services/circle.service';
import httpStatus from 'http-status';
import { auth } from '../middlewares/auth.middleware';
import { isIdValid } from '../utils/validator.utils';
import { CircleCreateInput } from '../entities/circle.model';

const router = Router();

router.get('/circle', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const circles = await getAllCircles();
        res.status(httpStatus.OK).json(circles);
    } catch (error) {
        console.error(error);
        next(error);
        res.status(500).json({ message: "Error fetching data Circle" });
    }
});

router.get('/circle/:id',
    auth,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id: string = req.params.id as string;
            const circle = await getCircle(id);
            if (circle)
                res.status(httpStatus.OK).json(circle);
            else
                res.status(httpStatus.NOT_FOUND).json({ message: "Circle no encontrado." });
        } catch (error) {
            console.error(error.message);
            next(error);
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error Circle" })
        }
    });


router.post('/circle', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const circle = req.body as CircleCreateInput;
        const newCircle = await createCircle(circle);
        res.status(httpStatus.CREATED).json(newCircle);
    } catch (error) {
        console.error(error.message);
        next(error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error create Circle" })
    }
});

router.put('/circle/:id', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id: string = req.params.id as string;
        if (!isIdValid(id)) return res.sendStatus(httpStatus.BAD_REQUEST);

        const circle = req.body as CircleCreateInput;
        await updateCircle(id, circle);
        res.status(httpStatus.OK).json({ "message": "Circle actualizado.." });
    } catch (error) {
        console.error(error.message);
        next(error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error update Circle" })
    }
});

router.delete('/circle/:id', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id: string = req.params.id as string;
        if (!isIdValid(id)) return res.sendStatus(httpStatus.BAD_REQUEST);
        await deleteCircle(id);
        res.status(httpStatus.OK).json({ "message": "Circle eliminado.." });
    } catch (error) {
        console.error(error.message);
        next(error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error delete Circle" })
    }
});

export default router;