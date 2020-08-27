import React, { useState } from 'react';
import { signUpAction } from '../../actions';
import { useStateValue } from '../../hooks/useStateValue';

export default function SignUp() {
    const [user, setUser] = useState({
        username: '',
        password: '',
        full_name: '',
        email: '',
    });

    const [{ signUp }, dispatch] = useStateValue();

    const userInputHandler = event => {
        const name = event.target.name;
        const value = event.target.value;
        setUser({ ...user, [name]: value });
    };

    return (
        <div>
            <form 
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                onSubmit={e => {
                    e.preventDefault();
                    signUpAction(dispatch, user);
                    setUser({
                        username: '',
                        password: '',
                        full_name: '',
                        email: '',
                    });
                }}>
            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
            Username
                <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name='username'
                    value={user.username}
                    type='text'
                    placeholder='Create A Username'
                    onChange={event => userInputHandler(event)}
                />
            </label>
            <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
                <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name='password'
                    type='password'
                    onChange={event => userInputHandler(event)}
                    value={user.password}
                    placeholder='Create A Password'
                />
            </label>
            <label className="block text-gray-700 text-sm font-bold mb-2">
            Full Name
                <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name='full_name'
                    type='text'
                    onChange={event => userInputHandler(event)}
                    value={user.full_name}
                    placeholder='Enter Full Name'
                />
            </label>
            <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
                <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name='email'
                    type='email'
                    onChange={event => userInputHandler(event)}
                    value={user.email}
                    placeholder='Enter your email'
                />
            </label>
            </div>
                <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'
                disabled={signUp.isSignUpLoading} type='submit'>>Sign Up</button>
            </form>
        </div>
    )
}
