import React from 'react';
import { Link } from 'react-router-dom';

const Footer = (props) => {
    return (
        <div className="footer">
            <div className="footer-copyright">
                © 2020 Goondiwindi Regional Council
            </div>
            <div className="footer-admin">
                <Link to="/login">Admin Dashboard</Link>
            </div>
        </div>
    );
};

export default Footer;