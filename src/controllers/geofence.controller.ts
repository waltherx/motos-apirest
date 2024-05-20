import { NextFunction, Request, Response, Router } from 'express';
import { getAllGeofences, createGeofence, updateGeofence, deleteGeofence, getGeofence } from '../services/geofence.service';
import httpStatus from 'http-status';
import { auth } from '../middlewares/auth.middleware';
import { isIdValid } from '../utils/validator.utils';
import { GeofenceCreateInput } from '../entities/geofence.model';

const router = Router();

router.get('/geofence', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const geofences = await getAllGeofences();
        res.status(httpStatus.OK).json(geofences);
    } catch (error) {
        console.error(error);
        next(error);
        res.status(500).json({ message: "Error fetching data Geofence" });
    }
});

router.get('/geofence/:id',
    auth,

    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id: string = req.params.id as string;
            const geofence = await getGeofence(id);
            if (geofence)
                res.status(httpStatus.OK).json(geofence);
            else
                res.status(httpStatus.NOT_FOUND).json({ message: "Geofence no encontrado." });
        } catch (error) {
            console.error(error.message);
            next(error);
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error Geofence" })
        }
    });


router.post('/geofence', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const geofence = req.body as GeofenceCreateInput;
        const newGeofence = await createGeofence(geofence);
        res.status(httpStatus.CREATED).json(newGeofence);
    } catch (error) {
        console.error(error.message);
        next(error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error create Geofence" })
    }
});

router.put('/geofence/:id', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id: string = req.params.id as string;
        if (!isIdValid(id)) return res.sendStatus(httpStatus.BAD_REQUEST);

        const geofence = req.body as GeofenceCreateInput;
        await updateGeofence(id, geofence);
        res.status(httpStatus.OK).json({ "message": "Geofence actualizado.." });
    } catch (error) {
        console.error(error.message);
        next(error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error update Geofence" })
    }
});

router.delete('/geofence/:id', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id: string = req.params.id as string;
        if (!isIdValid(id)) return res.sendStatus(httpStatus.BAD_REQUEST);
        await deleteGeofence(id);
        res.status(httpStatus.OK).json({ "message": "Geofence eliminado.." });
    } catch (error) {
        console.error(error.message);
        next(error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error delete Geofence" })
    }
});

export default router;