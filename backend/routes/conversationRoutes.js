const express= require("express");
const conversationController = require("../controllers/conversationController.js")
const router=express.Router();

router.post("/conversation",conversationController.postConversation)
router.get("/conversation/:userId",conversationController.getConversation)


module.exports=router;