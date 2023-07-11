import { NextFunction, Request, Response, Router } from 'express';
import { getAllUsers, createUser, updateUser, deleteUser, getUser } from '../services/userService';
import httpStatus from 'http-status';
import { isIdValid } from '../utils/validator';
import { UserCreateInput } from '../models/userModel';

const router = Router();

router.get('/user', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await getAllUsers();
        res.status(httpStatus.OK).json(users);
    } catch (error) {
        console.error(error);
        next(error);
        res.status(500).json({ message: "Error fetching data User" });
    }
});

router.get('/user/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id: number = parseInt(req.params.id);
        const user = await getUser(id);
        res.status(httpStatus.OK).json(user);
    } catch (error) {
        console.error(error.message);
        next(error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error User" })
    }
});


router.post('/user', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const client = req.body as UserCreateInput;
        const newUser = await createUser(client);
        res.status(httpStatus.CREATED).json(newUser);
    } catch (error) {
        console.error(error.message);
        next(error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error create User" })
    }
});

router.put('/user/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = parseInt(req.params.id);
        if (!isIdValid(id)) return res.sendStatus(httpStatus.BAD_REQUEST);

        const client = req.body as UserCreateInput;
        await updateUser(id, client);
        res.status(httpStatus.OK).json({ "message": "User actualizado.." });
    } catch (error) {
        console.error(error.message);
        next(error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error update User" })
    }
});

router.delete('/user/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = parseInt(req.params.id);
        if (!isIdValid(id)) return res.sendStatus(httpStatus.BAD_REQUEST);
        await deleteUser(id);
        res.status(httpStatus.OK).json({ "message": "User eliminado.." });
    } catch (error) {
        console.error(error.message);
        next(error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error delete User" })
    }
});

export default router;