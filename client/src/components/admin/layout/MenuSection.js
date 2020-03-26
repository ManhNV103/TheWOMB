import React from 'react';
import { Menu } from 'semantic-ui-react';

const MenuSection = (props) => {
    return (
        <div>
            <Menu.Header className="sidebar-section-header">{ props.name }</Menu.Header>
            <Menu.Menu>
                { props.children }
            </Menu.Menu>
        </div>
    );
};

export default MenuSection;