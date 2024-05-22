import { createServer } from "http";
import { port } from "./config/config";
import app from "./core/app.core";
import cron from './core/cron.core';
import Logger from "./core/logger.core";

const initServer = async () => {
  cron.start();
  const serverHttp = createServer(app);
  serverHttp
    .listen({ port: port }, () => {
      Logger.info(`server running on port : ${port}`);
      console.log(
        `⚡️[server express]: Esta corriendo en -> 🤠 http://127.0.0.1:${port} ⚡️`
      );
    })
    .on("error", (e) => Logger.error(e));
};

initServer();
