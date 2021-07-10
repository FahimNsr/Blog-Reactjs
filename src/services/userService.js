import http from "./httpService";

import {localapi} from "./config.json";

export const registerUser = (user) => {
    return http.post(`${localapi}/api/register`, JSON.stringify(user));
};

export const loginUser = (user) => {
    return http.post(`${localapi}/api/login`, JSON.stringify(user));
};
