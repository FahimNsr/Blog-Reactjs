import React, { useEffect } from "react";

import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getDashPosts } from "../../actions/dashboard";

const DashboardPosts = () => {
    const posts = useSelector((state) => state.dashPosts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDashPosts());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="row">
            <Helmet>
                <title>Posts</title>
            </Helmet>

            <div className="col">
                <section className="card">
                    <header className="card-header">
                        Posts Table
                        <Link
                            to="/dashboard/add-post"
                            className="btn btn-success fa fa-plus pull-right "
                        >
                            New Post
                        </Link>
                    </header>
                    <div className="card-body">
                        <div className="adv-table">
                            <table
                                className="display table table-bordered table-striped"
                                id="dynamic-table"
                            >
                                <thead>
                                    <tr>
                                        <th className="text-center">Image</th>
                                        <th className="text-center">Title</th>
                                        <th className="text-center">Status</th>
                                        <th className="text-center">Creator</th>
                                        <th className="text-center">
                                            Settings
                                        </th>
                                        <th className="text-center">
                                            Created Time
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {posts.map((post) => (
                                        <tr
                                            key={post._id}
                                            className="text-center"
                                        >
                                            <td className="center">
                                                <img
                                                    src={`http://localhost:4000/uploads/thumbnails/${post.thumbnail}`}
                                                    width="50px"
                                                    height="50px"
                                                    alt={post.title}
                                                />
                                            </td>
                                            <td>
                                                <a href={`/post/${post._id}`}>
                                                    {post.title}
                                                </a>
                                            </td>
                                            <td>
                                                <span
                                                    className={
                                                        post.status === "public"
                                                            ? "badge badge-success "
                                                            : "badge badge-warning"
                                                    }
                                                >
                                                    {post.status}
                                                </span>
                                            </td>
                                            <td>{post.user.email}</td>

                                            <td>
                                                <Link
                                                    to={`/dashboard/edit-post/${post._id}`}
                                                    className="btn btn-primary btn-sm "
                                                >
                                                    <i className="fa fa-pencil"></i>
                                                </Link>
                                                <Link
                                                    to={`/dashboard/del-post/${post._id}`}
                                                    className="btn btn-danger btn-sm"
                                                >
                                                    <i className="fa fa-trash-o "></i>
                                                </Link>
                                            </td>
                                            <td>
                                                {`${post.createdAt.substr(
                                                    0,
                                                    10
                                                )} ${post.createdAt.substr(
                                                    11,
                                                    8
                                                )}`}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th className="text-center">Image</th>
                                        <th className="text-center">Title</th>
                                        <th className="text-center">Status</th>
                                        <th className="text-center">Creator</th>
                                        <th className="text-center">
                                            Settings
                                        </th>
                                        <th className="text-center">
                                            Created Time
                                        </th>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default DashboardPosts;
