import * as api from "../api/api.js"
import {
  GETPOSTS,
  CREATEPOST,
  UPDATEPOST,
  DELETEPOST,
  LIKEPOST,
} from "../constactions/typesActions";

//Action Creators
export const getPosts = () => async (dispatch) => {
  try {
    const data = await api.fetchPosts();
    await dispatch({ type: GETPOSTS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    await api.createPost(post);
    const data = await api.fetchPosts() 
    await dispatch({
      type: CREATEPOST,
      payload: data
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const data = await api.updatePost(id, post);
    dispatch({ type: UPDATEPOST, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: DELETEPOST, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const data = await api.likePost(id);
    dispatch({ type: LIKEPOST, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
