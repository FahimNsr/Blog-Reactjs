import React, { useState, useRef } from "react";
import { withRouter } from "react-router";
import { useDispatch } from "react-redux";
import SimpleReactValidator from "simple-react-validator";
import { toast } from "react-toastify";
import jwt from "jsonwebtoken";
import { showLoading, hideLoading } from "react-redux-loading-bar";

import { context } from "./context";
import { registerUser, loginUser } from "../../services/userService";
import { addUser } from "./../../actions/user";

const UserContext = ({ children, history }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const resetStates = () => {
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };
    const [, forceUpdate] = useState();

    const validator = useRef(new SimpleReactValidator());

    const dispatch = useDispatch();

    const handleRegister = async (event) => {
        event.preventDefault();
        const user = { email, password, confirmPassword };

        try {
            if (validator.current.allValid()) {
                dispatch(showLoading())
                const { status } = await registerUser(user);
                if (status === 201) {
                    toast.success("Registration was seccessful");
                    dispatch(hideLoading())
                    history.push("/login");
                }
            } else {
                validator.current.showMessages();
                forceUpdate(1);
            }
        } catch (ex) {
            toast.error("Please check the entered data");
            dispatch(hideLoading())

            console.log(ex);
        }
    };

    const handleLogin = async (event) => {
        event.preventDefault();
        const user = { email, password };

        try {
            if (validator.current.allValid()) {
                dispatch(showLoading())
                const { status, data } = await loginUser(user);
                if (status === 200) {
                    toast.success("Login was seccessful");
                    localStorage.setItem("token", data.token);
                    dispatch(
                        addUser(
                            jwt.decode(data.token, { complete: true }).payload
                                .user
                        )
                    );
                    dispatch(hideLoading())
                    history.replace("/");
                    resetStates();
                }
            } else {
                validator.current.showMessages();
                forceUpdate(1);
            }
        } catch (ex) {
            toast.error("Please check the entered data");
            dispatch(hideLoading())
            console.log(ex);
        }
    };

    return (
        <context.Provider
            value={{
                email,
                setEmail,
                password,
                setPassword,
                confirmPassword,
                setConfirmPassword,
                validator,
                handleLogin,
                handleRegister,
            }}
        >
            {children}
        </context.Provider>
    );
};

export default withRouter(UserContext);
