import React, { useState } from 'react';
import Sidebar from './Sidebar';
import TopMenu from './TopMenu';

import 'semantic-ui-css/semantic.min.css';
import '../../../assets/scss/admin/index.scss';

const Layout = ({ active, children }) => {
    const [hidden, setHidden] = useState(false);

    const onToggleSidebar = (state) => {
        setHidden(state);
    };

    return (
        <div className="admin">
            <Sidebar active={active} hidden={hidden} />
            <div className="content-container">
                <TopMenu hidden={hidden} onToggleSidebar={onToggleSidebar} />
                <div className="ui vertical segment content">
                    { children }
                </div>
            </div>
        </div>
    );
};

export default Layout;
