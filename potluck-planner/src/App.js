import React from 'react';

//Imported Components
import Landing from './components/Landing';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';

//Redux Imports
// import { Provider } from 'react-redux';
// import store from './store'


function App() {
  return ( 
      <div className="App">
        <header className="App-header">
          <Landing />
        </header>
        <Login />
        <SignUp />
        <Dashboard/>
      </div>
  );
}

export default App;
{/**  <Provider> Dont forget this when you're ready for the store: store={store}**/}
   {/**  </Provider> **/}