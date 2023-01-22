const express =  require("express");
const router = express.Router();
const postControllers = require("../controllers/postControllers.js")

router.post("/add-post",postControllers.addPost)
router.post("/add-post",postControllers.addPost)
router.post("/like",postControllers.handleLike)
router.post("/get-post",postControllers.getPost)
router.delete("/delete-post",)
router.get("/getposts/:userId",postControllers.getUserPost)

module.exports=router