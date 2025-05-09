import { createProductDb } from "../services/create-product.js";
import { addProductToList } from '../services/added-product-to-list.js';
import { deleteAllProducts } from '../services/delete-all-products.js';
import { deletebackupProduct } from '../services/delete-backup-product.js';
import { deleteProductDB } from '../services/delete-product.js';
import { getCrossedOutProducts } from '../services/get-crossed-out-products.js';
import { getProductsList } from '../services/products-added-to-the-list.js';
import { saveCrossedOutProducts } from '../services/save-crossed-out-products.js';
import { searchProductDB } from '../services/search-product.js';
import { updateProductList } from '../services/update-product-list.js';
import { updateProductDB } from '../services/update-product.js';
import { uploadRenderedImage } from "../services/upload-rendered-image.js";

const controllers ={ 

    createProductDb: ()=>{
        try {
            createProductDb( req, res );       
        } catch (error) {
             res.status(500).json({ error: error.message })
        }
    } ,

    addProductToList: ()=>{
        try {
            addProductToList( req, res );       
        } catch (error) {
             res.status(500).json({ error: error.message })
        }
    } ,

    deleteAllProducts: ()=>{
        try {
            deleteAllProducts( req, res );       
        } catch (error) {
             res.status(500).json({ error: error.message })
        }
    } ,

    deletebackupProduct: ()=>{
        try {
            deletebackupProduct( req, res );       
        } catch (error) {
             res.status(500).json({ error: error.message })
        }
    } ,

    deleteProductDB: ()=>{
        try {
            deleteProductDB( req, res );       
        } catch (error) {
             res.status(500).json({ error: error.message })
        }
    } ,

    getCrossedOutProducts: ()=>{
        try {
            getCrossedOutProducts( req, res );       
        } catch (error) {
             res.status(500).json({ error: error.message })
        }
    } ,

    getProductsList: ()=>{
        try {
            getProductsList( req, res );       
        } catch (error) {
             res.status(500).json({ error: error.message })
        }
    } ,

    saveCrossedOutProducts: ()=>{
        try {
            saveCrossedOutProducts( req, res );       
        } catch (error) {
             res.status(500).json({ error: error.message })
        }
    } ,

    searchProductDB: ()=>{
        try {
            searchProductDB( req, res );       
        } catch (error) {
             res.status(500).json({ error: error.message })
        }
    } ,

    updateProductList: ()=>{
        try {
            updateProductList( req, res );       
        } catch (error) {
             res.status(500).json({ error: error.message })
        }
    } ,

    updateProductDB: ()=>{
        try {
            updateProductDB( req, res );       
        } catch (error) {
             res.status(500).json({ error: error.message })
        }
    } ,

    set_rendered_image : (req, res)=>{

        try{
            console.log('hello');
            uploadRenderedImage()
        }
        catch(error){
            res.status(500).json({ error: error.message })
        }
    },
};

export {
    controllers,
}