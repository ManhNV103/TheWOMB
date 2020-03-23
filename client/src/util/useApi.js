import { useState, useEffect } from 'react';
import ApiError from './ApiError'
import { API_BASE } from '../constants';

const defaultOptions = {
	method: 'GET',
	headers: {
		'Accept': 'applicaiton/json',
		'Content-Type': 'application/json'
	}
};

const apiResponse = async (endpoint, options = {}) => {
    const onSuccess = async (resp) => {
		if(!resp.ok) {
			const err = await resp.json()

			throw new ApiError(err.status, err.message)
		}

		return resp.json()
    };

    const onError = function(error) {
        if (error.response) {
            // some error happened with the server side
            console.log(error.response);
		} else {
            // some error happened while processing the request
            console.error('Error Message:', error.message);
		}

		throw new Error(error.message)
    };

	const fetchOptions = {...defaultOptions, ...options};

	const url = API_BASE + '/' + endpoint.replace(/^\//, '');

    return await fetch(url, fetchOptions)
		.then(onSuccess)
		.catch(onError);
};

const useApi = (endpoint, options = {}, init = null) => {
	const [response, setResponse] = useState(init);

	useEffect(() => {
		const fetchResponse = async (endpoint, options) => {
			try {
				const json = await apiResponse(endpoint, options);
				setResponse(json)
			} catch(e) {
				setResponse(init)
			}
		}
		fetchResponse(endpoint, options)
	// eslint-disable-next-line
	}, []);

	return response;
};

export default useApi;
