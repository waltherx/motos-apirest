import { NextFunction, Request, Response, Router } from 'express';
import { getAllMenus, createMenu, updateMenu, deleteMenu, getMenu } from '../services/menuService';
import httpStatus from 'http-status';
import { isIdValid } from '../utils/validator';
import { MenuCreateInput } from '../models/menuModel';

const router = Router();

router.get('/menu', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const menus = await getAllMenus();
        res.status(httpStatus.OK).json(menus);
    } catch (error) {
        console.error(error);
        next(error);
        res.status(500).json({ message: "Error fetching data Menu" });
    }
});

router.get('/menu/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id: number = parseInt(req.params.id);
        const menu = await getMenu(id);
        res.status(httpStatus.OK).json(menu);
    } catch (error) {
        console.error(error.message);
        next(error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error Menu" })
    }
});


router.post('/menu', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const client = req.body as MenuCreateInput;
        const newMenu = await createMenu(client);
        res.status(httpStatus.CREATED).json(newMenu);
    } catch (error) {
        console.error(error.message);
        next(error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error create Menu" })
    }
});

router.put('/menu/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = parseInt(req.params.id);
        if (!isIdValid(id)) return res.sendStatus(httpStatus.BAD_REQUEST);

        const client = req.body as MenuCreateInput;
        await updateMenu(id, client);
        res.status(httpStatus.OK).json({ "message": "Menu actualizado.." });
    } catch (error) {
        console.error(error.message);
        next(error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error update Menu" })
    }
});

router.delete('/menu/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = parseInt(req.params.id);
        if (!isIdValid(id)) return res.sendStatus(httpStatus.BAD_REQUEST);
        await deleteMenu(id);
        res.status(httpStatus.OK).json({ "message": "Menu eliminado.." });
    } catch (error) {
        console.error(error.message);
        next(error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error delete Menu" })
    }
});

export default router;