const Room = require('../models/Room')
const RoomText = require("../models/RoomText")

module.exports.createRoom = async (req,res)=>{
    const newRoom = new Room(req.body) 

    try{
        const savedRoom = await newRoom.save()
        res.status(200).json(savedRoom)
    } catch(err){
        res.status(500).json(err)
    }
}

module.exports.verifyRoom =async (req,res)=>{
    const {name,password}=req.body;

    const response=await Room.login(name,password);
    if(response){
        res.status(200).send(response)
    }
    else{
        res.status(500).send(response)

    }
}




module.exports.postMessage = async (req,res)=>{
    const newMessage = new RoomText(req.body)

    try{
        const savedMessage = await newMessage.save()
        res.status(200).json(savedMessage)
    } catch(err){
        res.status(500).json(err)
    }
}

module.exports.getMessage = async (req,res)=>{
    try{
        const messages = await RoomText.find({
            roomId:req.params.roomId
        })
        res.status(200).json(messages)
    }  catch(err){
        res.status(500).json(err)
    }
}
