import { NextFunction, Request, Response, Router } from 'express';
import { getAllDispositivos, createDispositivo, updateDispositivo, deleteDispositivo, getDispositivo } from '../services/dispositivoService';
import httpStatus from 'http-status';
import { isIdValid } from '../utils/validator';
import { DispositivoCreateInput } from '../models/dispositivoModels';
import { auth } from '../middlewares/authMiddleware';
import { getMotoDevice } from '../services/motoService';

const router = Router();

router.get('/dispositivo', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const dispositivos = await getAllDispositivos();
        res.status(httpStatus.OK).json(dispositivos);
    } catch (error) {
        console.error(error);
        next(error);
        res.status(500).json({ message: "Error fetching data Dispositivo" });
    }
});


router.get('/dispositivo/moto/:id', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id: number = parseInt(req.params.id);
        const dispositivo = await getMotoDevice(id);
        console.log(dispositivo);
        if(dispositivo) res.status(httpStatus.OK).json(dispositivo);
        else res.status(httpStatus.NOT_FOUND).json({});
    } catch (error) {
        console.error(error.message);
        next(error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error Dispositivo" })
    }
});

router.get('/dispositivo/:id', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id: number = parseInt(req.params.id);
        const dispositivo = await getDispositivo(id);
        res.status(httpStatus.OK).json(dispositivo);
    } catch (error) {
        console.error(error.message);
        next(error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error Dispositivo" })
    }
});

router.post('/dispositivo', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const dispositivo = req.body as DispositivoCreateInput;
        const newDispositivo = await createDispositivo(dispositivo);
        res.status(httpStatus.CREATED).json(newDispositivo);
    } catch (error) {
        console.error(error.message);
        next(error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error create Dispositivo" })
    }
});

router.put('/dispositivo/:id', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = parseInt(req.params.id);
        if (!isIdValid(id)) return res.sendStatus(httpStatus.BAD_REQUEST);

        const dispositivo = req.body as DispositivoCreateInput;
        await updateDispositivo(id, dispositivo);
        res.status(httpStatus.OK).json({ "message": "Dispositivo actualizado.." });
    } catch (error) {
        console.error(error.message);
        next(error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error update Dispositivo" })
    }
});

router.delete('/dispositivo/:id', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = parseInt(req.params.id);
        if (!isIdValid(id)) return res.sendStatus(httpStatus.BAD_REQUEST);
        await deleteDispositivo(id);
        res.status(httpStatus.OK).json({ "message": "Dispositivo eliminado.." });
    } catch (error) {
        console.error(error.message);
        next(error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error delete Dispositivo" })
    }
});

export default router;