import { NextFunction, Request, Response, Router } from 'express';
import httpStatus from 'http-status';
import { validateData } from '../middlewares/validate.middleware';
import { refreshSchema, userLoginSchema, userSchema } from '../schemas/user.schema';
import { changePassword, login, refresh, signup } from '../services/auth.service';
import { getErrorMessage } from '../utils/error.utils';

const router = Router();

router.post('/login', validateData(userLoginSchema), async (req: Request, res: Response, nx: NextFunction) => {
    try {
        const foundUser = await login(req.body);
        if (foundUser) res.status(httpStatus.OK).send(foundUser);
        else res.status(httpStatus.OK).send({ "error": "no se encontro" });
    } catch (error) {
        nx(error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ "error": getErrorMessage(error) });
    }
});

router.post('/refresh', validateData(refreshSchema), async (req: Request, res: Response, nx: NextFunction) => {
    try {
        const ttoken = req.body.token;
        await refresh(ttoken)
            .then((newJwt) => {
                console.log(newJwt);
                res.status(httpStatus.OK).send(newJwt)
            })
            .catch((err => res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ "error": getErrorMessage(err) })));
    } catch (error) {
        nx(error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ "error": getErrorMessage(error) });
    }
});

router.post('/signup', validateData(userSchema), async (req: Request, res: Response, nx: NextFunction) => {
    try {
        const foundUser = await signup(req.body);
        res.status(httpStatus.CREATED).send(foundUser);
    } catch (error) {
        nx(error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ "error": getErrorMessage(error) });
    }
});

router.post('/changepassword', async (req: Request, res: Response, nx: NextFunction) => {
    try {
        const foundUser = await changePassword(req.body);
        res.status(httpStatus.CREATED).send(foundUser);
    } catch (error) {
        nx(error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ "error": getErrorMessage(error) });
    }
});

export default router; 