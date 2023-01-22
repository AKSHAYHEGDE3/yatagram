
//IMPORTED PACKAGES
const express=require("express");
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require("dotenv").config()
//DATABASE VARIABLE
const mongodb = "mongodb://admin:admin123@cluster0-shard-00-00.abkev.mongodb.net:27017,cluster0-shard-00-01.abkev.mongodb.net:27017,cluster0-shard-00-02.abkev.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-lh7h1x-shard-0&authSource=admin&retryWrites=true&w=majority"




const app=express() //creating an express application

// app.use(dotenv.config())
let PORT =process.env.PORT||5000

// .then(()=>{app.listen(PORT,()=>{
//     console.log(`Listening at ${PORT}`)
// })}) 








//MIDDLEWARE
var corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionsSuccessStatus: 200 // For legacy browser support
}
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser())

//socket server connection

const server = require('http').createServer(app);
var socketio = require('socket.io')
const io = socketio(server,{cors:{corsOptions}});


//connecting to the database

mongoose.connect(mongodb,{useNewUrlParser: true,  useUnifiedTopology: true  } ).then(server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})
)


//socket Stuff Lmao
let users=[]
const addUser = (userId, socketId) => {
    !users.some((user) => user.userId === userId) &&
      users.push({ userId, socketId });
  };

  const getUser = (userId) => {
    return users.find((user) => user.userId === userId);
  };

  const removeUser = (socketId) => {
    users = users.filter((user) => user.socketId !== socketId);
  };


io.on("connection",(socket)=>{
    socket.on("addUser", userId => {   
    addUser(userId, socket.id);
    io.emit("getUsers", users);
  });
  socket.on("sendMessage", ({ senderId, receiverId, text }) => {
    const user = getUser(receiverId);
    user?console.log("present"):console.log("mnot")
    user?
    io.to(user.socketId).emit("getMessage", {
      senderId,
      text,
    })
    :null;
  });
  socket.on("disconnect", () => {
    console.log("a user disconnected!");
    removeUser(socket.id);
    io.emit("getUsers", users);
  });

})




//IMPORTING ROUTES
const authRoutes= require("./routes/authRoutes.js")
const postRoutes=require("./routes/postRoutes.js")
const conversationRoutes=require("./routes/conversationRoutes")
const messageRoutes=require("./routes/messageRoutes.js")
const userRoutes=require("./routes/userRoutes.js")
const commentRoutes = require('./routes/commentRoutes')

const roomRoutes = require('./routes/roomRoutes')
const eventRoutes = require('./routes/eventRoutes')




//TESTING COOKIES
app.get("/set-cookies",(req,res)=>{
    res.cookie("name","TEjas")
    res.send("hi")
})
app.get('/get-cookies', (req, res) => {
    const cookies = req.cookies;
    console.log(req.cookies)
    
    res.json(cookies);
})

//USING ROUTES

app.use(authRoutes);
app.use(postRoutes)
app.use(conversationRoutes)
app.use(messageRoutes)
app.use(userRoutes)
app.use(eventRoutes)
app.use(commentRoutes)
app.use(roomRoutes)

app.get("/",(req,res)=>{
    res.send("home")
})


