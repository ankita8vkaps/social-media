import axios from "axios";

export const signup = (name, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "SIGNUP_REQ",
    });

    const { data } = await axios.post(
      "api/v1/user-signup",
      { name, email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({
      type: "SIGNUP_SUCC",
      payload: data.user, //data is having{success, message, user,token,}
    });
  } catch (error) {
    dispatch({
      type: "SIGNUP_FAIL",
      payload: error.response.data.message,
    });
  }
};

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "LOGIN_REQ",
    });

    const { data } = await axios.post(
      "api/v1/login",
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({
      type: "LOGIN_SUCC",
      payload: data.user, //data is having{success, message, user,token,}
    });
  } catch (error) {
    dispatch({
      type: "LOGIN_FAIL",
      payload: error.response.data.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch({
      type: "LOGOUT_REQ",
    });

    const { data } = await axios.get("api/v1/logout");

    dispatch({
      type: "LOGOUT_SUCC",
    });
  } catch (error) {
    dispatch({
      type: "LOGOUT_FAIL",
      payload: error.response.data.message,
    });
  }
};

export const myProfile = () => async (dispatch) => {
    try {
      dispatch({
        type: "MY_PROFILE_REQ",
      });
  
      const { data } = await axios.get(
        "api/v1/my_profile",
             );
  
      dispatch({
        type: "MY_PROFILE_SUCC",
        payload: data.user, //data is having{success, user}
      });
    } catch (error) {
      dispatch({
        type: "MY_PROFILE_FAIL",
        payload: error.response.data.message,
      });
    }
  };

export const followUnfollowUser = (id) => async (dispatch) => {
    try {
      dispatch({
        type: "FOLLOW_UNFOLLOW_REQ",
      });
  
      const { data } = await axios.post(
        `api/v1/follow_unfollow/${id}`,
             );
  
      dispatch({
        type: "FOLLOW_UNFOLLOW_SUCC",
        payload: data.message, 
      });
    } catch (error) {
      dispatch({
        type: "FOLLOW_UNFOLLOW_FAIL",
        payload: error.response.data.message,
      });
    }
  };