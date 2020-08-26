import React from "react";
import {Link, Route} from 'react-router-dom'
import PotluckList from './PotluckList'

export default function Home() {
  return(
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
                  to='/potlucks'
                  >
                  View My Potlucks
              </Link>
              <Route exact path='/potlucks' component={PotluckList} />
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
                  RSVP - NOT WORKING
              </Link>
              <Route exact path='/mypotlucks' component={PotluckList} />
          </div>
      </div>
    </section>
  )

}
