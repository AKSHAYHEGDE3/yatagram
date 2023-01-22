const User =require("../models/User")

module.exports.user = async (req,res)=>{
    const userId = req.query.userId

    try{
        
        const user = await User.findById(userId)
        res.status(200).json(user)
    } catch(err){
        console.log("error")
        res.status(500).json(err)
    }

}

module.exports.handleFollowers = async(req,res)=>{
        currentUser=req.params.id
        follower=req.body.userId

     User.updateOne({_id:currentUser},{ $push: { followers:[follower] } },(err,docs)=>{
            if(err){console.log(err)}
         
        })
        User.updateOne({_id:follower},{ $push: { following:[currentUser] } },(err,docs)=>{
            if(err){console.log(err)}
    
        })
        
        res.status(200).send({"message":"ok"})
}

module.exports.handleUnFollow = async(req,res)=>{
    currentUser=req.params.id
    follower=req.body.userId

 User.updateOne({_id:currentUser},{ $pullAll: { followers:[follower] } },(err,docs)=>{
        if(err){console.log(err)}
     
    })
    User.updateOne({_id:follower},{ $pullAll: { following:[currentUser] } },(err,docs)=>{
        if(err){console.log(err)}

    })
   
    res.status(200).send({"message":"ok"})
}

module.exports.searchUsers=async(req,res)=>{
   
    User.find({ name: { $regex: req.body.query, $options: "i" } }, function(err, docs) {
     
        res.status(200).send(docs)
        });

}

