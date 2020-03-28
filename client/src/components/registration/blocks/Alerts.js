import React from 'react';
import { Message } from 'semantic-ui-react';

const Alerts = (props) => {
    const handleDismiss = (key) => {
        props.onDismiss(key);
    }

    if(!props.alerts) {
        return;
    }

    const alerts = props.alerts.map((alert, i) => {
        const options = {};

        if(alert.type) {
            options[alert.type] = true;
        }

        return <Message className="alert" key={i} {...options} onDismiss={() => handleDismiss(i)}>{ alert.message }</Message>
    });

    return (
        <div className="alerts">{alerts}</div>
    );
}

export default Alerts;