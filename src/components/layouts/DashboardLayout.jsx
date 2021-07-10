import React from "react";

import { ToastContainer, Zoom } from "react-toastify";
import LoadingBar from "react-redux-loading-bar";

import "react-toastify/dist/ReactToastify.css";

import Header from "../dashboard/Header";
import SideBar from "../dashboard/SideBar";
import Footer from "../dashboard/Footer";

const MainLayout = ({children}) => {
    return (
        <section id="container">
            <LoadingBar style={{ backgroundColor: "white" }} />

            <Header />
            <SideBar />

            <ToastContainer transition={Zoom} />
            <section id="main-content">
                <section class="wrapper site-min-height">{children}</section>
            </section>

            <Footer />
        </section>
    );
};

export default MainLayout;
