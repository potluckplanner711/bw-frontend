import * as React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import PotluckList from "./PotluckList";
import AddPotluckForm from "./AddPotluckForm";
import Home from "./Home";

export default function App() {
  return (
    <Router>
      <div style={{ width: 1000, margin: "0 auto" }}>
            <Link className="btn btn-blue sm:text-base shadow-lg mr-6"
            to="/dashboard">
              Home
            </Link>
            <Link 
                className="btn btn-blue sm:text-base shadow-lg mr-6"
                to='/addpotluck'
                >
                Create New Potluck
            </Link>
            <Link 
            className="btn btn-blue sm:text-base shadow-lg mr-6"
            to="/potlucks">
              Potluck List
            </Link>

        <hr />

        <Route exact path="/dashboard">
          <Home />
        </Route>
        <Route exact path='/addpotluck'>
          <AddPotluckForm />
        </Route>
        <Route path="/potlucks">
          <PotluckList />
        </Route>
      </div>
    </Router>
  );
}
