import React from "react";

import { ToastContainer, Zoom } from "react-toastify";
import LoadingBar from "react-redux-loading-bar";

import "react-toastify/dist/ReactToastify.css";

import Nav from "../common/Nav";
import Footer from "../common/Footer";

const MainLayout = ({children}) => {
    return (
        <div>
            <LoadingBar style={{backgroundColor:"white" , height:"5px"}} />

            <Nav />

            <ToastContainer transition={Zoom} />

            {children}

            <Footer />
        </div>
    );
};

export default MainLayout;
