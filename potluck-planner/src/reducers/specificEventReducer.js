import {
    GETTING_EVENT,
    GOT_EVENT,
    GOT_EVENT_ERROR,
    ADDING_GUESTS,
    ADDED_GUESTS,
    ADD_GUESTS_ERROR,
    REMOVING_GUEST,
    REMOVED_GUEST,
    REMOVE_GUEST_ERROR,
    UPDATING_GUEST,
    UPDATED_GUEST,
    UPDATE_GUEST_ERROR,
    ADDING_RECIPES,
    ADDED_RECIPES,
    ADD_RECIPES_ERROR,
    REMOVING_RECIPE,
    REMOVED_RECIPE,
    REMOVE_RECIPE_ERROR,
    UPDATING_RECIPE,
    UPDATED_RECIPE,
    UPDATE_RECIPE_ERROR,
} from '../actions';

/*
event: {
        data: {
            id: '',
            organizerID: '',
            event_name: '',
            date: '',
            time: '',
            description: '',
            address: '',
            city: '',
            state: '',
            recipes: [{
                recipe_name: '',
                user_id: '',
                full_name: ''
            }],
            guests: [{
                user_id: '',
                full_name: '',
                attending: false
            }]
        },
        isEventLoading: false,
        errorMessage: ''
    }
*/

export const eventReducer = (state, { type, payload }) => {
    switch (type) {
        case GETTING_EVENT:
        case ADDING_GUESTS:
        case REMOVING_GUEST:
        case UPDATING_GUEST:
        case ADDING_RECIPES:
        case REMOVING_RECIPE:
        case UPDATING_RECIPE:
            return {
                ...state,
                errorMessage: '',
                isEventLoading: true,
            };

        case GOT_EVENT_ERROR:
        case ADD_GUESTS_ERROR:
        case REMOVE_GUEST_ERROR:
        case UPDATE_GUEST_ERROR:
        case ADD_RECIPES_ERROR:
        case REMOVE_RECIPE_ERROR:
        case UPDATE_RECIPE_ERROR:
            return {
                ...state,
                isEventLoading: false,
                errorMessage: payload,
            };

        case GOT_EVENT:
            return {
                ...state,
                data: payload,
                isEventLoading: false,
            };
        case ADDED_GUESTS:
        case REMOVED_GUEST:
        case UPDATED_GUEST:
            return {
                ...state,
                data: {
                    ...state.data,
                    guests: payload,
                },
                isEventLoading: false,
            };
        case ADDED_RECIPES:
        case REMOVED_RECIPE:
        case UPDATED_RECIPE:
            return {
                ...state,
                data: {
                    ...state.data,
                    recipes: payload,
                },
                isEventLoading: false,
            };
        case 'RESET_EVENT_ERROR':
            return {
                ...state,
                errorMessage: '',
            };
        default:
            return state;
    }
};
