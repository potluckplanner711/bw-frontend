import { GETTING_USERS, GOT_USERS, USERS_ERROR } from '../actions';

/*
State shape:
users: {
        data: [{
            user_id: '',
            username: '',
            full_name:'', 
            email: ''
        }],
        errorMessage: '',
        isUsersLoading: false,
    },
*/

export const usersReducer = (state, { type, payload }) => {
    switch (type) {
        case GETTING_USERS:
            return {
                ...state,
                isUsersLoading: true,
            };
        case GOT_USERS:
            return {
                ...state,
                isUsersLoading: false,
                data: payload,
            };
        case USERS_ERROR:
            return {
                ...state,
                isUsersLoading: false,
                errorMessage: payload,
            };
        default:
            return state;
    }
};
