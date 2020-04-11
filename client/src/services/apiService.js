import ApiError from '../util/ApiError';
import { getToken, logout } from '../services/authService';
import { API_BASE } from '../constants';

const defaultOptions = {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    timeout: 30000
};

const getUrl = (endpoint) => {
    return API_BASE + '/' + endpoint.replace(/^\//, '');;
};

const fetchTimeout = (url, options = {}) => {
    const timeout = options.timeout;
    if(options.signal) {
        throw new Error("Signal not supported in timeoutable fetch");
    }

    const controller = new AbortController();
    const { signal } = controller;

    return new Promise((resolve, reject) => {
        const timer = setTimeout(() => {
            reject(new Error("Timeout reached fetching API"))
            controller.abort();
        }, timeout);
        return fetch(url, { signal, ...options })
            .finally(() => clearTimeout(timer))
            .then(resolve, reject);
    });
};

const request = (url, options) => {
    const token = getToken();

    if(token) {
        options.headers['Authorization'] = `Bearer ${token}`;
    }

    const onSuccess = async (resp) => {
        if(!resp.ok) {
            const err = await resp.json();

            if(err.message === 'Token expired') {
                logout();
            }

            throw new ApiError(err.status, err.message);
        }

        return resp.json();
    };

    const onError = async (error) => {
        if(error) {
            if(error.response) {
                // Some error happened with the server side
                console.log(error.response);
            } else {
                // Some error happened while processing the request
                console.log('Error Message:', error.message);
            }

            throw new Error(error.message);
        } else {
            throw new Error('An error occurred');
        }
    }

    return fetchTimeout(url, options)
        .then(onSuccess)
        .catch(onError);
};

const get = (endpoint, options = {}) => {
    const requestOptions = {
        ...defaultOptions,
        ...options
    };

    const url = getUrl(endpoint);

    return request(url, requestOptions);
};

const post = (endpoint, body, options = {}) => {
    const requestOptions = {
        ...defaultOptions,
        method: 'POST',
        body: JSON.stringify(body),
        ...options
    };

    const url = getUrl(endpoint);

    return request(url, requestOptions);
};

const patch = (endpoint, body, options = {}) => {
    const requestOptions = {
        ...defaultOptions,
        method: 'PATCH',
        body: JSON.stringify(body),
        ...options
    };

    const url = getUrl(endpoint);

    return request(url, requestOptions);
};

const deleteResource = (endpoint, options = {}) => {
    const requestOptions = {
        ...defaultOptions,
        method: 'DELETE',
        ...options
    };

    const url = getUrl(endpoint);

    return request(url, requestOptions);
};

const postFile = (endpoint, file, options = {}) => {
    const body = new FormData();
    body.append('file', file);

    const requestOptions = {
        method: 'POST',
        headers: {},
        body: body,
        ...options
    }

    const url = getUrl(endpoint)

    return request(url, requestOptions);
}

export {
    get,
	post,
	patch,
    deleteResource,
    postFile
};