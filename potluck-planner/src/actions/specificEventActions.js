import { axiosWithAuth } from '../utils/axiosTypes';

//actions for event

export const GETTING_EVENT = 'GETTING_EVENT';
export const GOT_EVENT = 'GOT_EVENT';
export const GOT_EVENT_ERROR = 'GOT_EVENT_ERROR';

export const getEvent = (dispatch, id) => {
    dispatch({ type: GETTING_EVENT });
    return axiosWithAuth()
        .get(`/events/${id}`)
        .then(res => {
            dispatch({ type: GOT_EVENT, payload: res.data });
            return res;
        })
        .catch(err => {
            dispatch({
                type: GOT_EVENT_ERROR,
                payload: err.response.data.message,
            });
        });
};

//actions for guests
export const ADDING_GUESTS = 'ADDING_GUESTS';
export const ADDED_GUESTS = 'ADDED_GUESTS';
export const ADD_GUESTS_ERROR = 'ADD_GUESTS_ERROR';

export const REMOVING_GUEST = 'REMOVING_GUEST';
export const REMOVED_GUEST = 'REMOVED_GUEST';
export const REMOVE_GUEST_ERROR = 'REMOVE_GUEST_ERROR';

export const UPDATING_GUEST = 'UPDATING_GUEST';
export const UPDATED_GUEST = 'UPDATED_GUEST';
export const UPDATE_GUEST_ERROR = 'UPDATE_GUEST_ERROR';

//guest needs to be of shape {"user_id": '', 'attending': true||false}
export const addGuest = (dispatch, id, guest) => {
    dispatch({ type: ADDING_GUESTS });
    axiosWithAuth()
        .post(`/events/${id}/guests`, guest)
        .then(res => {
            dispatch({ type: ADDED_GUESTS, payload: res.data });
        })
        .catch(err => {
            dispatch({
                type: ADD_GUESTS_ERROR,
                payload: err.response.data.message,
            });
        });
};

//just need {'user_id': ''}
export const removeGuest = (dispatch, id, guest) => {
    dispatch({ type: REMOVING_GUEST });
    return axiosWithAuth()
        .delete(`/events/${id}/guests`, guest)
        .then(res => {
            dispatch({ type: REMOVED_GUEST, payload: res.data });
            return true;
        })
        .catch(err => {
            dispatch({
                type: REMOVE_GUEST_ERROR,
                payload: err.response.data.message,
            });
        });
};

//just pass {'attending' : true||false}
export const changeAttendance = (dispatch, id, user_id, isAttending) => {
    dispatch({ type: UPDATING_GUEST });
    return axiosWithAuth()
        .put(`/events/${id}/guests/${user_id}`, isAttending)
        .then(res => {
            dispatch({ type: UPDATED_GUEST, payload: res.data });
            return true;
        })
        .catch(err => {
            dispatch({
                type: UPDATE_GUEST_ERROR,
                payload: err.response.data.message,
            });
        });
};

//actions for recipes
export const ADDING_RECIPES = 'ADDING_RECIPES';
export const ADDED_RECIPES = 'ADDED_RECIPES';
export const ADD_RECIPES_ERROR = 'ADD_RECIPES_ERROR';

export const REMOVING_RECIPE = 'REMOVING_RECIPE';
export const REMOVED_RECIPE = 'REMOVED_RECIPE';
export const REMOVE_RECIPE_ERROR = 'REMOVE_RECIPE_ERROR';

export const UPDATING_RECIPE = 'UPDATING_RECIPE';
export const UPDATED_RECIPE = 'UPDATED_RECIPE';
export const UPDATE_RECIPE_ERROR = 'UPDATE_RECIPE_ERROR';

//need it to be {'recipe_name': ''}
export const addRecipe = (dispatch, id, recipe) => {
    dispatch({ type: ADDING_RECIPES });
    axiosWithAuth()
        .post(`/events/${id}/recipes`, recipe)
        .then(res => {
            dispatch({ type: ADDED_RECIPES, payload: res.data });
        })
        .catch(err => {
            dispatch({
                type: ADD_RECIPES_ERROR,
                payload: err.response.data.message,
            });
        });
};

//need it to be {'recipe_name': ''}
export const removeRecipe = (dispatch, id, recipe) => {
    dispatch({ type: REMOVING_RECIPE });
    axiosWithAuth()
        .delete(`/events/${id}/recipes`, recipe)
        .then(res => {
            dispatch({ type: REMOVED_RECIPE, payload: res.data });
        })
        .catch(err => {
            dispatch({
                type: REMOVE_RECIPE_ERROR,
                payload: err.response.data.message,
            });
        });
};

//need it to be {'recipe_name': '', 'user_id': ''}
export const claimRecipe = (dispatch, id, recipe) => {
    dispatch({ type: UPDATING_RECIPE });
    axiosWithAuth()
        .put(`/events/${id}/recipes`, recipe)
        .then(res => {
            dispatch({ type: UPDATED_RECIPE, payload: res.data });
        })
        .catch(err => {
            dispatch({
                type: UPDATE_RECIPE_ERROR,
                payload: err.response.data.message,
            });
        });
};
