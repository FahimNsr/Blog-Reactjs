import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import jwt from "jsonwebtoken";
import { isEmpty } from "lodash";

import { addUser } from "./actions/user";
import { clearUser } from "./actions/user";

import MainLayout from "./components/layouts/MainLayout";
import Error404 from "./components/common/Error404";
import Home from "./components/common/Home";
import About from "./components/common/About";
import Contact from "./components/common/Contact";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Logout from "./components/auth/Logout";
import Posts from "./components/post/Posts";
import SinglePost from "./components/post/SinglePost";
import UserContext from "./components/context/UserContext";

import DashboardLayout from "./components/layouts/DashboardLayout";
import Dashboard from "./components/dashboard/Dashboard";
import DashboardPosts from "./components/dashboard/DashboardPosts";
import AddPost from "./components/dashboard/AddPost";
import EditPost from "./components/dashboard/EditPost";

const App = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            const decodedToken = jwt.decode(token, { complete: true });
            const dateNow = Date.now() / 1000;

            if (decodedToken.payload.exp < dateNow) {
                localStorage.removeItem("token");
                dispatch(clearUser());
            } else dispatch(addUser(decodedToken.payload.user));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <BrowserRouter>
            <Switch>
                <Route path={["/dashboard"]}>
                    <DashboardLayout>
                        <Route
                            path="/dashboard"
                            exact
                            render={() =>
                                !isEmpty(user) && user.admin ? (
                                    <Dashboard />
                                ) : (
                                    <Redirect to="/" />
                                )
                            }
                        />
                        <Route
                            path="/dashboard/posts"
                            exact
                            component={DashboardPosts}
                        />
                        <Route
                            path="/dashboard/add-post"
                            exact
                            component={AddPost}
                        />
                        <Route
                            path="/dashboard/edit-post/:id"
                            exact
                            component={EditPost}
                        />
                    </DashboardLayout>
                </Route>
                <Route path={["/"]}>
                    <MainLayout>
                        <Switch>
                            <Route
                                path="/register"
                                render={() =>
                                    isEmpty(user) ? (
                                        <UserContext>
                                            <Register />
                                        </UserContext>
                                    ) : (
                                        <Redirect to="/" />
                                    )
                                }
                            />
                            <Route
                                path="/login"
                                render={() =>
                                    isEmpty(user) ? (
                                        <UserContext>
                                            <Login />
                                        </UserContext>
                                    ) : (
                                        <Redirect to="/" />
                                    )
                                }
                            />
                            <Route
                                path="/logout"
                                render={() =>
                                    isEmpty(user) ? (
                                        <Redirect to="/" />
                                    ) : (
                                        <Logout />
                                    )
                                }
                            />
                            <Route path="/posts/:id" component={SinglePost} />
                            <Route path="/posts" exact component={Posts} />
                            <Route path="/contact" component={Contact} />
                            <Route path="/about" component={About} />
                            <Route path="/" exact component={Home} />
                            <Route path="*" exact component={Error404} />
                        </Switch>
                    </MainLayout>
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default App;
