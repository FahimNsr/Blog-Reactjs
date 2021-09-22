export const dashPostsReducer = (state = [], action) => {
    switch (action.type) {
        case "DASH_POSTS":
            return [...action.payload];
        case "NEW_POST":
            return [...action.payload];
        case "UPDATE_POST":
            return [...action.payload];
        case "DEL_POST":
            return [...action.payload];

        default:
            return state;
    }
};
