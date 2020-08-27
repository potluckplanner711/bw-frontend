import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';



import './styles/index.css';

import App from './App';
import StateProvider from './utils/StateProvider';
import { mainReducer, initialState } from './reducers/mainReducer';

ReactDOM.render(
    <Router>
        <StateProvider
            initialState={initialState}
            reducer={mainReducer}>
            <App />
        </StateProvider>
    </Router>,
    document.getElementById('root')
);
