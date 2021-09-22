import { singlePost } from "../../services/postService";

export const getSinglePost = postId => {
    return async (dispatch) => {
        const { data } = await singlePost(postId);
        await dispatch({ type: "SINGLE_POST", payload: data.post });
    };
};
