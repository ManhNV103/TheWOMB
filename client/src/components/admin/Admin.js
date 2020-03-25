import React from 'react';

import Dashboard from './views/Dashboard';
import PrivateRoute from './util/PrivateRoute';

import 'semantic-ui-css/semantic.min.css';
import '../../assets/scss/registration/index.scss';

const Admin = (props) => {
    const prefix = props.match.url;

    return (
        <div>
            <div className="ui vertical segment">
                <PrivateRoute path={prefix} component={Dashboard}></PrivateRoute>
            </div>
        </div>
    )
};

export default Admin;