import { Redis } from 'ioredis';
import { redisConfig } from '../config/config';

/*const serverQl = new ApolloServer({
     typeDefs,
     resolvers,
   });
 
   await serverQl.start();
 
   app.use("/graphql", expressMiddleware(serverQl));*/

const redis = new Redis({
  port: redisConfig.port,
  host: redisConfig.host,
  db: 1
});

//await redis.geoadd('ubi', -17.780632, -63.188728, 'p1');
//await redis.geoadd('ubi', -17.778180, -63.173064, 'p2');

//const dist = await redis.geodist('ubi', 'p1', 'p2','KM');

export default redis;