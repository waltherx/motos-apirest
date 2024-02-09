import { Router } from 'express';

import roleController from '../controllers/role.controller';
import userController from '../controllers/user.controller';
import authController from '../controllers/auth.controller';
import clientController from '../controllers/client.controller';
import motoController from '../controllers/moto.controller';
import positionController from '../controllers/position.controller';
import deviceController from '../controllers/dispositivo.controller';
import alarmaController from '../controllers/alarma.controller';
import sucrusalController from '../controllers/succrusal.controller';

import geofenceController from '../controllers/geofence.controller';
import locationController from '../controllers/location.controller';
import polygonController from '../controllers/polygon.controller';
import circleController from '../controllers/circle.controller';
import typealarmaController from '../controllers/typealarma.controller';
import typegeofenceController from '../controllers/typegeofence.controller';
import typeparkedController from '../controllers/typeparked.controller';
import motodispoController from '../controllers/motodispo.controller';
import useralarmaController from '../controllers/useralarma.controller';


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
  .use(geofenceController)
  .use(locationController)
  .use(polygonController)
  .use(circleController)
  .use(typealarmaController)
  .use(typegeofenceController)
  .use(typegeofenceController)
  .use(typeparkedController)
  .use(motodispoController)
  .use(useralarmaController)

export default Router().use('/api', api);