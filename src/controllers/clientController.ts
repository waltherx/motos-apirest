import { NextFunction, Request, Response, Router } from 'express';
import { getAllClients, getClient } from '../services/clientService';

const router = Router();

interface ReqParams {
    id: number;
}

router.get('/client', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const clientes = await getAllClients();
        res.statusCode = 200;
        res.json(clientes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching data Clients" })
    }
});

/*router.get('/client/:id', async (req: Request<ReqParams>, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const client = await getClient(id);
        res.statusCode = 200;
        res.json(client);
    } catch (error) {
        next(error);
        res.status(500).json({ message: "Error fetching data Client" })
    }
});*/


router.post('/client', async (req: Request, res: Response, next: NextFunction) => {
    try {

    } catch (error) {
        console.error(error);
    }
});

export default router;