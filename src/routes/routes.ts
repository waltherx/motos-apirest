import { Router } from 'express';
import motoController from '../controllers/motoController'
import clientController from '../controllers/clientController'

const api = Router()
  .use(motoController)
  .use(clientController)

export default Router().use('/api', api);
