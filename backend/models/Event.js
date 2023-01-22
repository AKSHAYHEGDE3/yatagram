const mongoose = require("mongoose")

const Schema =  mongoose.Schema

const eventSchema=Schema(
    {
        name:{
            type:String
        },
        description:{
            type:String
        },
        link:{
            type:String
        }
    },{timestamps:true}
)


const Event = mongoose.model("event",eventSchema)

module.exports=Event