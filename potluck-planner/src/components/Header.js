import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div>
            <header className="flex items-center">
            <h1 className="mt-6 text-2xl font-semibold text-white leading-tight">Potluck Planner</h1>
        <div className="container pl-8">
        <div className=" sm:block">
          <Link 
            className="mr-6 font-bold text-white hover:text-orange text-base md:text-lg lg:text-xl"
            to ='/'>Home</Link>
          <Link 
            className="mr-6 font-bold text-white hover:text-orange text-base md:text-lg lg:text-xl"
            to ='/dashboard'>Dashboard</Link>
          <Link 
            className="mr-6 font-bold text-white hover:text-orangetext-base md:text-lg lg:text-xl"
            to ='/login'>Login</Link>
          <Link 
            className="mr-6 font-bold text-white hover:text-orange text-base md:text-lg lg:text-xl"
            to ='/signup'>Sign Up</Link>

      </div>
        </div>
      </header>
        </div>
    )
}
