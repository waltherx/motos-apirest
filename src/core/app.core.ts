import cors from "cors";
import express, { Request, Response } from "express";
import morgan from 'morgan';
import routes from "../app/api/routes.api";
import Logger from "./logger.core";

process.on("uncaughtException", (e) => {
  Logger.error(e);
});

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan('tiny'));
// Routes
app.use(routes);

app.all("*", (req: Request, res: Response) => {
  res.status(404).json({ error: `Ruta ${req.originalUrl} no encontrada` });
});

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hola 😃" });
});

export default app;
