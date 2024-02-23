import { NextFunction, Request, Response, Router } from 'express';
import { getAllUserPolygons, createUserPolygon, updateUserPolygon, deleteUserPolygon, getUserPolygon } from '../services/userpolygon.service';
import httpStatus from 'http-status';
import { auth } from '../middlewares/auth.middleware';
import { isIdValid } from '../utils/validator.utils';
import { UserPolygonCreateInput } from '../models/userpolygon.model';

const router = Router();

router.get('/userpolygon', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userpolygons = await getAllUserPolygons();
        res.status(httpStatus.OK).json(userpolygons);
    } catch (error) {
        console.error(error);
        next(error);
        res.status(500).json({ message: "Error fetching data UserPolygon" });
    }
});

router.get('/userpolygon/:id',
    auth,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id: string = req.params.id as string;
            const userpolygon = await getUserPolygon(id);
            if (userpolygon)
                res.status(httpStatus.OK).json(userpolygon);
            else
                res.status(httpStatus.NOT_FOUND).json({ message: "UserPolygon no encontrado." });
        } catch (error) {
            console.error(error.message);
            next(error);
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error UserPolygon" })
        }
    });


router.post('/userpolygon', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const client = req.body as UserPolygonCreateInput;
        const newUserPolygon = await createUserPolygon(client);
        if (newUserPolygon)
            return res.status(httpStatus.CREATED).json(newUserPolygon);
        else
            return res.status(httpStatus.BAD_REQUEST).json({ message: "Error create UserPolygon" })
    } catch (error) {
        console.error(error.message);
        next(error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error create UserPolygon" })
    }
});

router.put('/userpolygon/:id', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id: string = req.params.id as string;
        if (!isIdValid(id)) return res.sendStatus(httpStatus.BAD_REQUEST);

        const userpolygon = req.body as UserPolygonCreateInput;
        await updateUserPolygon(id, userpolygon);
        res.status(httpStatus.OK).json({ "message": "UserPolygon actualizado.." });
    } catch (error) {
        console.error(error.message);
        next(error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error update UserPolygon" })
    }
});

router.delete('/userpolygon/:id', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id: string = req.params.id as string;
        if (!isIdValid(id)) return res.sendStatus(httpStatus.BAD_REQUEST);
        await deleteUserPolygon(id);
        res.status(httpStatus.OK).json({ "message": "UserPolygon eliminado.." });
    } catch (error) {
        console.error(error.message);
        next(error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error delete UserPolygon" })
    }
});

export default router;