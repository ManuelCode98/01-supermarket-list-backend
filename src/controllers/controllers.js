import { uploadRenderedImage } from "../services/upload-rendered-image.js";



const controllers ={ 

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