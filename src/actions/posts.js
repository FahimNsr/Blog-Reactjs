import { getPosts } from "./../services/postService";

export const getAllPosts = () => {
    return async (dispatch) => {
        const { data } = await getPosts();
        await dispatch({ type: "POSTS", payload: data.posts });
    };
};
