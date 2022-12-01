import { configureStore } from "@reduxjs/toolkit";

import {
  myProfileReducer,
  followUnfollowReducer,
  userReducer,
} from "./Reducers/User";

import {
  postReducer,
  likeUnlikeReducer,
  commentReducer,
} from "./Reducers/Post";

const store = configureStore({
  reducer: {
    user: userReducer,
    like: likeUnlikeReducer,
    myprofile: myProfileReducer,
    posts: postReducer,
    comment: commentReducer,
    follow: followUnfollowReducer,
  },
});

export default store;