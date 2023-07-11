import { NextFunction, Request, Response, Router } from 'express';
import { getAllRoles, createRole, updateRole, deleteRole, getRole } from '../services/roleService';
import httpStatus from 'http-status';
import { isIdValid } from '../utils/validator';
import { RoleCreateInput } from '../models/roleModel';

const router = Router();

router.get('/role', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const roles = await getAllRoles();
        res.status(httpStatus.OK).json(roles);
    } catch (error) {
        console.error(error);
        next(error);
        res.status(500).json({ message: "Error fetching data Role" });
    }
});

router.get('/role/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id: number = parseInt(req.params.id);
        const role = await getRole(id);
        res.status(httpStatus.OK).json(role);
    } catch (error) {
        console.error(error.message);
        next(error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error Role" })
    }
});


router.post('/role', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const client = req.body as RoleCreateInput;
        const newRole = await createRole(client);
        res.status(httpStatus.CREATED).json(newRole);
    } catch (error) {
        console.error(error.message);
        next(error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error create Role" })
    }
});

router.put('/role/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = parseInt(req.params.id);
        if (!isIdValid(id)) return res.sendStatus(httpStatus.BAD_REQUEST);

        const client = req.body as RoleCreateInput;
        await updateRole(id, client);
        res.status(httpStatus.OK).json({ "message": "Role actualizado.." });
    } catch (error) {
        console.error(error.message);
        next(error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error update Role" })
    }
});

router.delete('/role/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = parseInt(req.params.id);
        if (!isIdValid(id)) return res.sendStatus(httpStatus.BAD_REQUEST);
        await deleteRole(id);
        res.status(httpStatus.OK).json({ "message": "Role eliminado.." });
    } catch (error) {
        console.error(error.message);
        next(error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error delete Role" })
    }
});

export default router;