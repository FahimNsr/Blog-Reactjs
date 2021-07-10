import React from "react";

const Footer = (props) => {
    return (
        <div>
            <footer className="footer-arae-one">
                <div className="footer-top-one blue-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="footer-widget about">
                                    <div className="widget-body">
                                        <ul className="contact-info-list">
                                            <li>
                                                <div className="single-contact-info">
                                                    <div className="icon">
                                                        <i className="fas fa-map-marker-alt"></i>
                                                    </div>
                                                    <div className="content">
                                                        <span className="details">
                                                            198 West 21th
                                                            Street, Suite 721,
                                                            New York NY 10010
                                                        </span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="single-contact-info">
                                                    <div className="icon">
                                                        <i className="fas fa-envelope"></i>
                                                    </div>
                                                    <div className="content">
                                                        <span className="details">
                                                            youremail@yourdomain.com
                                                        </span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="single-contact-info">
                                                    <div className="icon">
                                                        <i className="fas fa-phone"></i>
                                                    </div>
                                                    <div className="content">
                                                        <span className="details">
                                                            +88 (0) 101 0000 000
                                                        </span>
                                                        <span className="details">
                                                            +99 (989) 101 0000
                                                            000
                                                        </span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="footer-widget">
                                    <div className="widget-title">
                                        <h4 className="title">
                                            Shopping Guide
                                        </h4>
                                    </div>
                                    <div className="widget-body">
                                        <ul className="page-list">
                                            <li>
                                                <a href="/blog">-- Blog</a>
                                            </li>
                                            <li>
                                                <a href="/faq">-- Faq</a>
                                            </li>
                                            <li>
                                                <a href="/privacy_policy">
                                                    -- Privacy-Policy
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="footer-widget">
                                    <div className="widget-title">
                                        <h4 className="title">Style Adviser</h4>
                                    </div>
                                    <div className="widget-body">
                                        <ul className="page-list">
                                            <li>
                                                <a href="signup.html">
                                                    -- Your Account
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">-- Order History</a>
                                            </li>
                                            <li>
                                                <a href="track-orders.html">
                                                    -- Order Tracking
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="footer-widget">
                                    <div className="widget-title">
                                        <h4 className="title">Information</h4>
                                    </div>
                                    <div className="widget-body">
                                        <ul className="page-list">
                                            <li>
                                                <a href="/">-- Sitemap</a>
                                            </li>
                                            <li>
                                                <a href="/about">-- About us</a>
                                            </li>
                                            <li>
                                                <a href="/contact">
                                                    -- Contact Us
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-area blue-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="copyright-inner">
                                    <div className="left-content-area">
                                        <span className="copyright-text">
                                            Copyright by@Fahim Nasirzadeh - 2021
                                        </span>
                                    </div>
                                    <div className="right-content-area">
                                        <ul className="payment-logo">
                                            <li>
                                                <img
                                                    src="/img/payment-logo/01.png"
                                                    alt="payment logo"
                                                />
                                            </li>
                                            <li>
                                                <img
                                                    src="/img/payment-logo/02.png"
                                                    alt="payment logo"
                                                />
                                            </li>
                                            <li>
                                                <img
                                                    src="/img/payment-logo/03.png"
                                                    alt="payment logo"
                                                />
                                            </li>
                                            <li>
                                                <img
                                                    src="/img/payment-logo/04.png"
                                                    alt="payment logo"
                                                />
                                            </li>
                                            <li>
                                                <img
                                                    src="/img/payment-logo/05.png"
                                                    alt="payment logo"
                                                />
                                            </li>
                                            <li>
                                                <img
                                                    src="/img/payment-logo/06.png"
                                                    alt="payment logo"
                                                />
                                            </li>
                                            <li>
                                                <img
                                                    src="/img/payment-logo/07.png"
                                                    alt="payment logo"
                                                />
                                            </li>
                                            <li>
                                                <img
                                                    src="/img/payment-logo/08.png"
                                                    alt="payment logo"
                                                />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
