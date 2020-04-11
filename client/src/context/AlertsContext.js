import React, { createContext, useState } from 'react';

const AlertsProvider =  ({ children }) => {
    const [alerts, setAlerts] = useState([]);

    const addAlert = (alert) => {
        setAlerts([...alerts, alert]);;
    }

    const removeAlert = (key) => {
        const updated = alerts.filter((alert, i) => i !== key);
        setAlerts(updated);
    }

    return (
        <AlertsContext.Provider value={{alerts, addAlert, removeAlert}}>
            { children }
        </AlertsContext.Provider>
    )
};

export const AlertsContext = createContext();
export default AlertsProvider;