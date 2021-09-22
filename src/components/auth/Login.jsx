import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import { context } from "../context/context";

const Login = () => {
    const loginContext = useContext(context);

    const { email, setEmail, password, setPassword, validator, handleLogin } = loginContext;

    return (
        <div className="login-page-content-area">
            <Helmet>
                <title>Login</title>
            </Helmet>

            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="login-page-wrapper">
                            <div className="or">
                                <span>or</span>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="left-content-area">
                                        <div className="top-content ">
                                            <h4 className="title d-flex justify-content-center">Don't have Account?</h4>
                                        </div>
                                        <div className="bottom-content">
                                            <div className="right-content">
                                                <ul>
                                                    <li className="active">
                                                        <Link to="/register">Register</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="bottom-content">
                                            <div className="right-content">
                                                <ul>
                                                    <li className="active">
                                                        <Link to="/">Forgot your password?</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="right-contnet-area">
                                        <div className="top-content">
                                            <h4 className="title">Account Login</h4>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                                                ut labore et dolore.
                                            </p>
                                        </div>
                                        <div className="bottom-content">
                                            <form onSubmit={(e) => handleLogin(e)} action="/login" method="POST" className="login-form">
                                                <div className="form-element">
                                                    <input
                                                        name="email"
                                                        id="email"
                                                        type="email"
                                                        className="input-field"
                                                        placeholder="Enter Username or Email"
                                                        value={email}
                                                        onChange={(e) => {
                                                            setEmail(e.target.value);
                                                            validator.current.showMessageFor("email");
                                                        }}
                                                    />
                                                    <p className="text-danger mb-4">
                                                        {validator.current.message("email", email, "required|email")}
                                                    </p>
                                                </div>
                                                <div className="form-element">
                                                    <input
                                                        autoComplete="on"
                                                        name="password"
                                                        id="password"
                                                        type="password"
                                                        className="input-field"
                                                        placeholder="Enter Password"
                                                        value={password}
                                                        onChange={(e) => {
                                                            setPassword(e.target.value);
                                                            validator.current.showMessageFor("password");
                                                        }}
                                                    />
                                                    <p className="text-danger mb-4">
                                                        {validator.current.message("password", password, "required|min:4")}
                                                    </p>
                                                </div>
                                                <div className="d-flex justify-content-center">
                                                    <div className="btn-wrapper">
                                                        <button type="submit" className="submit-btn mt-3">
                                                            Login
                                                        </button>
                                                    </div>
                                                    {/* <a href="#" className="link">Forget password?</a> */}
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
