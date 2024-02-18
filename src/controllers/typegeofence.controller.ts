import { NextFunction, Request, Response, Router } from 'express';
import { getAllTypegeofences, createTypegeofence, updateTypegeofence, deleteTypegeofence, getTypegeofence } from '../services/typegeofence.service';
import httpStatus from 'http-status';
import { auth } from '../middlewares/auth.middleware';
import { isIdValid } from '../utils/validator.utils';
import { TypegeofenceCreateInput } from '../models/typegeofence.model';

const router = Router();

router.get('/typegeofence', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const typegeofences = await getAllTypegeofences();
        res.status(httpStatus.OK).json(typegeofences);
    } catch (error) {
        console.error(error);
        next(error);
        res.status(500).json({ message: "Error fetching data TypeGeofence" });
    }
});

router.get('/typegeofence/:id',
    auth,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id: string = req.params.id as string;
            const typegeofence = await getTypegeofence(id);
            if (typegeofence)
                res.status(httpStatus.OK).json(typegeofence);
            else
                res.status(httpStatus.NOT_FOUND).json({ message: "TypeGeofence no encontrado." });
        } catch (error) {
            console.error(error.message);
            next(error);
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error TypeGeofence" })
        }
    });


router.post('/typegeofence', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const typegeofence = req.body as TypegeofenceCreateInput;
        const newTypeGeofence = await createTypegeofence(typegeofence);
        res.status(httpStatus.CREATED).json(newTypeGeofence);
    } catch (error) {
        console.error(error.message);
        next(error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error create TypeGeofence" })
    }
});

router.put('/typegeofence/:id', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id: string = req.params.id as string;
        if (!isIdValid(id)) return res.sendStatus(httpStatus.BAD_REQUEST);

        const typegeofence = req.body as TypegeofenceCreateInput;
        await updateTypegeofence(id, typegeofence);
        res.status(httpStatus.OK).json({ "message": "TypeGeofence actualizado.." });
    } catch (error) {
        console.error(error.message);
        next(error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error update TypeGeofence" })
    }
});

router.delete('/typegeofence/:id', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id: string = req.params.id as string;
        if (!isIdValid(id)) return res.sendStatus(httpStatus.BAD_REQUEST);
        await deleteTypegeofence(id);
        res.status(httpStatus.OK).json({ "message": "TypeGeofence eliminado.." });
    } catch (error) {
        console.error(error.message);
        next(error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error delete TypeGeofence" })
    }
});

export default router;