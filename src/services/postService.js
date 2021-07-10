import http from "./httpService";

import {localapi} from "./config.json";

export const getPosts = () => {
    return http.get(`${localapi}/api/posts`);
}

export const singlePost = (postId) => {
    return http.get(`${localapi}/api/posts/${postId}`);
};

