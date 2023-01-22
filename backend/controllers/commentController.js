const Comment = require('../models/Comments')
const Post = require('../models/Post')

module.exports.postComment = async (req,res) =>{
    const newComment = new Comment(req.body)
    // console.log(req.body)
    try{
        const savedComment = await newComment.save()    
        await Post.findByIdAndUpdate(req.body.postId,{$push : {'comments' : savedComment._id}} ,{new: true, useFindAndModify: false})
        res.status(200).json(savedComment)
    } catch(err){
        res.status(500).json(err)
    }
}

module.exports.getComments= async(req,res)=>{
    try{
        const comments = await Comment.find({
            postId:req.params.postId
        })
        res.status(200).json(comments)
    } catch(err){
        res.status(500).json(err)
    }
}