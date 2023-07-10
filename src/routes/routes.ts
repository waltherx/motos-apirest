import { Router } from 'express';
import  motoController from './motoRoute'

const api = Router()

  .use(motoController);

export default Router().use('/api', api);
