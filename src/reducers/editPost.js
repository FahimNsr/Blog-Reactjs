export const editPostReducer = (state = {}, action) => {
    switch (action.type) {
        case "EDIT_POST":
            return { ...action.payload };

        default:
            return state;
    }
};
