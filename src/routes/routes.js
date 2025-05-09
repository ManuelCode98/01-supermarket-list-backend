import { Router } from '../bookstores/bookstores.js';
import { controllers } from '../controllers/controllers.js';

const routes = Router();

routes.post('/create-product', controllers.createProductDb );
routes.post('/delete-product/:id', controllers.deleteProductDB );
routes.post('/update-product/:id', controllers.updateProductDB );
routes.post('/search-product', controllers.searchProductDB );
routes.post('/add-product-to-list', controllers.addProductToList );
routes.post('/show-products', controllers.getProductsList );
routes.post('/delete-all-products', controllers.deleteAllProducts );
routes.post('/save-crossed-out-products', controllers.saveCrossedOutProducts );
routes.post('/delete-backup-product/:id', controllers.deletebackupProduct );
routes.post('/get-crossed-out-products', controllers.getCrossedOutProducts );
routes.post('/update-product-list/:id', controllers.updateProductList  );
routes.post('/upload-rendered-image', controllers.set_rendered_image )


export {
    routes,
}