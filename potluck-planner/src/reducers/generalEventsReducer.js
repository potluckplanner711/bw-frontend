import {
    GETTING_EVENTS,
    GOT_EVENTS,
    EVENTS_ERROR,
    CREATED_EVENT,
    CREATING_EVENT,
    CREATING_EVENT_ERROR,
    DELETING_EVENT,
    DELETED_EVENT,
    DELETING_EVENT_ERROR,
    UPDATING_EVENT,
    UPDATED_EVENT,
    UPDATING_EVENT_ERROR,
} from '../actions';

/*
State shape:
events: {
        data: [{
            event_id: '',
            organizer_id: '',
            event_name: '',
            date: '',
            time: '',
            description: '',
            address: '',
            city: '',
            state: '',
        }],
        errorMessage: '',
        isEventsLoading: false,
        searchTerm: ''
    },
*/

export const eventsReducer = (state, { type, payload }) => {
    switch (type) {
        case GETTING_EVENTS:
        case CREATING_EVENT:
        case DELETING_EVENT:
        case UPDATING_EVENT:
            return {
                ...state,
                errorMessage: '',
                isEventsLoading: true,
            };
        case EVENTS_ERROR:
        case CREATING_EVENT_ERROR:
        case DELETING_EVENT_ERROR:
        case UPDATING_EVENT_ERROR:
            let data = state.data;
            if (payload === 'There are no events listed for this user.')
                data = [];
            return {
                ...state,
                isEventsLoading: false,
                data: data,
                errorMessage: payload,
            };
        case GOT_EVENTS:
            return {
                ...state,
                isEventsLoading: false,
                data: payload,
            };
        case CREATED_EVENT:
            return {
                ...state,
                data: [...state.data, payload],
                isEventsLoading: false,
            };
        case DELETED_EVENT:
            let remainingEvents = state.data.filter(
                event => event.event_id !== Number(payload)
            );
            let error = '';
            if (remainingEvents.length === 0)
                error = 'Time to start creating events!';
            return {
                ...state,
                isEventsLoading: false,
                data: remainingEvents,
                errorMessage: error,
            };
        case UPDATED_EVENT:
            let sameEvents = state.data.filter(
                event => event.event_id !== Number(payload.id)
            );
            return {
                ...state,
                isEventsLoading: false,
                data: [...sameEvents, payload.event],
            };
        default:
            return state;
    }
};
