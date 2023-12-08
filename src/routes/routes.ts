import { Router } from 'express';
import roleController from '../controllers/roleController';
import userController from '../controllers/userController';
import authController from '../controllers/authController';
import clientController from '../controllers/clientController';
import motoController from '../controllers/motoController';
import positionController from '../controllers/positionController';
import deviceController from '../controllers/dispositivoController';
import alarmaController from '../controllers/alarmaController';
import sucrusalController from '../controllers/succrusalController';

const api = Router()
  .use(userController)
  .use(roleController)
  .use(authController)
  .use(clientController)
  .use(motoController)
  .use(positionController)
  .use(deviceController)
  .use(alarmaController)
  .use(sucrusalController)

export default Router().use('/api', api);