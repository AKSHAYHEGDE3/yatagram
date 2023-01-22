const multer= require("multer")

const cloudinary = require("cloudinary")

const {CloudinaryStorage}=require("multer-storage-cloudinary")

const {

        CLOUDINARY_HOST,
        CLOUDINARY_API_KEY,
        CLOUDINARY_API_SECRET,
}=process.env

cloudinary.config({
cloudinary_name=CLOUDINARY_HOST,
api_key=CLOUDINARY_API_KEY,
api_secret=CLOUDINARY_API_SECRET

})


const storage = new CloudinaryStorage({
    cloudinary:cloudinary,
    params:{}



})
