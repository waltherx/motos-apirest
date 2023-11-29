import { NextFunction, Request, Response, Router } from "express";
import httpStatus from "http-status";
import {
  getAllClients,
  getClient,
  createClient,
  updateClient,
  deleteClient,
  getClientMotos,
} from "../services/clientService";
import { isIdValid } from "../utils/validator";
import { ClientCreateInput } from "../models/clientModel";
import { auth } from "../middlewares/authMiddleware";

const router = Router();

router.get(
  "/client",
  auth,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const clients = await getAllClients();
      res.statusCode = httpStatus.OK;
      res.json(clients);
    } catch (error) {
      console.error(error.message);
      res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: "Error Clients" });
    }
  }
);

router.get(
  "/client/:id",
  auth,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id: number = parseInt(req.params.id);
      const client = await getClient(id);
      res.statusCode = httpStatus.OK;
      res.json(client);
    } catch (error) {
      console.error(error.message);
      next(error);
      res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: "Error Client" });
    }
  }
);

router.get(
  "/client/m/:id",
  auth,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id: number = parseInt(req.params.id);
      const client = await getClientMotos(id);
      res.statusCode = httpStatus.OK;
      return res.json(client);
    } catch (error) {
      console.error(error.message);
      next(error);
      res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: "Error Client" });
    }
  }
);

router.post(
  "/client",
  auth,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const client = req.body as ClientCreateInput;
      const newClient = await createClient(client);
      res.status(httpStatus.CREATED).json(newClient);
    } catch (error) {
      console.error(error.message);
      next(error);
      res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: "Error create Client" });
    }
  }
);

router.put(
  "/client/:id",
  auth,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = parseInt(req.params.id);
      if (!isIdValid(id)) return res.sendStatus(httpStatus.BAD_REQUEST);

      const client = req.body as ClientCreateInput;
      await updateClient(id, client);
      res.status(httpStatus.OK).json({ message: "Cliente actualizado.." });
    } catch (error) {
      console.error(error.message);
      next(error);
      res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: "Error update Client" });
    }
  }
);

router.delete(
  "/client/:id",
  auth,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = parseInt(req.params.id);
      if (!isIdValid(id)) return res.sendStatus(httpStatus.BAD_REQUEST);
      await deleteClient(id);
      res.status(httpStatus.OK).json({ message: "Cliente eliminado.." });
    } catch (error) {
      console.error(error.message);
      next(error);
      res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: "Error delete Client" });
    }
  }
);

export default router;
