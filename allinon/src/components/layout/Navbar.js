import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../../user.jpg';

const Navbar = () => {
    return (
        <nav className="navbar">
            <span className="search-mobile"><i className="material-icons md-12">search</i></span>
            <Link className="logo" to="/">LOGO</Link>
            <span className="menu-mobile"><i className="material-icons md-12">menu</i></span>
            <img src={avatar} className="avatar" alt="Avatar"></img>
        </nav>
    );
};

export default Navbar;