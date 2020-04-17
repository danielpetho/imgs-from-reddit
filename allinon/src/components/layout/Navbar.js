import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.png';

const Navbar = (props) => {
    let {openMobileSearch, openMobileSettings, menus} = props;
    const searchIcon = menus.openmobilesearch === true ? "close" : "search";
    const menuIcon = menus.openmobilesets === true ? "close" : "menu";
    return (
        <nav className="navbar">
            <span className="search-mobile"><i onClick={() => openMobileSearch()} className="material-icons md-12">{searchIcon}</i></span>
            <span className="logodiv"><img className="logo" src={logo} alt="logo"></img></span>
            <span className="menu-mobile"><i onClick={() => openMobileSettings()} className="material-icons md-12">{menuIcon}</i></span>
        </nav>
    );
};

export default Navbar;