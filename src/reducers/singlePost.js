export const singlePostReducer = (state = {}, action) => {
    switch (action.type) {
        case "SINGLE_POST":
            return { ...action.payload };

        default:
            return state;
    }
};
