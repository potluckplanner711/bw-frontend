import React from 'react';

import Navbar from './Navbar';

import landinghero from '../img/landinghero.jpg';

function Landing() {
  return (

      <div className="bg-gray-100 flex">
        <div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:w-1/2 lg:max-w-full lg:py-24 lg:px-12">        
        <div className="xl:max-w-lg xl:ml-auto">
        <h1 className="mt-6 text-5xl font-semibold text-gray-900 leading-tight">Potluck Planner</h1>
        <img className="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-72 sm:w-full sm:object-cover sm:object-center lg:hidden" src={landinghero} alt="potluck" />
        <h1 className="mt-6 text-2xl font-semibold text-gray-900 leading-tight sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
          The Place for all things Potluck.
          <br className="hidden lg:inline"/><span className="text-gray-500"> Plan.  Potluck.  Proceed.</span>
          </h1>
          <p className="mt-2 text-gray-600 sm:text-xl sm:mt-4"> In the world of social gatherings and potlucks the "Potluck Planner" is king. If you have ever tried to organize a potluck through text messages, online to-do lists or spreadsheets, you'll understand why this app is essential. 
</p>
          <div className="mt-4 sm:mt-6">
          <a href="/" className="btn btn-blue sm:text-base shadow-lg mr-6">Plan A Potluck</a>
          <a href="/" className="btn btn-gray sm:text-base">Learn More</a>
        </div>
        </div>
        </div>
        <div className="hidden lg:block lg:w-1/2 lg:relative">
        <img className="absolute inset-0 h-full w-full object-cover object-center" src={landinghero} alt="potluck" />
        </div>
      </div>
  );
}

export default Landing;
