import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.png';

const Navbar = (openMobileSearch) => {
    return (
        <nav className="navbar">
            <span className="search-mobile"><i className="material-icons md-12">search</i></span>
            <img className="logo" src={logo} alt="logo"></img>
            <span className="menu-mobile">< i onClick={() => openMobileSearch()} className="material-icons md-12">menu</i></span>
        </nav>
    );
};

export default Navbar;