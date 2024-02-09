import cors from "cors";
import express, { Request, Response } from "express";
import { pinoHttp } from "pino-http";
import routes from "../api/routes.api";
import Logger from "./logger.core";

process.on("uncaughtException", (e) => {
  Logger.error(e);
});

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  pinoHttp({
    serializers: {
      req: (req) => ({
        method: req.method,
        url: req.url,
        query: req.query,
        params: req.params,
      }),
      res: (res) => ({
        statusCode: res.statusCode,
        message: res.message,
      }),
    },
  })
);
// Routes
app.use(routes);

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hola 😃" });
});

export default app;
