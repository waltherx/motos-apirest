import { NextFunction, Request, Response, Router } from 'express';
import { getAllMoto } from '../services/motoService';

const router = Router();

router.get('/moto', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const motos = await getAllMoto();
        res.statusCode = 200;
        res.json(motos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching data Moto" })
    }
});

router.post('/moto', async (req: Request, res: Response, next: NextFunction) => {
    try {

    } catch (error) {
        console.error(error);
    }
});

export default router;