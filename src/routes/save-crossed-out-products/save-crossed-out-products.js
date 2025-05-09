import { PrismaClient, Router } from '../../bookstores/bookstores.js';

const prisma = new PrismaClient();
const saveCrossedOutProducts = Router();


saveCrossedOutProducts.post( '/save-crossed-out-products', async( req, res )=>{

    const id = parseInt(req.body.id);
    const { product_name, product_photo, product_amount, product_price, result, crossed_out } = req.body;

    if( crossed_out === 'not-crossed-out' ){

    const theProductExists = await prisma.crossedOutProduct.findUnique({
        where: {
            id
        }
    })

    if( theProductExists === null ){

        const crossedOutProduct = await prisma.crossedOutProduct.create({
            data: {
                id,
                product_name,
                product_photo,
                crossed_out,
                product_amount,
                product_price,
                result
            }
        })

        await prisma.added_Products.update({
            where: {
                id
            },
            data: {
                crossed_out: 'crossed-out',
                product_amount: 0,
                product_price: 0,
                result: 0,
            }
        })

        res.json({
            status: 200,
            success: true,
            data: `Este es el producto tachado "${ crossedOutProduct.product_name }"`,
        });

        return
    }

    if( theProductExists ){

        const updateProductoStateDb = await prisma.crossedOutProduct.update({
            where: {
                id: theProductExists.id,
            },
            data: {
                crossed_out,
                product_amount,
                product_price,
                result,
            }
        })

        await prisma.added_Products.update({
            where: {
                id: theProductExists.id,
            },
            data: {
                crossed_out: 'crossed-out',
                product_amount: 0,
                product_price: 0,
                result: 0,
            }
        })

        res.json({
            status: 200,
            success: true,
            data: {
                data1:`Este producto ya esta en la lista tachada "${ theProductExists.product_name }"`,
                data2:`producto actualizado en crossedOutProduct ${ updateProductoStateDb }`
            },
        });     

    }
    

    return

}

if( crossed_out === 'crossed-out' ){

    const theProductExists = await prisma.crossedOutProduct.findUnique({
        where: {
            id
        }
    })

    // console.log(product);

    if( theProductExists ){
        // console.log('llamado3');
        await prisma.added_Products.update({
            where: {
                id: theProductExists.id,
            },

            data: {
                    crossed_out: theProductExists.crossed_out,
                    product_amount: theProductExists.product_amount,
                    product_price: theProductExists.product_price,
                    result: theProductExists.result,
            }
        })

        res.send( `producto actualizado en added_Product con el id ${ theProductExists.id }` )
    }

    return;
}


    

    
    
});



export {
    saveCrossedOutProducts,
}