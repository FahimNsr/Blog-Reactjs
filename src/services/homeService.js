import http from "./httpService";

import {localapi} from "./config.json";

export const getHome = () => {
    return http.get(`${localapi}/api`);
}

