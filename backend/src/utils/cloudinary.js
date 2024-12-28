import {v2 as cloudinary} from 'cloudinary';
import multer from 'multer';

cloudinary.config({
    cloud_name:process.env.CLOULINARY_CLOUD_NAME,
    api_key:process.env.CLOULINARY_API_KEY,
    api_secret:process.env.CLOULINARY_API_SECRET,
})

const storage= new multer.memoryStorage();

async function cloudinaryImgUpload(localFilePath){
    const result =await cloudinary.uploader.upload(localFilePath,{
        resource_type:'auto'
    })
    return result;
}

const upload=multer({storage})

export  {upload, cloudinaryImgUpload}