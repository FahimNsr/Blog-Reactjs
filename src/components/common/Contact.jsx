import React from "react";
import { Helmet } from "react-helmet";

const Contact = () => {
    return (
        <div>
            <Helmet>
                <title>Contact</title>
            </Helmet>

            <div className="contact-info-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-6">
                            <div className="left-content-area">
                                <div className="inner-section-title">
                                    <span className="subtitle">Contact us</span>
                                    <h2 className="title">For Get Updates</h2>
                                </div>
                                <ul>
                                    <li>
                                        <div className="single-contact-info-item">
                                            <div className="icon">
                                                <i className="fas fa-phone"></i>
                                            </div>
                                            <div className="content">
                                                <span className="subtitle">
                                                    Don't Hesitate To Contact
                                                    Us!
                                                </span>
                                                <span className="title">
                                                    + (123) 1800-567-8990
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="single-contact-info-item">
                                            <div className="icon">
                                                <i className="fas fa-clock"></i>
                                            </div>
                                            <div className="content">
                                                <span className="subtitle">
                                                    Mon - Fri: 9:00 - 19:00 /{" "}
                                                    <span className="base-color">
                                                        Closed on Friday
                                                    </span>
                                                </span>
                                                <span className="title">
                                                    Working time
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="single-contact-info-item">
                                            <div className="icon">
                                                <i className="fas fa-map-marker-alt"></i>
                                            </div>
                                            <div className="content">
                                                <span className="subtitle">
                                                    New York, 10 Hudson Yards
                                                </span>
                                                <span className="title">
                                                    Company Headquarters
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="single-contact-info-item">
                                            <div className="icon">
                                                <i className="fas fa-envelope"></i>
                                            </div>
                                            <div className="content">
                                                <span className="subtitle">
                                                    Get In Touch With Us
                                                </span>
                                                <span className="title">
                                                    info@bigenza.com
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-6">
                            <div className="map-wrapper">
                                <div id="map"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="contact-form-area gray-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-title-two">
                                <span className="subtitle">on your mind</span>
                                <h2 className="title">Get In Touch</h2>
                            </div>
                        </div>
                    </div>
                    <form
                        action="http://idealbrothers.thesoftking.com/html/bigenza/bigenja/contact.html"
                        className="contact_form"
                        id="get_in_touch"
                    >
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="form-element margin-bottom-20">
                                    <input
                                        type="text"
                                        id="first_name"
                                        className="input-field"
                                        placeholder="Enter first name"
                                    />
                                </div>
                                <div className="form-element margin-bottom-20">
                                    <input
                                        type="text"
                                        id="last_name"
                                        className="input-field"
                                        placeholder="Enter last name"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-element margin-bottom-20">
                                    <input
                                        type="text"
                                        id="email"
                                        className="input-field"
                                        placeholder="Enter email address"
                                    />
                                </div>
                                <div className="form-element margin-bottom-20">
                                    <input
                                        type="text"
                                        id="subject"
                                        className="input-field"
                                        placeholder="Enter subject"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-element textarea margin-bottom-20">
                                    <textarea
                                        id="message"
                                        cols="30"
                                        rows="10"
                                        placeholder="Enter message"
                                        className="input-field textarea"
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="btn-wrapper">
                            <button type="submit" className="submit-btn">
                                Submit now
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Contact;
