import React from 'react';

import PrivateRoute from './util/PrivateRoute';
import Dashboard from './views/Dashboard';
import Organizations from './views/Organizations';
import Organization from './views/Organization';
import NewOrganization from './views/NewOrganization';
import Submissions from './views/Submissions';

const Admin = (props) => {
    const prefix = props.match.url;

    return (
        <div>
            <PrivateRoute exact path={prefix} component={Dashboard} />
            <PrivateRoute exact path={`${prefix}/organizations`} component={Organizations} />
			<PrivateRoute exact path={`${prefix}/organizations/new`} component={NewOrganization} />
			<PrivateRoute exact path={`${prefix}/organizations/:id`} component={Organization} />
            <PrivateRoute exact path={`${prefix}/submissions`} component={Submissions} />
        </div>
    )
};

export default Admin;