import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

import 'semantic-ui-css/semantic.min.css';
import '../../../assets/scss/registration/index.scss';

const Layout = ({ children }) => {
    return (
        <div className="registration">
            <Navbar />
            <div className="ui vertical segment content">
                { children }
            </div>
            <Footer />
        </div>
    );
};

export default Layout;