import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'semantic-ui-react';


const MenuItem = (props) => {
    const active = props.active === props.link;

    if(active) {
        return (
            <Menu.Item
                name={props.name}
                active={active}
            >
                { props.icon ? <Icon name={props.icon}></Icon> : '' }
                { props.name }
            </Menu.Item>
        );
    } else {
        return (
            <Link to={props.link}>
                <Menu.Item
                    name={props.name}
                    active={active}
                    link
                >
                    { props.icon ? <Icon name={props.icon}></Icon> : '' }
                    { props.name }
                </Menu.Item>
            </Link>
        );
    }
};

export default MenuItem;