import { Router } from '../bookstores/bookstores.js';
import { controllers } from '../controllers/controllers.js';

const routes = Router();

routes.post('/upload-rendered-image', controllers.set_rendered_image )


export {
    routes,
}