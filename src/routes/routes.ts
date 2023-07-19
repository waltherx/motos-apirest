import { Router } from 'express';
import clientController from '../controllers/clientController';
import motoController from '../controllers/motoController';
import positionController from '../controllers/positionController';
import userController from '../controllers/userController';
import roleController from '../controllers/roleController';
import menuController from '../controllers/menuController';
import sucrusalController from '../controllers/sucrusalController';
import userOnSucrusalController from '../controllers/userSucrusalController';
import deviceController from '../controllers/dispositivoController';
import authController from '../controllers/authController';


const api = Router()
  .use(clientController)
  .use(motoController)
  .use(positionController)
  .use(userController)
  .use(roleController)
  .use(menuController)
  .use(sucrusalController)
  .use(userOnSucrusalController)
  .use(deviceController)
  .use(authController)

export default Router().use('/api', api);
