import React from 'react';
import { NavLink } from 'react-router-dom';

import { logout } from '../../actions/loginActions';
import { useStateValue } from '../../hooks/useStateValue';



const Header = () => {
    const [, dispatch] = useStateValue();
    return (
        <nav className="bg-teal-500 p-6">
            <div className="flex sm:flex-row items-center justify-center">
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
        </nav>

    );
};

export default Header;
