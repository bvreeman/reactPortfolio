import React from "react";
import './HeaderNav.css';
import { NavLink } from 'react-router-dom';


const HeaderNav = () => {
    return (
        <div className="sticky headerContainer">
            <nav className="navbar">
                <div className='col-md-3 col-xs-12 navbarLeft'>
                    <NavLink to="/" className='navbarTitle'>Brandon Vreeman</NavLink>
                </div>
                <NavLink to="/" className="navbar-brand">About Me</NavLink>
                <NavLink to="/MyProjects" className="navbar-brand">My Projects</NavLink>
                <NavLink to='/ContactUsPage' className="navbar-brand">Contact Me</NavLink>
                <a className="navbarRight socialItems fab fa-facebook-f fa-3x" rel="noopener noreferrer" href="https://www.facebook.com/bvreeman/" target="_blank" style={{color: '#ffffff'}}><i className="fa fa-facebook white-text mr-lg-4"></i></a>
            </nav>
        </div>
    )
}

export default HeaderNav

