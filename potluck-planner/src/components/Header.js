import React from 'react'


const links = ["Home", "Add A Potluck", "Login", "Register"];
export default function Header() {
    return (
        <div>
            <header className="flex items-center">
            <h1 className="mt-6 text-2xl font-semibold text-gray-300 leading-tight">Potluck Planner</h1>
        <div className="container pl-8">
        <div className=" sm:block">
        {links.map(link => (
          <a key={link} className="mr-6 font-bold text-gray-500 hover:text-white text-base md:text-lg lg:text-xl">
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </a>
        ))}
      </div>
        </div>
      </header>
        </div>
    )
}
