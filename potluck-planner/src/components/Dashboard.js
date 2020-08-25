import React from 'react'
import {BrowserRouter as Router, NavLink , Route } from 'react-router-dom';

//Imported Components
import PotluckList from './PotluckList';
import AddPotluckForm from './AddPotluckForm';

const Dashboard = props => {

    return (
        <Router>
            <div className="bg-gray-400 flex flex-col items-center">
                <h2 className="mt-6 text-5xl font-semibold text-gray-900 leading-tight">My Potluck Planner</h2>
                    <div className="mt-4">
                        <NavLink 
                        className="btn btn-blue sm:text-base shadow-lg mr-6"
                        to='/dashboard'
                        >
                            Home
                        </NavLink>
                        <NavLink 
                        className="btn btn-blue sm:text-base shadow-lg mr-6"
                        to='/createpotluck'
                        >
                            Create New Potluck
                        </NavLink>
                        <NavLink 
                        className="btn btn-blue sm:text-base shadow-lg mr-6"
                        to='/dashboard'
                        >
                        My Potlucks
                        </NavLink>
                    </div>
                <section className="bg-gray-400 flex flex-col align-center justify-center">
                    <div className="mb-4 mt-8 bg-gray-200 flex flex-col align-center justify-center"> 
                        <div className="px-4 py-8">
                            Create a Potluck or View your Potlucks to get started.
                        </div>
                        <Route exact path='/createpotluck' component={AddPotluckForm} />
                        <Route exact path='/dashboard'component={PotluckList} />
                    </div>
                </section>
            </div>
        </Router>
            
    )
}

export default Dashboard;