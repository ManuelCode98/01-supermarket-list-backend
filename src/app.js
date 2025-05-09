
import { cors, express } from './bookstores/bookstores.js';
import { addProductToList } from './routes/added-product-to-list/added-product-to-list.js';
import { createProductDb } from './routes/create-product/create-product.js';
import { deleteAllProducts } from './routes/delete-all-products/delete-all-products.js';
import { deletebackupProduct } from './routes/delete-backup-product/delete-backup-product.js';
import { deleteProductDB } from './routes/delete-product/delete-product.js';
import { getCrossedOutProducts } from './routes/get-crossed-out-products/get-crossed-out-products.js';
import { getProductsList } from './routes/products-added-to-the-list/products-added-to-the-list.js';
import { routes } from './routes/routes.js';
import { saveCrossedOutProducts } from './routes/save-crossed-out-products/save-crossed-out-products.js';
import { searchProductDB } from './routes/search-product/search-product.js';
import { updateProductList } from './routes/update-product-list/update-product-list.js';
import { updateProductDB } from './routes/update-product/update-product.js';
import { welcomePage } from './routes/welcome-page/welcome-page.js';


const app = express();

app.use( cors() );
app.use( express.json() );

// Rutas
app.use( '/', welcomePage );
app.use( '/api', createProductDb );
app.use( '/api', deleteProductDB );
app.use( '/api', updateProductDB );
app.use( '/api', searchProductDB );
app.use( '/api', addProductToList );
app.use( '/api', getProductsList );
app.use( '/api', deleteAllProducts );
app.use( '/api', saveCrossedOutProducts );
app.use( '/api', deletebackupProduct );
app.use( '/api', getCrossedOutProducts);
app.use( '/api', updateProductList );
app.use( '/api', routes );



export {
    app
}