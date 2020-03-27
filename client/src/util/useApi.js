import { useState, useEffect } from 'react';
import { get } from '../services/apiService';

const useApi = (end, opt = {}, init = null) => {
	const [endpoint, setEndpoint] = useState(end);
	const [options, setOptions] = useState(opt);
	const [data, setData] = useState(init);
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState('')

	useEffect(() => {
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
	// eslint-disable-next-line
	}, [endpoint, options]);

	return {
		data: data,
		loading: loading,
		error: error,
		setEndpoint: setEndpoint,
		setOptions: setOptions
	};
};

export default useApi;
