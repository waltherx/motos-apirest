import { NextFunction, Request, Response, Router } from 'express';
import httpStatus from 'http-status';
import { changePassword, login, signup } from '../services/authService';
import { getErrorMessage } from '../utils/error';
import userLoginSchema from '../schemas/userSchema';
import { validateSchema } from '../middlewares/schemaMiddleware';

const router = Router();

router.post('/login', validateSchema(userLoginSchema), async (req: Request, res: Response, nx: NextFunction) => {
    try {
        const foundUser = await login(req.body);
        res.status(httpStatus.OK).send(foundUser);
    } catch (error) {
        nx(error);
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(getErrorMessage(error));
    }
});

router.post('/signup', async (req: Request, res: Response, nx: NextFunction) => {
    try {
        const foundUser = await signup(req.body);
        res.status(httpStatus.CREATED).send(foundUser);
    } catch (error) {
        nx(error);
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(getErrorMessage(error));
    }
});

router.post('/changepassword', async (req: Request, res: Response, nx: NextFunction) => {
    try {
        const foundUser = await changePassword(req.body);
        res.status(httpStatus.CREATED).send(foundUser);
    } catch (error) {
        nx(error);
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(getErrorMessage(error));
    }
});

export default router;