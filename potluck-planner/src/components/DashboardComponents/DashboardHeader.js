import React from 'react';
import { NavLink } from 'react-router-dom';

import { logout } from '../../actions/loginActions';
import { useStateValue } from '../../hooks/useStateValue';



const Header = () => {
    const [, dispatch] = useStateValue();
    return (
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
            <div className="flex items-center w-auto justify-center">
                <div className="">
                    <div className="inline-block text-lg mx-4 px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
                        <NavLink to='/dashboard'>View My Potlucks</NavLink>
                    </div>

                    <div className="inline-block text-lg mx-4 px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
                        <NavLink to='/dashboard/addEvent'>Add New Event</NavLink>
                    </div>

                    <div className="inline-block text-lg mx-4 px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
                        <NavLink to='/' onClick={() => logout(dispatch)}>
                            Log Out
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>

    );
};

export default Header;
