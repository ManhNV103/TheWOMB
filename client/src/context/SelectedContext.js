import React, { createContext, useState } from 'react';

const SelectedProvider =  ({ children }) => {
    const [selected, setSelected] = useState(new Set([]));

    const addAlert = (alert) => {
    };

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

export const SelectedContext = createContext();
export default SelectedProvider;