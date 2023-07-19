import { NextFunction, Request, Response, Router } from 'express';
import httpStatus from 'http-status';
import { login } from '../services/authService';
import { getErrorMessage } from '../utils/error';

const router = Router();

router.post('/login',  async (req: Request, res: Response, nx: NextFunction) => {
    try {
        const foundUser = await login(req.body);
        console.log('user ->', foundUser);
        res.status(httpStatus.OK).send(foundUser);
    } catch (error) {
        nx(error);
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(getErrorMessage(error));
    }
});

export default router;