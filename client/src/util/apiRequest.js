import { API_BASE } from '../constants';

const defaultOptions = {
	method: 'GET',
	headers: {
		'Accept': 'applicaiton/json',
		'Content-Type': 'application/json'
	}
}

const apiRequest = (endpoint, options) => {
    const onSuccess = (response) => {
        return response;
    };

    const onError = function(error) {
        if (error.response) {
            // some error happened with the server side
            console.log(error.response);
		} else {
            // some error happened while processing the request
            console.error('Error Message:', error.message);
		}
        return Promise.reject(error.response || error.message);
    };

	const fetchOptions = {...defaultOptions, ...options};

	const dick = endpoint.replace(/^\//, '');

    return fetch(`${API_BASE}/${dick}`, fetchOptions)
		.then(onSuccess)
		.catch(onError);
};

export default apiRequest;
