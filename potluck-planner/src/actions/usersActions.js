import { axiosWithAuth } from '../utils/axiosTypes';

export const GETTING_USERS = 'GETTING_USERS';
export const GOT_USERS = 'GOT_USERS';
export const USERS_ERROR = 'USERS_ERROR';

export const getUsers = dispatch => {
    dispatch({ type: GETTING_USERS });
    axiosWithAuth()
        .get('/users')
        .then(res => {
            dispatch({ type: GOT_USERS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: USERS_ERROR, payload: err.response.data.message });
        });
};
