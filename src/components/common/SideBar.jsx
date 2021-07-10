import React from "react";

const SideBar = () => {
    return (
        <div className="cart-sidebar-area" id="cart-sidebar-area">
            <div className="top-content">
                <a href="/cart" className="title h3 ">
                    Shopping cart
                </a>
                <span className="side-sidebar-close-btn">
                    <i className="fas fa-times"></i>
                </span>
            </div>
            <div className="bottom-content">
                <div className="cart-products">
                    <div className="single-product-item">
                        <div className="thumb">
                            <img
                                src="/img/recent-review/01.jpg"
                                alt="recent review"
                            />
                        </div>
                        <div className="content">
                            <h4 className="title">Footwear Dark</h4>
                            <div className="price">
                                <span className="pprice">$350.00</span>{" "}
                                <del className="dprice">$500.00</del>
                            </div>
                            <a href="/" className="remove-cart">
                                Remove
                            </a>
                        </div>
                    </div>
                    <div className="single-product-item">
                        <div className="thumb">
                            <img
                                src="/img/recent-review/02.jpg"
                                alt="recent review"
                            />
                        </div>
                        <div className="content">
                            <h4 className="title">Milo Hoverboard</h4>
                            <div className="price">
                                <span className="pprice">$350.00</span>{" "}
                                <del className="dprice">$500.00</del>
                            </div>
                            <a href="/" className="remove-cart">
                                Remove
                            </a>
                        </div>
                    </div>
                    <div className="btn-wrapper">
                        <a href="/checkout" className="boxed-btn">
                            Checkout
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
