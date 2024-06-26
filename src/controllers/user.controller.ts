import { NextFunction, Request, Response, Router } from 'express';
import { getAllUsers, createUser, updateUser, deleteUser, getUser } from '../services/user.service';
import { auth } from '../middlewares/auth.middleware';
import httpStatus from 'http-status';
import { isIdValid } from '../utils/validator.utils';
import { UserCreateInput } from '../entities/user.model';

const router = Router();

router.get('/user', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await getAllUsers();
        res.status(httpStatus.OK).json(users);
    } catch (error) {
        console.error(error);
        next(error);
        res.status(500).json({ message: "Error fetching data User" });
    }
});

router.get('/user/:id', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id: string = req.params.id as string;
        const user = await getUser(id);
        res.status(httpStatus.OK).json(user);
    } catch (error) {
        console.error(error.message);
        next(error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error User" })
    }
});


router.post('/user', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = req.body as UserCreateInput;
        console.log(user);
        const newUser = await createUser(user);
        res.status(httpStatus.CREATED).json(newUser);
    } catch (error) {
        console.error(error.message);
        next(error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error create User" })
    }
});

router.put('/user/:id', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id: string = req.params.id as string;
        if (!isIdValid(id)) res.sendStatus(httpStatus.BAD_REQUEST);
        const user = req.body as UserCreateInput;
        await updateUser(id, user);
        res.status(httpStatus.OK).json({ "message": "User actualizado.." });
    } catch (error) {
        console.error(error.message);
        next(error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error update User" })
    }
});

router.delete('/user/:id', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id: string = req.params.id as string;
        if (!isIdValid(id)) res.sendStatus(httpStatus.BAD_REQUEST);
        await deleteUser(id);
        res.status(httpStatus.OK).json({ "message": "User eliminado.." });
    } catch (error) {
        console.error(error.message);
        next(error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error delete User" })
    }
});

export default router;