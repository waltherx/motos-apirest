import { Router } from 'express';

import alarmaController from '../../controllers/alarma.controller';
import authController from '../../controllers/auth.controller';
import clientController from '../../controllers/client.controller';
import deviceController from '../../controllers/dispositivo.controller';
import motoController from '../../controllers/moto.controller';
import positionController from '../../controllers/position.controller';
import roleController from '../../controllers/role.controller';
import sucrusalController from '../../controllers/sucrusal.controller';
import userController from '../../controllers/user.controller';
import circleController from '../../controllers/circle.controller';
import geofenceController from '../../controllers/geofence.controller';
import locationController from '../../controllers/location.controller';
import polygonController from '../../controllers/polygon.controller';
import motodispoController from '../../controllers/motodispo.controller';

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
  .use(motodispoController)

export default Router().use('/api', api);