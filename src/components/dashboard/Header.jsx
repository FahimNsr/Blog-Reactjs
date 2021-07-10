/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

const Header = (props) => {
    // const { pathname } = props.location;
    const user = useSelector((state) => state.user);

    return (
        <header className="header white-bg">
        <div className="sidebar-toggle-box">
            <i className="fa fa-bars"></i>
        </div>
        
        <Link to="/" className="logo">Home<span>Page</span></Link>
        
        <div className="top-nav ">
            
            <ul className="nav pull-right top-menu">
                <li>
                    <input type="text" className="form-control search" placeholder="Search"/>
                </li>
                
                <li className="dropdown">
                    <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                        <span className="username">{user.email}</span>
                        <b className="caret"></b>
                    </a>
                    <ul className="dropdown-menu extended logout dropdown-menu-right">
                        <div className="log-arrow-up"></div>
                        <li><Link to="profile"><i className=" fa fa-suitcase"></i>Profile</Link></li>
                        <li><Link to="/logout"><i className="fa fa-key"></i> Log Out</Link></li>
                    </ul>
                </li>
                <li className="sb-toggle-right">
                    <i className="fa  fa-align-right"></i>
                </li>
                
            </ul>
            
        </div>
    </header>

    );
}
 
export default Header;