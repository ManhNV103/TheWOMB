import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import AlertsProvider from '../../../context/AlertsContext';
import Alerts from '../../common/Alerts';

import 'semantic-ui-css/semantic.min.css';
import '../../../assets/scss/registration/index.scss';

const Layout = ({ children }) => {
    return (
        <AlertsProvider>
            <div className="registration">
                <Navbar />
                <div className="ui vertical segment content">
                    <Alerts />
                    { children }
                </div>
                <Footer />
            </div>
        </AlertsProvider>
    );
};

export default Layout;