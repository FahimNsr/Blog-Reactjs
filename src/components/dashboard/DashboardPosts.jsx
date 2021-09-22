import React, { useEffect } from "react";

import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getDashPosts, handleDelete } from "../../redux/actions/dashboard";

const DashboardPosts = () => {
    const posts = useSelector((state) => state.dashPosts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDashPosts());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [posts]);

    return (
        <div className="row">
            <Helmet>
                <title>Posts</title>
            </Helmet>
            <div className="m-2">Posts Table</div>

            <div class="table-responsive">
                <table class="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th className="text-center">Image</th>
                            <th className="text-center">Title</th>
                            <th className="text-center">Status</th>
                            <th className="text-center">Creator</th>
                            <th className="text-center">Settings</th>
                            <th className="text-center">Created Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((post) => (
                            <tr key={post._id}>
                                <td className="text-center">
                                    <img
                                        src={`http://localhost:4000/uploads/thumbnails/${post.thumbnail}`}
                                        width="50px"
                                        height="50px"
                                        alt={post.title}
                                    />
                                </td>
                                <td className="text-center">
                                    <Link to={`/posts/${post._id}`}>
                                        {post.title}
                                    </Link>
                                </td>
                                <td className="text-center">
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
                                <td className="text-center">
                                    {post.user.email}
                                </td>

                                <td className="text-center">
                                    <Link
                                        to={`/dashboard/edit-post/${post._id}`}
                                        className="btn btn-primary btn-sm "
                                    >
                                        <i className="fa fa-pencil"></i>
                                    </Link>
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() =>
                                            dispatch(handleDelete(post._id))
                                        }
                                    >
                                        <i className="fa fa-trash-o "></i>
                                    </button>
                                </td>
                                <td className="text-center">
                                    {`${post.createdAt.substr(
                                        0,
                                        10
                                    )} ${post.createdAt.substr(11, 8)}`}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DashboardPosts;
