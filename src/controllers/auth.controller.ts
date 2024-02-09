import { NextFunction, Request, Response, Router } from 'express';
import httpStatus from 'http-status';
import { changePassword, login, signup } from '../services/auth.service';
import { getErrorMessage } from '../utils/error.utils';
import userLoginSchema from '../schemas/user.schema';
import { validateSchema } from '../middlewares/schema.middleware';

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