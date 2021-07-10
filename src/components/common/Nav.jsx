import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";

import { useSelector } from "react-redux";

const Nav = ({location}) => {
    const user = useSelector((state) => state.user);
    return (
        <div>
            <div className="support-bar-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="left-content-area">
                                <div className="language-picker">
                                    <div className="default">
                                        <div className="slang-wrap">
                                            <div className="img">
                                                <img
                                                    src="/img/lang-flag/enf.jpg"
                                                    alt="language flag"
                                                />
                                            </div>
                                            <a href="/lang/en" className="name">
                                                English{" "}
                                                <i className="fas fa-angle-down"></i>
                                            </a>
                                        </div>
                                        <ul className="all-lang">
                                            <li>
                                                <div className="slang-wrap">
                                                    <div className="img">
                                                        <img
                                                            src="/img/lang-flag/ger.jpg"
                                                            alt="language flag"
                                                        />
                                                    </div>
                                                    <a
                                                        href="/lang/de"
                                                        className="name"
                                                    >
                                                        Deutsch
                                                    </a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="currency-picker">
                                    <div className="default">
                                        <div className="slang-wrap">
                                            <div className="name ">
                                                USD{" "}
                                                <i className="fas fa-angle-down"></i>
                                            </div>
                                        </div>
                                        <ul className="all-lang">
                                            <li>
                                                <div className="slang-wrap">
                                                    <div className="name">
                                                        EUR
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="right-content-area">
                                <ul>
                                    <li>
                                        <NavLink
                                            to={
                                                localStorage.token
                                                    ? "/profile"
                                                    : "/login"
                                            }
                                            activeClassName="font-weight-bold"
                                        >
                                            {localStorage.token
                                                ? `${user.email} | Profile`
                                                : "Login"}
                                        </NavLink>
                                    </li>

                                    {user.admin ? (
                                        <li>
                                            <Link to="/dashboard">Dashboard</Link>
                                        </li>
                                    ) : (null)}

                                    <li>
                                        <NavLink
                                            to={
                                                localStorage.token
                                                    ? "/logout"
                                                    : "/register"
                                            }
                                            activeClassName="font-weight-bold"
                                        >
                                            {localStorage.token
                                                ? "Logout"
                                                : "Register"}
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <nav className="navbar navbar-area navbar-expand-lg navbar-light home-4">
                <div className="container nav-container">
                    <div className="collapse navbar-collapse" id="mirex">
                        <ul className="navbar-nav">
                            <li
                                className={
                                    location.pathname === "/"
                                        ? "nav-item dropdown active"
                                        : "nav-item dropdown"
                                }
                            >
                                <NavLink className="nav-link pl-0" to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li
                                className={
                                    location.pathname === "/posts"
                                        ? "nav-item dropdown active"
                                        : "nav-item dropdown"
                                }
                            >
                                <NavLink className="nav-link pl-0" to="/posts">
                                    Blog
                                </NavLink>
                            </li>
                            <li
                                className={
                                    location.pathname === "/contact"
                                        ? "nav-item dropdown active"
                                        : "nav-item dropdown"
                                }
                            >
                                <NavLink
                                    className="nav-link pl-0"
                                    to="/contact"
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li
                                className={
                                    location.pathname === "/about"
                                        ? "nav-item dropdown active"
                                        : "nav-item dropdown"
                                }
                            >
                                <NavLink className="nav-link pl-0" to="/about">
                                    About
                                </NavLink>
                            </li>
                        </ul>
                        <div className="right-btn-wrapper ">
                            <ul>
                                <li className="" id="search">
                                    <i className="fas fa-search"></i>{" "}
                                </li>
                                {/* <li className="cart" id="cart">
                                    <i className="fas fa-shopping-basket "></i>
                                    <span className="badge ">2</span>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="body-overlay" id="body-overlay"></div>
            <div className="search-popup" id="search-popup">
                <form
                    action="http://idealbrothers.thesoftking.com/html/bigenza/bigenja/index.html"
                    className="search-popup-form"
                >
                    <div className="form-element">
                        <input
                            type="text"
                            className="input-field"
                            placeholder="Search ....."
                        />
                    </div>
                    <button type="submit" className="submit-btn">
                        <i className="fas fa-search"></i>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default withRouter(Nav);
