const Image = require("../models/Image")

module.exports.uploadImage=async(req,res)=>{
    const ImageUpload=new Image({image:req.file.path})

    try{
        await ImageUpload.save()
    }
    catch(err){
        console.log(err)
    }

}