import React from 'react';
import { Route } from 'react-router-dom';
import { PrivateRoute } from './utils/PrivateRoute';

import SignupPage from './containers/SignupPage';
import Landing from './components/Landing';
import LoginPage from './containers/LoginPage';
import Dashboard from './containers/Dashboard';
import Navbar from './components/Navbar';

function App() {
    return (
        <div>
            <Navbar />
            <Route path='/' exact component={Landing} />
            <Route path='/login' component={LoginPage} />
            <Route path='/signup' component={SignupPage} />
            <PrivateRoute
                path='/dashboard'
                component={Dashboard}
                redirectURL='/login'
            />
        </div>
    );
}

export default App;
