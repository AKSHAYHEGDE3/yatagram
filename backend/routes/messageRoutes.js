const express = require("express");
const messageController = require("../controllers/messageController.js")
const router=express.Router();

router.post('/message',messageController.postMessage)
router.get('/message/:conversationId',messageController.getMessage)


module.exports=router;