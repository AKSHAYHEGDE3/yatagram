const mongoose = require("mongoose");
const ImageSchema = new mongoose.Schema(
{

    image:{
        type:String,
        required:true}
},{timestamps:true}
)

const Image=new mongoose.model("image",ImageSchema);

module.exports=Image