import { toast } from "react-toastify";

import {
    dashPosts,
    newPost,
    editPost,
    updatePost,
    delPost,
} from "../services/dashboardService";

export const getDashPosts = () => {
    return async (dispatch) => {
        const { data } = await dashPosts();
        await dispatch({ type: "DASH_POSTS", payload: data.posts });
    };
};

export const addPost = (post) => {
    return async (dispatch, getState) => {
        const { data, status } = await newPost(post);
        if (status === 201) toast.success("Post created successfully");
        await dispatch({
            type: "NEW_POST",
            payload: [...getState().dashPosts, data.post],
        });
    };
};
export const getEditPost = (postId) => {
    return async (dispatch) => {
        const { data } = await editPost(postId);
        await dispatch({ type: "EDIT_POST", payload: data.post });
    };
};

export const updatePostProcess = (postId, updatedPost) => {
    return async (dispatch, getState) => {
        const posts = [...getState().dashPosts];
        const filteredPosts = posts.filter((post) => (post._id = postId));

        try {
            const { data, status } = await updatePost(postId, updatedPost);
            await dispatch({
                type: "UPDATE_POST",
                payload: [...filteredPosts, data.post],
            });

            if (status === 200) {
                toast.success("Post edited successfully");
            }
        } catch (ex) {
            await dispatch({ type: "UPDATE_COURSE", payload: [...posts] });
        }
    };
};

export const handleDelete = (postId) => {
    return async (dispatch, getState) => {
        const posts = [...getState().dashPosts];
        const filteredPosts = posts.filter((post) => (post._id = postId));

        await dispatch({ type: "DEL_POST", payload: [...filteredPosts] });
        const { status } = await delPost(postId);
        if (status === 200) toast.success("Post deleted successfully");
    };
};
