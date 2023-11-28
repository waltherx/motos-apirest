import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import app from './app';
import { port } from './config';
import Logger from './core/Logger';
import { resolvers, typeDefs } from './graphql/query';

const initServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers
  });

  await server.start();

  app.use('/graphql', expressMiddleware(server));

  app.listen({ port: process.env.PORT }, () => {
    Logger.info(`server running on port : ${port}`);
    console.log(`⚡️[server express]: Esta corriendo en -> 🤠 http://127.0.0.1:${port} ⚡️`);
    console.log(`⚡️[server graphql]: Esta corriendo en -> 🤠 http://127.0.0.1:${port}/graphql ⚡️`);
  }).on('error', (e) => Logger.error(e));
};

initServer();

/*
app
  .listen(port, () => {
    Logger.info(`server running on port : ${port}`);
    console.log(`⚡️[server]: Esta corriendo en -> 🤠 http://${hostname()}:${port} ⚡️`);
  })
  .on('error', (e) => Logger.error(e));*/