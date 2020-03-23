import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './views/Home';
import Form from './views/Form';
import Login from './views/Login';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';

import 'semantic-ui-css/semantic.min.css';
import '../../assets/scss/registration/index.scss';

const Registration = () => {
    return (
        <div class="registration">
            <Navbar/>
            <Router>
                <div className="ui vertical segment content">
                    <Route path="/" component={Home} exact />
                    <Route path="/registration" component={Form} />
                    <Route path="/login" component={Login} />
                </div>
            </Router>
            <Footer/>
        </div>
    )
};

export default Registration;
