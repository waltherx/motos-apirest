import { NextFunction, Request, Response, Router } from 'express';
import { getAllPolygons, createPolygon, updatePolygon, deletePolygon, getPolygon } from '../services/polygon.service';
import httpStatus from 'http-status';
import { auth } from '../middlewares/auth.middleware';
import { isIdValid } from '../utils/validator.utils';
import { PolygonCreateInput } from '../models/polygon.model';
import { check } from 'express-validator';

const router = Router();

router.get('/polygon', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const polygons = await getAllPolygons();
        res.status(httpStatus.OK).json(polygons);
    } catch (error) {
        console.error(error);
        next(error);
        res.status(500).json({ message: "Error fetching data Polygon" });
    }
});

router.get('/polygon/:id',
    auth,
    check("id", "id no puede ser vacio o nula").isUUID(),
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id: string = req.params.id as string;
            const polygon = await getPolygon(id);
            if (polygon)
                res.status(httpStatus.OK).json(polygon);
            else
                res.status(httpStatus.NOT_FOUND).json({ message: "Polygon no encontrado." });
        } catch (error) {
            console.error(error.message);
            next(error);
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error Polygon" })
        }
    });


router.post('/polygon', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const client = req.body as PolygonCreateInput;
        const newPolygon = await createPolygon(client);
        res.status(httpStatus.CREATED).json(newPolygon);
    } catch (error) {
        console.error(error.message);
        next(error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error create Polygon" })
    }
});

router.put('/polygon/:id', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id: string = req.params.id as string;
        if (!isIdValid(id)) return res.sendStatus(httpStatus.BAD_REQUEST);

        const client = req.body as PolygonCreateInput;
        await updatePolygon(id, client);
        res.status(httpStatus.OK).json({ "message": "Polygon actualizado.." });
    } catch (error) {
        console.error(error.message);
        next(error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error update Polygon" })
    }
});

router.delete('/polygon/:id', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id: string = req.params.id as string;
        if (!isIdValid(id)) return res.sendStatus(httpStatus.BAD_REQUEST);
        await deletePolygon(id);
        res.status(httpStatus.OK).json({ "message": "Polygon eliminado.." });
    } catch (error) {
        console.error(error.message);
        next(error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error delete Polygon" })
    }
});

export default router;