import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div>
          <header className="flex items-center">
            <h1 className="my-4 mx-4 text-4xl font-semibold text-white leading-tight wx-">Potluck Planner</h1>
          </header>
          <div className="container ml-4 pb-5">
            <div className=" sm:block">
              <Link 
                className="mr-6 font-bold text-white hover:text-orange border rounded p-2 border-white text-base md:text-lg lg:text-xl"
                to ='/'>Home</Link>
              <Link 
                className="mr-6 font-bold text-white hover:text-orange border rounded p-2 border-white text-base md:text-lg lg:text-xl"
                to ='/dashboard'>Dashboard</Link>
              <Link 
                className="mr-6 font-bold text-white hover:text-orange border rounded p-2 border-white text-base md:text-lg lg:text-xll"
                to ='/login'>Login</Link>
              <Link 
                className="mr-6 font-bold text-white hover:text-orange border rounded p-2 border-white text-base md:text-lg lg:text-xl"
                to ='/signup'>Sign Up</Link>
            </div>
          </div>
        </div>
    )
}
