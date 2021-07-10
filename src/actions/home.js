import { getHome } from "./../services/homeService";

export const homePosts = () => {
    return async (dispatch) => {
        const { data } = await getHome();
        await dispatch({ type: "HOME", payload: data.posts });
    };
};
