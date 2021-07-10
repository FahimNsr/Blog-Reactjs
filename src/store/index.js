import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { loadingBarMiddleware } from "react-redux-loading-bar";

import { reducers } from "../reducers";

// import { getAllPosts } from "../actions/posts";

export const store = createStore(
    reducers,
    compose(
        applyMiddleware(thunk, loadingBarMiddleware()),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

//
// store.dispatch(getAllPosts())

// subscribe
store.subscribe(() => console.log(store.getState()));
