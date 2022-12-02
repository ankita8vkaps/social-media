import { createReducer } from "@reduxjs/toolkit";
const initialState = {};

export const postReducer = createReducer(initialState, {
  POST_FOLLOWING_REQ: (state) => {
    state.loading = true;
  },
  POST_FOLLOWING_SUCC: (state, action) => {
    state.loading = false;
    state.posts = action.payload;
  },
  POST_FOLLOWING_FAIL: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  NEW_POST_REQ: (state) => {
    state.loading = true;
  },
  NEW_POST_SUCC: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  NEW_POST_FAIL: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  UPDATE_POST_REQ: (state) => {
    state.loading = true;
  },
  UPDATE_POST_SUCC: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  UPDATE_POST_FAIL: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  DELETE_POST_REQ: (state) => {
    state.loading = true;
  },
  DELETE_POST_SUCC: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  DELETE_POST_FAIL: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  MY_POST_REQ: (state) => {
    state.loading = true;
  },
  MY_POST_SUCC: (state, action) => {
    state.loading = false;
    state.posts = action.payload;
  },
  MY_POST_FAIL: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
});

export const likeUnlikeReducer = createReducer(initialState, {
  LIKE_UNLIKE_REQ: (state) => {
    state.loading = true;
  },
  LIKE_UNLIKE_SUCC: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  LIKE_UNLIKE_FAIL: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
});

export const commentReducer = createReducer(initialState, {
  COMMENT_REQ: (state) => {
    state.loading = true;
  },
  COMMENT_SUCC: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  COMMENT_FAIL: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  DEL_COMMENT_REQ: (state) => {
    state.loading = true;
  },
  DEL_COMMENT_SUCC: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  DEL_COMMENT_FAIL: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
});
