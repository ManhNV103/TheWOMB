import React, { createContext, useState } from 'react';

const ApiProvider =  ({ children }) => {
    const [endpoint, setEndpoint] = useState('');
    const [options, setOptions] = useState({});
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    return (
        <ApiContext.Provider value={{endpoint, options, data, loading, error, setEndpoint, setOptions, setData, setError, setLoading}}>
            { children }
        </ApiContext.Provider>
    )
};

export const ApiContext = createContext();
export default ApiProvider;