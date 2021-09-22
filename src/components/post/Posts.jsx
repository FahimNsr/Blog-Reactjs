import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllPosts } from "./../../redux/actions/posts";

const Post = () => {
    const posts = useSelector((state) => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPosts());
    });

    return (
        <div>
            <Helmet>
                <title>Blog</title>
            </Helmet>
            <section className="blog-page-content-area bg-transparent ">
                <div className="container">
                    <div className="row">
                        {posts.map((post) => (
                            <div key={post._id} className="col-lg-4 col-md-6">
                                <div className="single-our-story-item">
                                    <div className="thumb">
                                        <Link to={`/posts/${post._id}`}>
                                            <img
                                                src={`http://localhost:4000/uploads/thumbnails/${post.thumbnail}`}
                                                alt="our story"
                                            />
                                        </Link>
                                    </div>
                                    <div className="conent">
                                        <span className="time">
                                            {post.createdAt
                                                .toString()
                                                .substr(0, 10)}
                                        </span>
                                        <Link to={`/posts/${post._id}`}>
                                            <h4 className="title">
                                                {post.title}
                                            </h4>
                                        </Link>
                                        <p>{post.body.substring(0, 128)}...</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Post;
