import React from 'react';
import { Header, Menu } from 'semantic-ui-react';

import MenuSection from './MenuSection';
import MenuItem from './MenuItem';

const Sidebar = (props) => {
    return (
        <div className={ 'sidebar' + (props.hidden ? ' hidden' : '') }>
            <div>
                <Header as="h1" className="sidebar-header">Admin</Header>
            </div>
            <Menu vertical>
                <MenuSection name="Core">
                    <MenuItem name="Dashboard" link="/admin" icon="dashboard" active={props.active} />
                </MenuSection>
                <MenuSection name="Other">
                    <MenuItem name="Advertisers" link="/admin/advertisers" icon="list" active={props.active} />
                    <MenuItem name="Submissions" link="/admin/submissions" icon="list" active={props.active} />
                </MenuSection>
            </Menu>
        </div>
    );
};

export default Sidebar;