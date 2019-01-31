import React from "react";
import './HeaderNav.css';
import {NavLink} from 'react-router-dom';


const HeaderNav = () => {
    return (
        <div className="sticky headerContainer">
            <nav className="navbar">
                <div className="row navbar-header">
                    <div className='col-md-3 col-xs-12 navbarLeft'>
                        <div className='navbarTitle'>Brandon Vreeman</div>
                    </div>
                    <NavLink to="/" className="navbar-brand">My Projects</NavLink>
                    <NavLink to="/AboutMe" className="navbar-brand">About Me</NavLink>
                    <NavLink to='/ContactUsPage' className="navbar-brand">Contact Us</NavLink>
                    <a className="navbarRight socialItems fb-ic ml-0" rel="noopener noreferrer" href="https://www.facebook.com/bvreeman/" target="_blank" style={{color: '#ffffff'}}><i className="fa fa-facebook white-text mr-lg-4"></i></a>
                </div>
            </nav>
        </div>
    )
}

export default HeaderNav

