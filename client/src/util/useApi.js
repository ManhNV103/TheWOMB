import { useEffect, useContext } from 'react';
import { get } from '../services/apiService';
import ApiContext from '../context/ApiContext';

const useApi = (end, opt = {}, init = null) => {
    const {
        endpoint,
        options,
        data,
        loading,
        error,
        setEndpoint,
        setOptions,
        setData,
        setLoading,
        setError
    } = useContext(ApiContext);

    setEndpoint(end);
    setOptions({});
    setData(init);

	useEffect(() => {
		if(endpoint) {
			const fetchResponse = async (endpoint, options) => {
				setLoading(true)
				try {
					const json = await get(endpoint, options);
					setData(json);
					setError('');
				} catch(e) {
					setData(init);
					setError(e.message);
				}
				setLoading(false);
			}
			fetchResponse(endpoint, options);
		}
	// eslint-disable-next-line
	}, [endpoint, options]);

	return {
		data: data,
		loading: loading,
		error: error,
		setEndpoint: setEndpoint,
		setOptions: setOptions,
		setData: setData,
        setError: setError,
        setLoading: setLoading
	};
};

export default useApi;
