import { Router } from 'express';
import { alarmaController, authController, circleController, clientController, deviceController, geofenceController, locationController, motoController, motodispoController, polygonController, positionController, roleController, sucrusalController, userController } from '../../controllers';

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