const express = require("express");
const router = express.Router();
const { createPost, deletePost, updatePost, likeAndUnlike, newComment, deleteComment, getPostOfFollowings, newReply, deleteReply} = require("../controllers/posts");
const { isAuthenticated } = require("../middleware/auth");


router.route('/new_post').post(isAuthenticated,createPost);

router.route('/posts/:id')
.post(isAuthenticated,likeAndUnlike)
.put(isAuthenticated,updatePost)
.delete(isAuthenticated,deletePost);

router.route('/posts/:id/comment')
.post(isAuthenticated,newComment)
.delete(isAuthenticated,deleteComment)

router.route('/posts').get(isAuthenticated, getPostOfFollowings)

router.route('/posts/:id/comment/:cmtId').get(isAuthenticated,newReply)

router.route('/posts/:id/comment/:cmtId/reply/:repId').delete(isAuthenticated,deleteReply)

module.exports = router;