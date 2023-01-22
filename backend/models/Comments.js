const mongoose = require("mongoose")
const Schema = mongoose.Schema

const commentSchema=new Schema({
    postId:{
        type:String
    },
 
    senderName:{
        type:String
    },
 
    text:{
        type:String
    },
 
 },{timestamps:true})

const Comment = mongoose.model('comment',commentSchema)
module.exports=Comment;
