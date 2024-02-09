import { NextFunction, Request, Response, Router } from 'express';
import { getAllLocations, createLocation, updateLocation, deleteLocation, getLocation } from '../services/location.service';
import httpStatus from 'http-status';
import { auth } from '../middlewares/auth.middleware';
import { isIdValid } from '../utils/validator.utils';
import { LocationCreateInput } from '../models/location.model';
import { check } from 'express-validator';

const router = Router();

router.get('/location', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const locations = await getAllLocations();
        res.status(httpStatus.OK).json(locations);
    } catch (error) {
        console.error(error);
        next(error);
        res.status(500).json({ message: "Error fetching data Location" });
    }
});

router.get('/location/:id',
    auth,
    check("id", "id no puede ser vacio o nula").isUUID(),
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id: string = req.params.id as string;
            const location = await getLocation(id);
            if (location)
                res.status(httpStatus.OK).json(location);
            else
                res.status(httpStatus.NOT_FOUND).json({ message: "Location no encontrado." });
        } catch (error) {
            console.error(error.message);
            next(error);
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error Location" })
        }
    });


router.post('/location', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const location = req.body as LocationCreateInput;
        const newLocation = await createLocation(location);
        res.status(httpStatus.CREATED).json(newLocation);
    } catch (error) {
        console.error(error.message);
        next(error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error create Location" })
    }
});

router.put('/location/:id', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id: string = req.params.id as string;
        if (!isIdValid(id)) return res.sendStatus(httpStatus.BAD_REQUEST);

        const location = req.body as LocationCreateInput;
        await updateLocation(id, location);
        res.status(httpStatus.OK).json({ "message": "Location actualizado.." });
    } catch (error) {
        console.error(error.message);
        next(error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error update Location" })
    }
});

router.delete('/location/:id', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id: string = req.params.id as string;
        if (!isIdValid(id)) return res.sendStatus(httpStatus.BAD_REQUEST);
        await deleteLocation(id);
        res.status(httpStatus.OK).json({ "message": "Location eliminado.." });
    } catch (error) {
        console.error(error.message);
        next(error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error delete Location" })
    }
});

export default router;