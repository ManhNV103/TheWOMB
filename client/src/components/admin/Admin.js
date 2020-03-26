import React from 'react';

import PrivateRoute from './util/PrivateRoute';
import Dashboard from './views/Dashboard';
import Advertisers from './views/Advertisers';
import Submissions from './views/Submissions';

const Admin = (props) => {
    const prefix = props.match.url;

    return (
        <div>
            <PrivateRoute path={prefix} exact component={Dashboard} />
            <PrivateRoute path={`${prefix}/advertisers`} component={Advertisers} />
            <PrivateRoute path={`${prefix}/submissions`} component={Submissions} />
        </div>
    )
};

export default Admin;