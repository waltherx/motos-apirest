import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { createServer } from "http";
import app from "./app";
import { port } from "./config";
import Logger from "./core/Logger";
import { resolvers, typeDefs } from "./graphql/query";

const initServer = async () => {
  const serverQl = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await serverQl.start();

  app.use("/graphql", expressMiddleware(serverQl));

  const serverHttp = createServer(app);

  serverHttp
    .listen({ port: port }, () => {
      Logger.info(`server running on port : ${port}`);
      console.log(
        `⚡️[server express]: Esta corriendo en -> 🤠 http://127.0.0.1:${port} ⚡️`
      );
      console.log(
        `⚡️[server graphql]: Esta corriendo en -> 🤠 http://127.0.0.1:${port}/graphql ⚡️`
      );
    })
    .on("error", (e) => Logger.error(e));
};

initServer();
