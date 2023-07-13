import { NextFunction, Request, Response, Router } from 'express';
import httpStatus from 'http-status';
import { getAllUserOnSucrusals, getUserOnSucrusal, createUserOnSucrusal } from '../services/UserSucrusalService';
import { isIdValid } from '../utils/validator';
import { UserOnSucrusalCreateInput } from '../models/userSucrusalModel';

const router = Router();


router.get('/usersucrusal', async (_req: Request, res: Response, next: NextFunction) => {
    try {
        const usersucrusals = await getAllUserOnSucrusals();
        res.statusCode = httpStatus.OK;
        res.json(usersucrusals);
    } catch (error) {
        console.error(error.message);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error serOnSucrusals" })
    }
});

router.get('/usersucrusal/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id: number = parseInt(req.params.id);
        const usersucrusal = await getUserOnSucrusal(id);
        res.statusCode = httpStatus.OK;
        res.json(usersucrusal);
    } catch (error) {
        console.error(error.message);
        next(error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error serOnSucrusal" })
    }
});


router.post('/usersucrusal', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const usersucrusal = req.body as UserOnSucrusalCreateInput;
        const newserOnSucrusal = await createUserOnSucrusal(usersucrusal);
        res.status(httpStatus.CREATED).json(newserOnSucrusal);
    } catch (error) {
        console.error(error.message);
        next(error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error create serOnSucrusal" })
    }
});

export default router;