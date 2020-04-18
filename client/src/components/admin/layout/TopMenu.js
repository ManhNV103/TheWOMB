import React from 'react';
import { Dropdown, Icon, Menu } from 'semantic-ui-react';
import { logout } from '../../../services/AuthService';

const TopMenu = (props) => {
    const toggleSidebar = () => {
        props.onToggleSidebar(!props.hidden);
    };

    const handleLogout = () => {
        logout();
        window.location.reload(false);
    };

    return (
        <div className="topmenu">
            <Menu attached="top">
                <Menu.Item onClick={toggleSidebar}>
                    <Icon name="bars" />
                </Menu.Item>
                <Menu.Menu position="right">
                    <Dropdown item icon="user circle" text="Goondiwindi Regional Council" simple>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Menu>
            </Menu>
        </div>
    );
};

export default TopMenu;