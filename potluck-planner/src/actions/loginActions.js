import { axiosInstance } from '../utils/axiosTypes';

export const IS_LOGGING_IN = 'IS_LOGGING_IN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const LOGOUT = 'LOGOUT';

/*
user should be of object type {
    'username' : '',
    'password' : ''
}
*/

export const loginAction = (dispatch, user) => {
    dispatch({ type: IS_LOGGING_IN });
    axiosInstance()
        .post('/users/login', user)
        .then(res => {
            dispatch({ type: LOGIN_SUCCESS, payload: res.data.message });
            window.localStorage.setItem('token', res.data.token);
            window.localStorage.setItem('user', user.username);
            window.localStorage.setItem('user_id', res.data.user_id);
        })
        .catch(err => {
            dispatch({ type: LOGIN_ERROR, payload: err.response.data.message });
        });
};

export const logout = dispatch => {
    dispatch({ type: LOGOUT });
    window.localStorage.setItem('token', '');
    window.localStorage.setItem('user', '');
    window.localStorage.setItem('user_id', '');
};
