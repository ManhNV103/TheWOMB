import { post } from './ApiService';
import ApiError from '../util/ApiError';

const login = async (username, password, rememberMe = false) => {
    const body = {
        username: username,
        password: password,
        rememberMe: rememberMe
    };

    try {
        const { token } = await post('/authenticate', body);

        setToken(token);
    } catch(e) {
        throw new ApiError(401, "Login unsuccessful");
    }
};

const logout = () => {
    localStorage.removeItem('token');
};

const isAuthenticated = () => {
    if(getToken()) {
        return true;
    } else {
        return false;
    }
};

const getToken = () => {
    return localStorage.getItem('token');
};

const setToken = (token) => {
    localStorage.setItem('token', token);
};

export {
    login,
    logout,
    isAuthenticated,
    getToken,
    setToken
}