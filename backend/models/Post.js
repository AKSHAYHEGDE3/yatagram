const mongoose = require("mongoose")
const Schema = mongoose.Schema

const postSchema=new Schema({

 
    user:{type:String,required:true},
    userId:{type:String,required:true},
    caption:{type:String},
    like:{type:Number},
    comments:{type:Array},
    likedPeople:{type:Array},
    dislikedPeople:{type:Array},
    imgUrl:{type:String}


},{timestamps:true})

const Post = mongoose.model('post',postSchema)
module.exports=Post;