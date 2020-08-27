import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import StateProvider from './StateProvider';
import { initialState, mainReducer } from '../reducers/mainReducer';

function customRender(component) {
    return {
        ...render(
            <Router>
                <StateProvider
                    initialState={initialState}
                    reducer={mainReducer}>
                    {component}
                </StateProvider>
            </Router>
        ),
    };
}

export * from '@testing-library/react';

export { customRender as render };
