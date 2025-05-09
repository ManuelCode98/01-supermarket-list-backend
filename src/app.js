
import { cors, express } from './src/bookstores/bookstores.js';
import { addProductToList } from './src/routes/added-product-to-list/added-product-to-list.js';
import { createProductDb } from './src/routes/create-product/create-product.js';
import { deleteAllProducts } from './src/routes/delete-all-products/delete-all-products.js';
import { deletebackupProduct } from './src/routes/delete-backup-product/delete-backup-product.js';
import { deleteProductDB } from './src/routes/delete-product/delete-product.js';
import { getCrossedOutProducts } from './src/routes/get-crossed-out-products/get-crossed-out-products.js';
import { getProductsList } from './src/routes/products-added-to-the-list/products-added-to-the-list.js';
import { routes } from './src/routes/routes.js';
import { saveCrossedOutProducts } from './src/routes/save-crossed-out-products/save-crossed-out-products.js';
import { searchProductDB } from './src/routes/search-product/search-product.js';
import { updateProductList } from './src/routes/update-product-list/update-product-list.js';
import { updateProductDB } from './src/routes/update-product/update-product.js';
import { welcomePage } from './src/routes/welcome-page/welcome-page.js';


const port = process.env.PORT;

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

( ( ) => {

    app.listen(port, ()=>{
        console.log(`Servidor corriendo en el puerto ${port} `);
    });
})(port);