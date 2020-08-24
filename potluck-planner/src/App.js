import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

//Imported Components
import { PrivateRoute } from './components/PrivateRoute'
import Navbar from './components/Navbar'
import Landing from './components/Landing';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';

//Redux Imports
// import { Provider } from 'react-redux';
// import store from './store'


function App() {
  return ( 
    <Router>
      <div className="App">
      <div className="bg-gray-300">
        <Navbar />
        <Route exact path='/' component={Landing} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={SignUp} />
        <PrivateRoute path='/dashboard'>
          <Dashboard/>
        </PrivateRoute>
      </div>
      </div>
    </Router>
  );
}

export default App;
{/**  <Provider> Dont forget this when you're ready for the store: store={store}**/}
   {/**  </Provider> **/}