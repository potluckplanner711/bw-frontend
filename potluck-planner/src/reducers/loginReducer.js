import { IS_LOGGING_IN, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT } from '../actions';

/*
State shape:
login: {
        isLoginLoading: false,
        isLoggedIn: false,
        errorMessage: '',
        welcomeMessage: ''
    },
*/

export const loginReducer = (state, { type, payload }) => {
    switch (type) {
        case IS_LOGGING_IN:
            return {
                ...state,
                isLoginLoading: true,
                errorMessage: '',
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoginLoading: false,
                isLoggedIn: true,
                welcomeMessage: payload,
            };
        case LOGIN_ERROR:
            return {
                ...state,
                isLoginLoading: false,
                errorMessage: payload,
            };
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
            };
        default:
            return state;
    }
};
