import React, { useState, createContext, useContext, useEffect } from 'react';
import { AlertsContext } from './AlertsContext';
import { get } from '../services/ApiService';

const ApiProvider = (props) => {
    const [endpoint, setEndpoint] = useState(props.endpoint ?? '');
    const [options, setOptions] = useState(props.options ?? {});
    const [data, setData] = useState(props.init ?? null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const { addAlert } = useContext(AlertsContext);

    useEffect(() => {
        if(error) {
            addAlert({
                type: 'negative',
                message: error
            });
            setError('');
        }
    }, [error, addAlert, setError]);

	useEffect(() => {
		if(endpoint) {
			const fetchResponse = async (endpoint, options) => {
				setLoading(true)
				try {
					const json = await get(endpoint, options);
					setData(json);
					setError('');
				} catch(e) {
					setData(props.init);
					setError(e.message);
				}
				setLoading(false);
			}
			fetchResponse(endpoint, options);
        }
    // eslint-disable-next-line
    }, [endpoint, options]);

    return (
        <ApiContext.Provider value={{endpoint, options, data, loading, error, setEndpoint, setOptions, setData, setError, setLoading}}>
            {props.children}
        </ApiContext.Provider>
    );
};

export const ApiContext = createContext();
export default ApiProvider;