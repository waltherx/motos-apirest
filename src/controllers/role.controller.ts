import { NextFunction, Request, Response, Router } from 'express';
import { getAllRoles, createRole, updateRole, deleteRole, getRole } from '../services/role.service';
import httpStatus from 'http-status';
import { auth } from '../middlewares/auth.middleware';
import { isIdValid } from '../utils/validator.utils';
import { RoleCreateInput } from '../models/role.model';

const router = Router();

router.get('/role', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const roles = await getAllRoles();
        res.status(httpStatus.OK).json(roles);
    } catch (error) {
        console.error(error);
        next(error);
        res.status(500).json({ message: "Error fetching data Role" });
    }
});

router.get('/role/:id',
    auth,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id: string = req.params.id as string;
            const role = await getRole(id);
            if (role)
                res.status(httpStatus.OK).json(role);
            else
                res.status(httpStatus.NOT_FOUND).json({ message: "Role no encontrado." });
        } catch (error) {
            console.error(error.message);
            next(error);
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error Role" })
        }
    });


router.post('/role', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const role = req.body as RoleCreateInput;
        const newRole = await createRole(role);
        res.status(httpStatus.CREATED).json(newRole);
    } catch (error) {
        console.error(error.message);
        next(error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error create Role" })
    }
});

router.put('/role/:id', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id: string = req.params.id as string;
        if (!isIdValid(id)) return res.sendStatus(httpStatus.BAD_REQUEST);

        const role = req.body as RoleCreateInput;
        await updateRole(id, role);
        res.status(httpStatus.OK).json({ "message": "Role actualizado.." });
    } catch (error) {
        console.error(error.message);
        next(error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error update Role" })
    }
});

router.delete('/role/:id', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id: string = req.params.id as string;
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