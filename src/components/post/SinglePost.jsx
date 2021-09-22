import React, { useEffect } from "react";

import { Helmet } from "react-helmet";
import { useSelector, useDispatch } from "react-redux";

import { getSinglePost } from "../../redux/actions/singlePost";

const SinglePost = ({ match }) => {
    const post = useSelector((state) => state.singlePost);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSinglePost(match.params.id));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <Helmet>
                <title>{post.title}</title>
            </Helmet>
            <section className="blog-details-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="single-blog-post">
                                <div className="meta-time">
                                    <span className="date">
                                        {post.createdAt.substr(8, 2)}
                                    </span>
                                    <span className="month">
                                        {post.createdAt.substr(5, 2)}
                                    </span>
                                </div>
                                <div className="details-container">
                                    <div className="meta-tags">
                                        <ul>
                                            <li>
                                                <i className="fas fa-comments"></i>{" "}
                                                33 Comments
                                            </li>
                                            <li>
                                                <i className="fas fa-share"></i>{" "}
                                                50 Shares
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="post-body">
                                        <h3 className="title">{post.title} </h3>
                                        <p>{post.body} </p>
                                        <div className="post-bottom-content">
                                            <div className="top-content">
                                                <div className="left-content">
                                                    <h4 className="title">
                                                        Releted Tags
                                                    </h4>
                                                </div>
                                                <div className="right-content">
                                                    <h4 className="title">
                                                        Social Share
                                                    </h4>
                                                </div>
                                            </div>
                                            <div className="bottom-content">
                                                <div className="left-content">
                                                    <ul>
                                                        <li>
                                                            <a href="/">
                                                                organic
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/">
                                                                Foods
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/">
                                                                tasty
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="right-content">
                                                    <h4 className="title">
                                                        Social Share
                                                    </h4>
                                                    <ul>
                                                        <li>
                                                            <a href="/">
                                                                <i className="fab fa-facebook-f"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/">
                                                                <i className="fab fa-twitter"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/">
                                                                <i className="fab fa-typo3"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/">
                                                                <i className="fab fa-staylinked"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/">
                                                                <i className="fab fa-tumblr"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-post-separator"></div>
                                    <div className="comments-area">
                                        <h3 className="title">Comments</h3>
                                        <div className="single-comment-item margin-bottom-40">
                                            <div className="thumb">
                                                <img
                                                    src="/img/comments/01.png"
                                                    alt="commente avatar"
                                                />
                                            </div>
                                            <div className="content">
                                                <span className="meta-date">
                                                    19th May 2018
                                                </span>
                                                <h4 className="author-name">
                                                    Rosalina Pong
                                                </h4>
                                                <p>
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipisicing
                                                    elit, sed do eiusmod tempor
                                                    incididunt ut labore et
                                                    dolore magna aliqua. Ut enim
                                                    ad minim veniam, quis
                                                    nostrud exercitation
                                                    ullamco.
                                                </p>
                                            </div>
                                            <a href="/" className="reply-btn">
                                                <i className="fas fa-reply"></i>{" "}
                                                Reply
                                            </a>
                                        </div>
                                        <div className="single-comment-item">
                                            <div className="thumb">
                                                <img
                                                    src="/img/comments/02.png"
                                                    alt="commente avatar"
                                                />
                                            </div>
                                            <div className="content">
                                                <span className="meta-date">
                                                    19th May 2018
                                                </span>
                                                <h4 className="author-name">
                                                    Arista Williamson
                                                </h4>
                                                <p>
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipisicing
                                                    elit, sed do eiusmod tempor
                                                    incididunt ut labore et
                                                    dolore magna aliqua. Ut enim
                                                    ad minim veniam, quis
                                                    nostrud exercitation
                                                    ullamco.
                                                </p>
                                            </div>
                                            <a href="/" className="reply-btn">
                                                <i className="fas fa-reply"></i>{" "}
                                                Reply
                                            </a>
                                        </div>
                                    </div>
                                    <div className="single-blog-page-separator"></div>
                                    <div className="comments-form-area">
                                        <h3 className="title">Post Comment</h3>
                                        <div className="comment-form-wrapper">
                                            <form action="http://idealbrothers.thesoftking.com/html/bigenza/bigenja/blog-details.html">
                                                <div className="form-element margin-bottom-15">
                                                    <div className="has-icon textarea">
                                                        <textarea
                                                            rows="20"
                                                            cols="8"
                                                            placeholder="Type your comments...."
                                                            className="input-field borderd textarea"
                                                        ></textarea>
                                                        <div className="the-icon">
                                                            <i className="fas fa-pencil-alt"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-element margin-bottom-20">
                                                    <div className="has-icon ">
                                                        <input
                                                            type="text"
                                                            className="input-field borderd"
                                                            placeholder="Type your name...."
                                                        />
                                                        <div className="the-icon">
                                                            <i className="fas fa-user"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-element margin-bottom-20">
                                                    <div className="has-icon ">
                                                        <input
                                                            type="email"
                                                            className="input-field borderd"
                                                            placeholder="Type your email...."
                                                        />
                                                        <div className="the-icon">
                                                            <i className="fas fa-envelope"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-element ">
                                                    <div className="has-icon ">
                                                        <input
                                                            type="url"
                                                            className="input-field borderd"
                                                            placeholder="Type your website...."
                                                        />
                                                        <div className="the-icon">
                                                            <i className="fas fa-globe"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-element margin-top-40">
                                                    <input
                                                        type="submit"
                                                        value="post comment"
                                                        className="submit-btn btn-rounded"
                                                    />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <aside className="sidebar">
                                <div className="widget-area instagram">
                                    <div className="widget-title">
                                        <h4>Instagram</h4>
                                    </div>
                                    <div className="widget-body">
                                        <ul className="instagram-feed">
                                            <li>
                                                <a href="/">
                                                    <img
                                                        src="/img/instagram/01.jpg"
                                                        alt="instagram images"
                                                    />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <img
                                                        src="/img/instagram/02.jpg"
                                                        alt="instagram images"
                                                    />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <img
                                                        src="/img/instagram/03.jpg"
                                                        alt="instagram images"
                                                    />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <img
                                                        src="/img/instagram/04.jpg"
                                                        alt="instagram images"
                                                    />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <img
                                                        src="/img/instagram/05.jpg"
                                                        alt="instagram images"
                                                    />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <img
                                                        src="/img/instagram/06.jpg"
                                                        alt="instagram images"
                                                    />
                                                </a>
                                            </li>
                                            <li className="margin-bottom-0">
                                                <a href="/">
                                                    <img
                                                        src="/img/instagram/07.jpg"
                                                        alt="instagram images"
                                                    />
                                                </a>
                                            </li>
                                            <li className="margin-bottom-0">
                                                <a href="/">
                                                    <img
                                                        src="/img/instagram/08.jpg"
                                                        alt="instagram images"
                                                    />
                                                </a>
                                            </li>
                                            <li className="margin-bottom-0">
                                                <a href="/">
                                                    <img
                                                        src="/img/instagram/09.jpg"
                                                        alt="instagram images"
                                                    />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="sidebar-separator"></div>
                                <div className="widget-area social">
                                    <div className="widget-title">
                                        <h4>Follow Us</h4>
                                    </div>
                                    <div className="widget-body">
                                        <ul className="social-links">
                                            <li>
                                                <a href="/" className="twitter">
                                                    <i className="fab fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="/"
                                                    className="facebook"
                                                >
                                                    <i className="fab fa-facebook-f"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="/"
                                                    className="pinterest"
                                                >
                                                    <i className="fab fa-pinterest-p"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="/"
                                                    className="instagram"
                                                >
                                                    <i className="fab fa-instagram"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="/"
                                                    className="wordpress"
                                                >
                                                    <i className="fab fa-wordpress"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="sidebar-separator"></div>
                                <div className="widget-area category">
                                    <div className="widget-title">
                                        <h4>Categories</h4>
                                    </div>
                                    <div className="widget-body">
                                        <ul className="categories">
                                            <li>
                                                <a href="/">
                                                    Lifestyle
                                                    <span className="count">
                                                        (05)
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    Travel
                                                    <span className="count">
                                                        (34)
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    Fashion
                                                    <span className="count">
                                                        (89)
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    Music
                                                    <span className="count">
                                                        (96)
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    Branding
                                                    <span className="count">
                                                        (78)
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="sidebar-separator category"></div>
                                <div className="widget-area latest-post">
                                    <div className="widget-title">
                                        <h4>Latest Posts</h4>
                                    </div>
                                    <div className="widget-body">
                                        <div className="single-latest-post">
                                            <div className="media">
                                                <img
                                                    className="mr-3"
                                                    src="/img/latest-post/01.jpg"
                                                    alt="latest blog post"
                                                />
                                                <div className="media-body">
                                                    <a href="/">
                                                        <h5 className="mt-0">
                                                            Alonso Kelina Falao
                                                            Asiano Pero
                                                        </h5>
                                                    </a>
                                                    <span className="meta-time">
                                                        <i className="far fa-clock"></i>{" "}
                                                        6 Hours ago
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="single-latest-post">
                                            <div className="media">
                                                <img
                                                    className="mr-3"
                                                    src="/img/latest-post/02.jpg"
                                                    alt="latest blog post"
                                                />
                                                <div className="media-body">
                                                    <a href="/">
                                                        <h5 className="mt-0">
                                                            It is a long fact
                                                            that a reader
                                                        </h5>
                                                    </a>
                                                    <span className="meta-time">
                                                        <i className="far fa-clock"></i>{" "}
                                                        7 Hours ago
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="single-latest-post">
                                            <div className="media">
                                                <img
                                                    className="mr-3"
                                                    src="/img/latest-post/03.jpg"
                                                    alt="latest blog post"
                                                />
                                                <div className="media-body">
                                                    <a href="/">
                                                        <h5 className="mt-0">
                                                            Many desktop
                                                            packages and web
                                                        </h5>
                                                    </a>
                                                    <span className="meta-time">
                                                        <i className="far fa-clock"></i>{" "}
                                                        9 Hours ago
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="single-latest-post">
                                            <div className="media">
                                                <img
                                                    className="mr-3"
                                                    src="/img/latest-post/04.jpg"
                                                    alt="latest blog post"
                                                />
                                                <div className="media-body">
                                                    <a href="/">
                                                        <h5 className="mt-0">
                                                            Various have evolved
                                                            over the years
                                                        </h5>
                                                    </a>
                                                    <span className="meta-time">
                                                        <i className="far fa-clock"></i>{" "}
                                                        10 Hours ago
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="single-latest-post">
                                            <div className="media">
                                                <img
                                                    className="mr-3"
                                                    src="/img/latest-post/05.jpg"
                                                    alt="latest blog post"
                                                />
                                                <div className="media-body">
                                                    <a href="/">
                                                        <h5 className="mt-0">
                                                            Photo booth anim
                                                            wolf moon.
                                                        </h5>
                                                    </a>
                                                    <span className="meta-time">
                                                        <i className="far fa-clock"></i>{" "}
                                                        13 Hours ago
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="sidebar-separator latest-post"></div>

                                <div className="widget-area tags">
                                    <div className="widget-title">
                                        <h4>Tags</h4>
                                    </div>
                                    <div className="widget-body">
                                        <ul className="tags-list">
                                            <li>
                                                <a href="/">Travel</a>
                                            </li>
                                            <li>
                                                <a href="/">Lifestyle</a>
                                            </li>
                                            <li>
                                                <a href="/">Photo </a>
                                            </li>
                                            <li>
                                                <a href="/">Adventures </a>
                                            </li>
                                            <li>
                                                <a href="/">Musician </a>
                                            </li>
                                            <li>
                                                <a href="/">08 </a>
                                            </li>
                                            <li>
                                                <a href="/">Travel </a>
                                            </li>
                                            <li>
                                                <a href="/">Lifestyle </a>
                                            </li>
                                            <li>
                                                <a href="/">Photo </a>
                                            </li>
                                            <li>
                                                <a href="/">Adventures </a>
                                            </li>
                                            <li>
                                                <a href="/">Musician </a>
                                            </li>
                                            <li>
                                                <a href="/">08 </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SinglePost;
