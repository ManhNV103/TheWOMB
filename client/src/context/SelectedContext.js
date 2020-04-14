import React, { createContext, useState } from 'react';

const SelectedProvider =  ({ children }) => {
    const [selected, setSelected] = useState(new Set([]));

    const addOrganization = (id) => {
        setSelected(new Set(selected.add(id)));
    };

    const removeOrganization = (id) => {
        selected.delete(id);
        setSelected(new Set(selected));
    }

    return (
        <SelectedContext.Provider value={{selected, addOrganization, removeOrganization}}>
            { children }
        </SelectedContext.Provider>
    )
};

export const SelectedContext = createContext();
export default SelectedProvider;