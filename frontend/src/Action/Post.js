import axios from "axios";

export const postOfFollowings = () => async (dispatch) => {
  try {
    dispatch({
      type: "POST_FOLLOWING_REQ",
    });

    const { data } = await axios.get("api/v1/posts");

    dispatch({
      type: "POST_FOLLOWING_SUCC",
      payload: data.posts, //data is having{success, posts,}
    });
  } catch (error) {
    dispatch({
      type: "POST_FOLLOWING_FAIL",
      payload: error.response.data.message,
    });
  }
};

export const myPosts = () => async (dispatch) => {
  try {
    dispatch({
      type: "MY_POST_REQ",
    });

    const { data } = await axios.get("api/v1/my/posts");

    dispatch({
      type: "MY_POST_SUCC",
      payload: data.posts, //data is having{success, posts,}
    });
  } catch (error) {
    dispatch({
      type: "MY_POST_FAIL",
      payload: error.response.data.message,
    });
  }
};

export const likeUnlike = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "LIKE_UNLIKE_REQ",
    });

    const { data } = await axios.post(`api/v1/posts/${id}`);

    dispatch({
      type: "LIKE_UNLIKE_SUCC",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "LIKE_UNLIKE_FAIL",
      payload: error.response.data.message,
    });
  }
};

export const newPost = (caption, image) => async (dispatch) => {
  try {
    dispatch({
      type: "NEW_POST_REQ",
    });

    const { data } = await axios.post(
      `api/v1/new_post`,
      {
        caption,
        image,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({
      type: "NEW_POST_SUCC",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "NEW_POST_FAIL",
      payload: error.response.data.message,
    });
  }
};

export const updatePost = (id,caption) => async (dispatch) => {
  try {
    dispatch({
      type: "UPDATE_POST_REQ",
    });

    const { data } = await axios.put(
      `api/v1/posts/${id}`,
      {
        caption,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({
      type: "UPDATE_POST_SUCC",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "UPDATE_POST_FAIL",
      payload: error.response.data.message,
    });
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "DELETE_POST_REQ",
    });

    const { data } = await axios.delete(`api/v1/posts/${id}`);

    dispatch({
      type: "DELETE_POST_SUCC",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "DELETE_POST_FAIL",
      payload: error.response.data.message,
    });
  }
};

export const newComment = (id, comment) => async (dispatch) => {
  try {
    dispatch({
      type: "COMMENT_REQ",
    });

    const { data } = await axios.post(
      `api/v1/posts/${id}/comment`,
      {
        comment,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({
      type: "COMMENT_SUCC",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "COMMENT_FAIL",
      payload: error.response.data.message,
    });
  }
};

export const delteComment = (id, commentId) => async (dispatch) => {
  try {
    dispatch({
      type: "DEL_COMMENT_REQ",
    });

    const { data } = await axios.delete(
      `api/v1/posts/${id}/comment`,
      {
        commentId,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({
      type: "DEL_COMMENT_SUCC",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "DEL_COMMENT_FAIL",
      payload: error.response.data.message,
    });
  }
};
