import React from 'react';
import { Route } from 'react-router-dom';

import Home from './views/Home';
import Form from './views/Form';
import Login from './views/Login';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';

import 'semantic-ui-css/semantic.min.css';
import '../../assets/scss/registration/index.scss';

const Registration = () => {
    return (
        <div className="registration">
            <Navbar/>
            <div className="ui vertical segment content">
                <Route path="/" component={Home} exact />
                <Route path="/registration" component={Form} />
                <Route path="/login" component={Login} />
            </div>
            <Footer/>
        </div>
    )
};

export default Registration;
