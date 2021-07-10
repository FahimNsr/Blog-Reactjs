import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import { context } from "../context/context";

const Register = () => {
    const registerContext = useContext(context);

    const {
        email,
        setEmail,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        validator,
        handleRegister,
    } = registerContext;
    return (
        <div className="login-page-content-area">
            <Helmet>
                <title>Register</title>
            </Helmet>

            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="signup-page-wrapper">
                            <div className="or">
                                <span>or</span>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 padding-right-0">
                                    <div className="left-content-area signup-bg">
                                        <div className="img-wrapper">
                                            <Link
                                                to="/login"
                                                className="boxed-btn"
                                            >
                                                Already have account ?
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="right-contnet-area">
                                        <div className="top-content">
                                            <h4 className="title">
                                                Register Today
                                            </h4>
                                            <p>
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit,
                                                sed do eiusmod tempor incididunt
                                                ut labore et dolore.
                                            </p>
                                        </div>
                                        <div className="bottom-content">
                                            <form
                                                onSubmit={(e) =>
                                                    handleRegister(e)
                                                }
                                                action="/register"
                                                method="POST"
                                                className="login-form"
                                            >
                                                <div className="form-element">
                                                    <input
                                                        name="email"
                                                        type="email"
                                                        className="input-field"
                                                        placeholder="Enter your email"
                                                        value={email}
                                                        onChange={(e) => {
                                                            setEmail(
                                                                e.target.value
                                                            );
                                                            validator.current.showMessageFor(
                                                                "email"
                                                            );
                                                        }}
                                                    />
                                                    <p className="text-danger mb-4">
                                                        {validator.current.message(
                                                            "email",
                                                            email,
                                                            "required|email"
                                                        )}
                                                    </p>
                                                </div>
                                                <div className="form-element">
                                                    <input
                                                        autoComplete="on"
                                                        name="password"
                                                        type="password"
                                                        className="input-field"
                                                        placeholder="Enter password"
                                                        value={password}
                                                        onChange={(e) => {
                                                            setPassword(
                                                                e.target.value
                                                            );
                                                            validator.current.showMessageFor(
                                                                "password"
                                                            );
                                                        }}
                                                    />
                                                    <p className="text-danger mb-4">
                                                        {validator.current.message(
                                                            "password",
                                                            password,
                                                            "required|min:4"
                                                        )}
                                                    </p>
                                                </div>
                                                <div className="form-element">
                                                    <input
                                                        autoComplete="on"
                                                        name="confirmPassword"
                                                        type="password"
                                                        className="input-field"
                                                        placeholder="Enter Password again"
                                                        value={confirmPassword}
                                                        onChange={(e) =>
                                                            setConfirmPassword(
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                    <p className="text-danger mb-4">
                                                        {validator.current.message(
                                                            "confirmPassword",
                                                            confirmPassword,
                                                            "required"
                                                        )}

                                                        {password !==
                                                            confirmPassword &&
                                                        confirmPassword !== ""
                                                            ? "Passwords do not match"
                                                            : ""}
                                                    </p>
                                                </div>
                                                <div className="btn-wrapper center pb-3">
                                                    <button
                                                        type="submit"
                                                        className="submit-btn"
                                                    >
                                                        Register
                                                    </button>
                                                </div>
                                                {/* <div className="block-link">
                                            <a href="#" className="facebook">sign in with facebook</a>
                                            <a href="#" className="google">sign in with Google+</a>
                                        </div> */}
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
export default Register;
