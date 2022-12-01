import { createReducer } from "@reduxjs/toolkit";
const initialState = {};

export const userReducer = createReducer(initialState, {
  SIGNUP_REQ: (state) => {
    state.loading = true;
  },
  SIGNUP_SUCC: (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.isAuthenticated = true;
  },
  SIGNUP_FAIL: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },
  LOGIN_REQ: (state) => {
    state.loading = true;
  },
  LOGIN_SUCC: (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.isAuthenticated = true;
  },
  LOGIN_FAIL: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },
  LOGOUT_REQ: (state) => {
    state.loading = true;
  },
  LOGOUT_SUCC: (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.isAuthenticated = true;
  },
  LOGOUT_FAIL: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },
});

export const myProfileReducer = createReducer(initialState, {
  MY_PROFILE_REQ: (state) => {
    state.loading = true;
  },
  MY_PROFILE_SUCC: (state, action) => {
    state.loading = false;
    state.user = action.payload;
  },
  MY_PROFILE_FAIL: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
});

export const followUnfollowReducer = createReducer(initialState,{
    FOLLOW_UNFOLLOW_REQ: (state) => {
        state.loading = true;
      },
      FOLLOW_UNFOLLOW_SUCC: (state, action) => {
        state.loading = false;
        state.message = action.payload;
      },
      FOLLOW_UNFOLLOW_FAIL: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
})