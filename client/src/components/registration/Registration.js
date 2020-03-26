import React from 'react';
import { Route } from 'react-router-dom';

import Home from './views/Home';
import Form from './views/Form';
import Login from './views/Login';

const Registration = () => {
    return (
        <div>
            <Route path="/" exact component={Home} />
            <Route path="/registration" component={Form} />
            <Route path="/login" component={Login} />
        </div>
    )
};

export default Registration;
