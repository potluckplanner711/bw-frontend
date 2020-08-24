import React from 'react'
import { BrowserRouter as Router, Route, Link  } from 'react-router-dom'

//Imported Components
import PotluckList from './PotluckDetail';
import PotluckDetail from './PotluckDetail';
import AddPotluckForm from './AddPotluckForm';




export default function Dashboard() {
    
    return (
        <Router>
            <div className="container bg-gray-400 flex flex-col items-center">
                <h2 className="mt-6 text-5xl font-semibold text-gray-900 leading-tight">Dashboard</h2>
                    <div className="mt-4 sm:mt-6">
                        <Link 
                        className="btn btn-blue sm:text-base shadow-lg mr-6"
                        to='/createpotluck'
                        >
                            Create New Potluck
                        </Link>
                        <Route exact path='/createpotluck' component={AddPotluckForm} />
                    </div>
                <section className="bg-gray-400 flex flex-col align-center justify-center">
                    <div className="mb-4 mt-8 bg-gray-200 flex flex-col align-center justify-center"> 
                        <div className="px-4 py-8">
                        <h3 
                        className="text-2xl font-semibold text-gray-900 leading-tight sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
                            My Potlucks
                        </h3>
                            <br />
                            <p>
                                Here is where you'll find a list of potlucks that you're confirmed for.
                            </p>
                            <br />
                            <Link 
                                className="btn btn-blue sm:text-base shadow-lg mr-6"
                                to='/mypotlucks'
                                >
                                View My Potlucks
                            </Link>
                            <Route exact path='/mypotlucks' component={PotluckList} />
                        </div>
                    </div>
                    <div className="mb-4 mt-8 bg-gray-200 flex flex-col align-center justify-center"> 
                        <div className="px-4 py-8">
                        <h3 
                        className="text-2xl font-semibold text-gray-900 leading-tight sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
                            My Invites
                        </h3>
                            <br />
                            <p>
                                Here is where you'll find a list of potlucks that you were invited to. (add logic if RSVP's === false or something)
                            </p>
                            <br />
                            <Link 
                                className="btn btn-blue sm:text-base shadow-lg mr-6"
                                to='/mypotlucks'
                                >
                                RSVP
                            </Link>
                            <Route exact path='/mypotlucks' component={PotluckList} />
                        </div>
                    </div>
                </section>
            </div>
        </Router>
    )
}

{/* <Route exact path='/potluck' component={PotluckDetail} /> */}