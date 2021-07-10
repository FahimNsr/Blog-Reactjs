/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import React from "react";

import { NavLink } from "react-router-dom";

const SideBar = () => {
    return (
        <aside>
            <div id="sidebar" className="nav-collapse ">
                <ul className="sidebar-menu" id="nav-accordion">
                    <li>
                        <NavLink to="/dashboard">
                            <i className="fa fa-dashboard"></i>
                            <span>Dashboard</span>
                        </NavLink>
                    </li>

                    <li >
                        <NavLink to="/dashboard/posts">
                            <i className="fa fa-laptop"></i>
                            <span>Posts</span>
                        </NavLink>
                    </li>
                    <li >
                        <NavLink to="/dashboard/add-post">
                            <i className="fa fa-laptop"></i>
                            <span>New Post</span>
                        </NavLink>
                    </li>

                    <li className="sub-menu">
                        <a href="javascript:;">
                            <i className="fa fa-sitemap"></i>
                            <span>Multi level Menu</span>
                        </a>
                        <ul className="sub">
                            <li>
                                <a href="javascript:;">Menu Item 1</a>
                            </li>
                            <li className="sub-menu">
                                <a href="boxed_page.html">Menu Item 2</a>
                                <ul className="sub">
                                    <li>
                                        <a href="javascript:;">Menu Item 2.1</a>
                                    </li>
                                    <li className="sub-menu">
                                        <a href="javascript:;">Menu Item 3</a>
                                        <ul className="sub">
                                            <li>
                                                <a href="javascript:;">
                                                    Menu Item 3.1
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">
                                                    Menu Item 3.2
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default SideBar;
