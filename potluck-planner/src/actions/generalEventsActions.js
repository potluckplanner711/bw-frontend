import { axiosWithAuth } from '../utils/axiosTypes';

export const GETTING_EVENTS = 'GETTING_EVENTS';
export const GOT_EVENTS = 'GOT_EVENTS';
export const EVENTS_ERROR = 'EVENTS_ERROR';

export const CREATING_EVENT = 'CREATING_EVENT';
export const CREATED_EVENT = 'CREATED_EVENT';
export const CREATING_EVENT_ERROR = 'CREATING_EVENT_ERROR';

export const DELETING_EVENT = 'DELETING_EVENT';
export const DELETED_EVENT = 'DELETED_EVENT';
export const DELETING_EVENT_ERROR = 'DELETING_EVENT_ERROR';

export const UPDATING_EVENT = 'UPDATING_EVENT';
export const UPDATED_EVENT = 'UPDATED_EVENT';
export const UPDATING_EVENT_ERROR = 'UPDATING_EVENT_ERROR';

export const UPDATE_SEARCH = 'UPDATE_SEARCH';

//need to pass in the id of the user currently logged in
export const getEvents = (dispatch, id) => {
    dispatch({ type: GETTING_EVENTS });
    axiosWithAuth()
        .get(`/users/${id}/events`)
        .then(res => {
            dispatch({ type: GOT_EVENTS, payload: res.data });
        })
        .catch(err => {
            dispatch({
                type: EVENTS_ERROR,
                payload: err.response.data.message,
            });
        });
};

/* 
    event should be the following shape: 
    {
        "event_name": "",
        "date": "",
        "time": "",
        "description": "",
        "address": "",
        "city": "",
        "state": ""
    }
*/
export const addEvent = (dispatch, id, event) => {
    dispatch({ type: CREATING_EVENT });
    axiosWithAuth()
        .post(`/users/${id}/events`, event)
        .then(res => {
            dispatch({ type: CREATED_EVENT, payload: res.data });
        })
        .catch(err => {
            dispatch({
                type: CREATING_EVENT_ERROR,
                payload: err.response.data.message,
            });
        });
};

export const deleteEvent = (dispatch, id) => {
    dispatch({ type: DELETING_EVENT });
    axiosWithAuth()
        .delete(`/events/${id}`)
        .then(res => {
            dispatch({ type: DELETED_EVENT, payload: id });
        })
        .catch(err => {
            dispatch({
                type: DELETING_EVENT_ERROR,
                payload: err.response.data.message,
            });
        });
};

export const updateEvent = (dispatch, id, event) => {
    dispatch({ type: UPDATING_EVENT });
    axiosWithAuth()
        .put(`/events/${id}`, event)
        .then(res => {
            dispatch({ type: UPDATED_EVENT, payload: { id, event } });
        })
        .catch(err => {
            dispatch({
                type: UPDATING_EVENT_ERROR,
                payload: err.response.data.message,
            });
        });
};
