const User = require("../models/User");
const Post = require("../models/Posts");
const cloudinary = require("cloudinary");
const { findById } = require("../models/User");

exports.createPost = async (req, res) => {
  try {
    const myCloud = await cloudinary.v2.uploader.upload(req.body.image, {
      folder: "posts",
    });

    const postdata = {
      caption: req.body.caption,
      image: {
        public_id: myCloud.public_id,
        url: myCloud.secure_url,
      },
      owner: req.user._id,
    };

    const post = await Post.create(postdata);
    const user = await User.findById(req.user._id);

    user.posts.unshift(post._id);

    await user.save();

    res.status(200).json({
      success: true,
      message: "Post created",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.deletePost = async (req, res) => {
  try {
    //checking if post exists or not
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(400).json({
        success: false,
        message: "Post not found",
      });
    }

    //checking if logged in user is the owner of post
    if (post.owner.toString() !== req.user._id.toString()) {
      return res.status(401).json({
        success: false,
        message: "You are Unauthorized to delete this post",
      });
    }

    await cloudinary.v2.uploader.destroy(post.image.public_id);

    await post.remove();

    const user = await User.findById(req.user._id);

    const index = user.posts.indexOf(req.params.id);
    user.posts.splice(index, 1);

    await user.save();

    res.status(200).json({
      success: true,
      message: "Post deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    //checking if post exists or not
    if (!post) {
      return res.status(400).json({
        success: false,
        message: "Post not found",
      });
    }

    //checkin if post belongs to logged in user
    if (post.owner.toString() !== req.user._id.toString()) {
      return res.status(401).json({
        success: false,
        message: "You are not authorized to update this post",
      });
    }

    post.caption = req.body.caption;
    await post.save();

    res.status(200).json({
      success: true,
      message: "Post updated",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.likeAndUnlike = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(400).json({
        success: false,
        message: "Post not found",
      });
    }

    if (post.likes.includes(req.user._id)) {
      const index = post.likes.indexOf(req.params._id);
      post.likes.splice(index, 1);
      await post.save();

      return res.status(200).json({
        success: true,
        message: "Post Unliked",
      });
    }

    post.likes.push(req.user._id);

    await post.save();

    return res.status(200).json({
      success: true,
      message: "Post Liked",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.newComment = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    //checking if post exists or not
    if (!post) {
      return res.status(400).json({
        success: false,
        message: "Post not found",
      });
    }

    post.comments.push({ user: req.user, comment: req.body.comment });
    await post.save();

    res.status(200).json({
      success: true,
      message: "commented successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.deleteComment = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }

    // Checking If owner wants to delete

    if (post.owner.toString() === req.user._id.toString()) {
      if (req.body.commentId === undefined) {
        return res.status(400).json({
          success: false,
          message: "Comment Id is required",
        });
      }

      post.comments.forEach((item, index) => {
        if (item._id.toString() === req.body.commentId.toString()) {
          return post.comments.splice(index, 1);
        }
      });

      await post.save();

      return res.status(200).json({
        success: true,
        message: "Selected Comment has deleted",
      });
    } else {
      post.comments.forEach((item, index) => {
        if (item.user.toString() === req.user._id.toString()) {
          return post.comments.splice(index, 1);
        }
      });

      await post.save();

      return res.status(200).json({
        success: true,
        message: "Your Comment has been deleted",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getPostOfFollowings = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    const posts = await Post.find({ owner: { $in: user.following } });
    res.status(200).json({
      success: true,
      posts: posts,
    });
  } catch (error) {
    res.status(500).json({
      success: true,
      message: error.message,
    });
  }
};

exports.newReply = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(400).json({
        success: false,
        message: "Post not found",
      });
    }

    post.comments.forEach((item, idx) => {
      if (item._id.toString() === req.params.cmtId.toString()) {
        return post.comments[idx].reply.push({
          replied: req.body.reply,
          user: req.user._id,
        });
      }
    });

    post.save();
    res.status(200).json({
      success: true,
      message: "replied successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.deleteReply = async(req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(400).json({
        success: false,
        message: "Post not found",
      });
    }

    //checking if Post owner want to delete reply
    if (post.owner._id.toString() === req.user._id.toString()) {
      post.comments.forEach((item, idx) => {
        if (item._id.toString() === req.params.cmtId.toString()) {
          return post.comments[idx].reply.forEach((ele, ix) => {
            if (ele._id.toString() === req.params.repId) {
              return post.comments[idx].reply.splice(ix, 1);
            }
          });
        }
      });
      await post.save();
      res.status(200).json({
        success: true,
        message: "reply deleted successfully",
      });
    } else {
      post.comments.forEach((item, idx) => {
        if (item._id.toString() === req.params.cmtId.toString()) {
          return post.comments[idx].reply.forEach((ele, ix) => {
            if (ele._id.toString() === req.params.repId) {
              if (ele.user.toString() === req.user._id.toString()) {
                post.comments[idx].reply.splice(ix, 1);
               post.save();
                res.status(200).json({
                  success: true,
                  message: "reply deleted successfully",
                });
              } else {
                return res.status(401).json({
                  success: false,
                  message: "You are not authorized to delete this reply",
                });
              }
            }
          });
        }
      });
    }
  } catch (error) {
    res.status(500).json({});
  }
};
