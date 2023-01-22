const { findByIdAndUpdate } = require("../models/Post")
const Post = require("../models/Post")

module.exports.addPost=async(req,res)=>{
    // console.log(req.body)
    const {content,caption,like,user,comments,likedPeople,imgUrl,userId}=req.body
    const np=new Post({content:content,like:like,caption:caption,user:user,comments:comments,likedPeople:likedPeople,imgUrl:imgUrl,userId:userId})
    await np.save().then((newpost)=>res.status(201).send(newpost));
   

}
module.exports.getPost=async(req,res)=>{
    const followings=req.body.following
    const userId = req.body.userId
    // console.log(req.body)
    // console.log(req.body.following)
  
    // followings.map(async f=>{
    //   console.log(f)
    //   let post=await Post.find({userId:f}).then(res=>res)

    //   posts.append()
        
    // })

// let posts=[]
let posts=[]
const friendPosts = await Promise.all(
followings.map((friendId) => {
    return Post.find({ userId: friendId });
  })
);

friendPosts.map(a=>{
  posts=posts.concat(a)
})


const userPosts=await Post.find({userId}).then(res=>res)
// console.log(posts)
// const userPosts=await Post.find({userId}).then(res=>res)

    




// console.log("sdaf",friendPosts)

    posts=posts.concat(userPosts)
    // console.log(posts)
    res.status(200).send(posts)
}

module.exports.getUserPost=async(req,res)=>{

let userId=req.params.userId
const posts= await Post.find({userId:userId}).then(result=>result);
res.status(200).send(posts)

}

module.exports.deletePost=()=>{

}



module.exports.handleLike=async(req,res)=>{
  var friend = req.body.friend_id;
  var post = await Post.findOne({_id:req.body.post_id})
  const liked_people=post.likedPeople;
  const disliked_people=post.dislikedPeople;
  // console.log(liked_people)
  // console.log(disliked_people)
  const verLikedUser = await liked_people.includes(friend)
  const verDislikedUser = await disliked_people.includes(friend)
  // console.log(verLikedUser)
  if(req.body.liked){
      if(!verLikedUser){
        // console.log("new like")
        const post=await Post.findByIdAndUpdate(req.body.post_id,{$inc : {'like' : 1},$push: { likedPeople: req.body.friend_id },$pullAll: { dislikedPeople:[req.body.friend_id] }} ,{new: true, useFindAndModify: false})
        return res.status(200).send(post)
      } else {
        // console.log("same user liked")
        const post=await Post.findByIdAndUpdate(req.body.post_id,{$inc : {'like' : 0}} ,{new: true, useFindAndModify: false})
        return res.status(200).send(post)
      }
  } else {
      if((verLikedUser) && (!verDislikedUser)){
        // console.log("new dislike")
        const post= await Post.findByIdAndUpdate(req.body.post_id,{$inc : {'like' : -1}, $push: { dislikedPeople: req.body.friend_id },$pullAll: { likedPeople:[req.body.friend_id] }},{new: true, useFindAndModify: false})
        return res.status(200).send(post)
      } else{
        // console.log("cannot dislike")
        const post=await Post.findByIdAndUpdate(req.body.post_id,{$inc : {'like' : 0}} ,{new: true, useFindAndModify: false})
        return res.status(200).send(post)
      }
  }

}