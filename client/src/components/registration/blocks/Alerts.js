import React, { useContext } from 'react';
import { Message, Container } from 'semantic-ui-react';
import { AlertsContext } from '../../../context/AlertsContext';

const Alerts = (props) => {
    const { alerts, removeAlert } = useContext(AlertsContext);

    const handleDismiss = (key) => {
        removeAlert(key);
    };

    if(!alerts) {
        return;
    }

    const alertsDOM = alerts.map((alert, i) => {
        const options = {};

        if(alert.type) {
            options[alert.type] = true;
        }

        return <Message className="alert" key={i} {...options} onDismiss={() => handleDismiss(i)}>{ alert.message }</Message>
    });

    return (
        <Container>
            <div className="alerts">
                { alertsDOM }
            </div>
        </Container>
    );
}

export default Alerts;