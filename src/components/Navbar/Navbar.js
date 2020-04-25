import React from 'react';
import logo from '../../logo.png';
import './styles.css'

const Navbar = (props) => {
    let {openMobileSearch, openMobileSettings, menus} = props;
    const searchIcon = menus.openmobilesearch === true ? "close" : "search";
    const menuIcon = menus.openmobilesets === true ? "close" : "menu";
    return (
        <nav className="navbar">
            <span className="navbar__search-icon"><i onClick={() => openMobileSearch()} className="material-icons md-12">{searchIcon}</i></span>
            <span className="navbar__logo"><img className="navbar__logo_item" src={logo} alt="logo"></img></span>
            <span className="navbar__menu-icon"><i onClick={() => openMobileSettings()} className="material-icons md-12">{menuIcon}</i></span>
        </nav>
    );
};

export default Navbar;