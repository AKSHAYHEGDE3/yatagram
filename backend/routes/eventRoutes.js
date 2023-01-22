const express= require("express");
const eventController =require("../controllers/eventController.js")
const router=express.Router();
router.get("/get-events",eventController.getEvents)
router.post("/post-events",eventController.postEvents)

module.exports= router