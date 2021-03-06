import { useEffect } from "react";
import { withRouter } from "react-router-dom";

import { useDispatch } from "react-redux";

import { clearUser } from "../../redux/actions/user";

const Logout = ({ history }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        localStorage.removeItem("token");
        dispatch(clearUser());
        history.push("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return null;
};

export default withRouter(Logout);
