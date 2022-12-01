const express = require("express");
const router = express.Router();
const {register,login, getAllUsers, logOut, followUnFollowUser, getMyData, getMyPosts, getUserPosts, getUserProfile} = require("../controllers/user");
const { isAuthenticated } = require("../middleware/auth");

router.route('/user-signup').post(register);

router.route('/login').post(login);

router.route('/all_users').get(getAllUsers);

router.route('/logout').get(logOut);

router.route('/follow_unfollow/:id').post(isAuthenticated,followUnFollowUser);

router.route('/my_profile').get(isAuthenticated,getMyData);

router.route("/my/posts").get(isAuthenticated, getMyPosts);

router.route("/userposts/:id").get(isAuthenticated, getUserPosts);

router.route("/user/:id").get(isAuthenticated, getUserProfile);

module.exports = router;

