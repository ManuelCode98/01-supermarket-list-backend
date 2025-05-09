import { PrismaClient, Router } from "../../bookstores/bookstores.js";


const prisma = new PrismaClient();
const addProductToList = Router();

addProductToList.post( '/add-product-to-list', async( req, res )=>{

    const id = parseInt( req.body.id );
    const { product_name, product_photo, product_amount, product_price, result, crossed_out } = req.body;

    try {

        if( product_amount && product_price ){

           const saveListProduct = await prisma.added_Products.create( {
                data: {
                    id,
                    product_name,
                    product_photo,
                    crossed_out,
                    product_amount,
                    product_price,
                    result,
                }
            } )
            
            
            res.json({
                status: 200,
                success: true,
                data: `Producto añadido a la lista "${ product_name }"`,
            });

            console.log(`Producto añadido a la lista fue "${ product_name}"` );
            return;

        }

        res.send(`Datos invalidos o incompletos...`);
    }
    catch( error ){
        console.log(`
        Error en la solicitud 
        ${ error } 
        Error en el archivo added-product-to-list.js`);
    }
    finally {
        await prisma.$disconnect();
    }

} );

export {
    addProductToList,
}

