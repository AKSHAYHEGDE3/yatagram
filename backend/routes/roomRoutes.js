const express = require("express")
const roomController = require("../controllers/roomController")
const router = express.Router()

router.post("/roomverify",roomController.verifyRoom)
router.post("/create-room",roomController.createRoom)

module.exports= router;