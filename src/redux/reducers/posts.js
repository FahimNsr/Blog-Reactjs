export const postsReducer = (state = [], action) => {
    switch (action.type) {
        case "POSTS":
            return [...action.payload];

        default:
            return state;
    }
};
