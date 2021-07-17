import { toast } from "react-toastify";

import {
    dashPosts,
    newPost,
    editPost,
    updatePost,
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
        const updatedPosts = [...posts];
        const postIndex = updatedPosts.findIndex(
            // eslint-disable-next-line eqeqeq
            (post) => post._id == postId
        );

        let post = updatedPosts[postIndex];

        post = { ...Object.fromEntries(updatedPost) };
        updatedPosts[postIndex] = post;

        try {
            await dispatch({
                type: "UPDATE_POST",
                payload: [...updatedPosts],
            });
            const { data, status } = await updatePost(postId, updatedPost);
            console.log(data);
            if (status === 200) {
                toast.success("Post edited");
            }
        } catch (ex) {
            await dispatch({ type: "UPDATE_COURSE", payload: [...dashPosts] });
        }
    };
};
