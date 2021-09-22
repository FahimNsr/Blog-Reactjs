import { combineReducers } from "redux";
import { loadingBarReducer } from "react-redux-loading-bar";

import { postsReducer } from "./posts";
import { singlePostReducer } from "./singlePost";
import { userReducer } from "./user";

import { dashPostsReducer } from "./dashboard";
import { editPostReducer } from "./editPost";

export const reducers = combineReducers({
    posts: postsReducer,
    singlePost: singlePostReducer,
    user: userReducer,
    loadingBar: loadingBarReducer,
    dashPosts: dashPostsReducer,
    editPost: editPostReducer,
});
