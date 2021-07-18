import http from "./httpService";

import {localapi} from "./config.json";

export const dashPosts = () => {
    return http.get(`${localapi}/api/dashboard/posts`);
}

export const newPost = (post) => {
    return http.post(`${localapi}/api/dashboard/add-post`, post);
};

export const editPost = (postId) => {
    return http.get(`${localapi}/api/dashboard/edit-post/${postId}`);
};

export const updatePost = (postId, upPost) => {
    return http.put(`${localapi}/api/dashboard/edit-post/${postId}`, upPost);
};

export const delPost = (postId) => {
    return http.delete(`${localapi}/api/dashboard/del-post/${postId}`);
};

