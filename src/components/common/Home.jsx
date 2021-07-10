import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { homePosts } from "./../../actions/home.js";

const Home = () => {
    const posts = useSelector((state) => state.home);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(homePosts());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div className="header-area-four">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-7 remove-col-padding">
                            <div className="promotional-banner-area-two right">
                                <div className="img-wrapper promotionsl-bg-1">
                                    <div className="hover">
                                        <div className="inner-wrapper">
                                            <span className="subtitle ">
                                                SPRING - SUMMER 2021
                                            </span>
                                            <h2 className="title ">
                                                New Arrivals
                                            </h2>
                                            <p className="wow fadeInDown">
                                                Stock up on sportswear and
                                                limited edition collections on
                                                our awesome mid-season sale.
                                            </p>
                                            <div className="btn-wrapper wow fadeInDown">
                                                <a
                                                    href="/products"
                                                    className="boxed-btn"
                                                >
                                                    view collections
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 remove-col-padding">
                            <a href="/">
                                <div className="promotional-banner-area-three">
                                    <div className="img-wrapper promotionsl-bg-2">
                                        <div className="hover">
                                            <div className="inner-wrapper">
                                                <h2 className="title ">
                                                    - 50%
                                                </h2>
                                                <span className="subtitle  wow fadeInDown">
                                                    BACK IN STOCK
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
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

            <div className="promotional-area-five">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 remove-col-padding">
                            <div className="promotional-banner-area-six">
                                <div className="img-wrapper">
                                    <img
                                        src="/img/promotional/10.jpg"
                                        alt="promotional "
                                    />
                                    <div className="hover">
                                        <div className="hover-inner">
                                            <div className="top-content wow bounceIn">
                                                <div className="left">
                                                    <h2 className="title">
                                                        50
                                                    </h2>
                                                </div>
                                                <div className="right">
                                                    <span className="top">
                                                        %
                                                    </span>
                                                    <span className="bottom">
                                                        Off
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="bottom-content wow fadeInDown">
                                                <h4 className="title">
                                                    ACCESSORIES
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 remove-col-padding">
                            <div className="promotional-banner-area-six">
                                <div className="img-wrapper">
                                    <img
                                        src="/img/promotional/11.jpg"
                                        alt="promotional "
                                    />
                                    <div className="hover">
                                        <div className="hover-inner">
                                            <div className="top-content wow bounceIn">
                                                <div className="left">
                                                    <h2 className="title">
                                                        70
                                                    </h2>
                                                </div>
                                                <div className="right">
                                                    <span className="top">
                                                        %
                                                    </span>
                                                    <span className="bottom">
                                                        Off
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="bottom-content wow fadeInDown">
                                                <h4 className="title">
                                                    Ladies Bag
                                                </h4>
                                            </div>
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

export default Home;
