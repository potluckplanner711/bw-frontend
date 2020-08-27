import React, { useReducer } from 'react';
import { StateContext } from '../contexts/StateContext';

const StateProvider = ({ initialState, reducer, children }) => {
    return (
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </StateContext.Provider>
    );
};

export default StateProvider;
