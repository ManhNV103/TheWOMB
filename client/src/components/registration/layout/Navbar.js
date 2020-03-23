import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo_white.png';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="ui container">
                <Link to="/" className="navbar-image">
                    <img src={logo} alt="Goodiwindi Regional Council" />
                </Link>
                <Link to="/" className="navbar-heading">One Stop Event Registration</Link>
            </div>
        </div>
    );
};

export default Navbar;