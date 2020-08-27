import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import { loginAction } from '../../actions/loginActions';
import { useStateValue } from '../../hooks/useStateValue';



const Login = props => {
    const [user, setUser] = useState({
        username: '',
        password: '',
    });
    const [{ login }, dispatch] = useStateValue();

    useEffect(() => {
        if (login.isLoggedIn) {
            props.history.push('/dashboard');
        }
    }, [login, props.history]);

    function handleChange(event) {
        const updatedUser = {
            ...user,
            [event.target.name]: event.target.value,
        };
        setUser(updatedUser);
    }

    return (
        <form className="flex flex-col items-center"
            aria-label='login-form'
            onSubmit={e => {
                e.preventDefault();
                loginAction(dispatch, user);
            }}>
            <div className="p-4 m-2 max-w-md">
                <input className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                    type='text'
                    name='username'
                    required
                    placeholder='Username'
                    autoComplete='off'
                    value={user.username}
                    onChange={handleChange}
                    aria-label='username'
                />
                <span data-placeholder='Username' />
            </div>
            <div className="p-4 m-2 max-w-md">
                <input className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                    type='password'
                    name='password'
                    required
                    placeholder='Password'
                    value={user.password}
                    onChange={handleChange}
                    aria-label='password'
                />
                <span data-placeholder='Password' />
            </div>
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow uppercase"
                disabled={login.isLoginLoading}
                aria-label='login-button'
                type='submit'>
                Login
            </button>
        </form>
    );
};

export default withRouter(Login);
