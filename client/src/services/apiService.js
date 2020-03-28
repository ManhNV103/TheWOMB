import ApiError from '../util/ApiError';
import { getToken, logout } from '../services/authService';
import { API_BASE } from '../constants';

const defaultOptions = {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
}

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

    return fetch(url, options)
        .then(onSuccess)
        .catch(onError);
};

const get = (endpoint, options = {}) => {
    const requestOptions = {
        ...defaultOptions,
        ...options
    };

    const url = API_BASE + '/' + endpoint.replace(/^\//, '');;

    return request(url, requestOptions);
};

const post = (endpoint, body, options = {}) => {
    const requestOptions = {
        ...defaultOptions,
        method: 'POST',
        body: JSON.stringify(body),
        ...options
    };

    const url = API_BASE + '/' + endpoint.replace(/^\//, '');

    return request(url, requestOptions);
};

export {
    get,
    post
};