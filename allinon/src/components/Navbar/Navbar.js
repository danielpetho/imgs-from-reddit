import React from 'react';
import logo from '../../logo.png';
import './styles.css'

const Navbar = (props) => {
    let {openMobileSearch, openMobileSettings, menus} = props;
    const searchIcon = menus.openmobilesearch === true ? "close" : "search";
    const menuIcon = menus.openmobilesets === true ? "close" : "menu";
    return (
        <nav className="navbar">
            <span className="search__icon"><i onClick={() => openMobileSearch()} className="material-icons md-12">{searchIcon}</i></span>
            <span className="logodiv"><img className="logo" src={logo} alt="logo"></img></span>
            <span className="menu__icon"><i onClick={() => openMobileSettings()} className="material-icons md-12">{menuIcon}</i></span>
        </nav>
    );
};

export default Navbar;