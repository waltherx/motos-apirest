import { Router } from 'express';
import clientController from '../controllers/clientController';
import motoController from '../controllers/motoController';
import positionController from '../controllers/positionController';
import userController from '../controllers/userController';
import roleController from '../controllers/roleController';
import menuController from '../controllers/menuController';


const api = Router()
  .use(clientController)
  .use(motoController)
  .use(positionController)
  .use(userController)
  .use(roleController)
  .use(menuController)



export default Router().use('/api', api);
