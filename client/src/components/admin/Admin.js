import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Dashboard from './views/Dashboard';

import 'semantic-ui-css/semantic.min.css';
import '../../assets/scss/registration/index.scss';

const Admin = (props) => {
    const prefix = props.match.url;

    return (
        <div>
            <Router>
                <div className="ui vertical segment">
                    <Route path={prefix} component={Dashboard}></Route>
                </div>
            </Router>
        </div>
    )
};

export default Admin;