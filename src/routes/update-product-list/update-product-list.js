import { PrismaClient, Router } from '../../bookstores/bookstores.js';

const prisma = new PrismaClient();
const updateProductList = Router();

updateProductList.put('/update-product-list/:id', async(req, res) => {
    const id = parseInt(req.params.id);
    const { product_name, product_photo, product_amount, product_price, crossed_out, result } = req.body;

    const productUpdated = await prisma.added_Products.update({
        where: {
            id,
        },
        data: {
            product_name,
            product_photo,
            product_amount,
            product_price,
            crossed_out,
            result,
        },
    });

    // const products = await prisma.added_Products.findMany( )
    
    // if(products.length){

    //     res.json({
    //         status: 200,
    //         success: true,
    //         products
    //     })
    //     return
    // };

    res.json({ 
        status: 200,
        success: true,
        productUpdated,
    });
});

export {
    updateProductList,

};