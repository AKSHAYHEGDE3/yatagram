const mongoose = require("mongoose");
const Schema=mongoose.Schema

const textSchema =  Schema({

    user_name:{
        type:String,
        requried:true
    }
     , text:{
         type:String,
         requried:true
     },
     user_id:{
         type:String,
         requried:true
     },
     room_id:{
         type:String,
         requried:true
 
     }
 
})
const Text = mongoose.model('text',textSchema)
module.exports=Text;