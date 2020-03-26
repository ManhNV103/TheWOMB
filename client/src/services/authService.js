import { post } from '../services/apiService';

const login = (username, password) => {
    const body = {
        username: username,
        password: password
    };

    try {
        const { token } = post('/authenticate', body);

        setToken(token);

        return true;
    } catch(e) {
        console.log(e);
        return false;
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