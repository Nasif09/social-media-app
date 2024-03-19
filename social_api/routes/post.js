const router = require("express").Router();
const Post = require("../models/Post");


//create post
router.post("/", async(req,res) => {
    const newPost = new Post(req.body);
    try{
        const savePost = await newPost.save();
        res.status(200).json(savePost);
    }catch(err){
        res.status(500).json(err);
    }
});

//update post
router.put("/:id", async(req,res) => {
    try{
        const post =await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.updateOne({$set:req.body});
            res.status(200).json("post updated");
        }else{
            res.status(403).json("You can update only your post");
        }
    }catch(err){
        res.status(500).json(err);
    }
});

//delete post
router.delete("/:id", async(req,res) => {
    try{
        const post =await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.deleteOne();
            res.status(200).json("post deleted");
        }else{
            res.status(403).json("You can delete only your post");
        }
    }catch(err){
        res.status(500).json(err);
    }
});


//like & dislike
router.put("/:id/like", async(req,res) => {
    try{
        const post = await Post.findById(req.params.id);
        if(!post.likes.includes(req.body.userId)){
            await post.updateOne({$push: {likes: req.body.userId}});
            res.status(200).json(" the  post has been liked")
        }else{
            await post.updateOne({$pull :{ likes: req.body.userId}});
            res.status(200).json("post has been disliked");
        }
    }catch(err){
        res.status(500).json(err);
    }
})


//get a post 
router.get("/:id", async(req,res) => {
    try{
        const post =await Post.findById(req.params.id);
        res.status(200).json(post);
    }catch(err){
        res.status(500).json(err);
    }
})


//get timeline post
router.get("/timeline/all", async(req,res) => {
    try{
        const currentUser = await User.findById(req.body.userId);     
        console.log(currentUser);
        const userPosts = await Post.find({ userId: currentUser._id });
        console.log(userPosts);
        const friendPosts = await Promise.all(
            currentUser.followings.map((friendId) => {
                return  Post.find({ userId : friendId});
            })
        );
        res.json(userPosts.concat(...friendPosts))
    }catch(err){
        res.status(500).json(err);
    }
})



module.exports = router;