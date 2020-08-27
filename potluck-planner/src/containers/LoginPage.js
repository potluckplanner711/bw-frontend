import React, { useEffect } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';
import Login from '../components/LoginComponents/Login';


const LoginPage = props => {
    const [token] = useLocalStorage('token');

    useEffect(() => {
        if (token) props.history.push('/dashboard');
    }, [token, props.history]);

    return (
        <div className="flex flex-col items-center">
            <div >
                <span className="text-3xl font-bold">Potluck Planner</span>
            </div>
            <Login />
            <div className="flex flex-col items-center">
                <span className="p-3 m-3 max-w-md">Don't have an account?</span>
                <NavLink to='/signup'>Sign Up</NavLink>
            </div>
        </div>
    );
};

export default withRouter(LoginPage);
