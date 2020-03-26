import React from 'react';

import PrivateRoute from './util/PrivateRoute';
import Dashboard from './views/Dashboard';
import Organizations from './views/Organizations';
import Submissions from './views/Submissions';

const Admin = (props) => {
    const prefix = props.match.url;

    return (
        <div>
            <PrivateRoute path={prefix} exact component={Dashboard} />
            <PrivateRoute path={`${prefix}/organizations`} component={Organizations} />
            <PrivateRoute path={`${prefix}/submissions`} component={Submissions} />
        </div>
    )
};

export default Admin;