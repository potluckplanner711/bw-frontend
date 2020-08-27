import React from 'react';
import { NavLink } from 'react-router-dom';
import { landinghero } from '../img/landinghero.jpg'

import { SIGNUP_OVER } from '../actions';
import { useStateValue } from '../hooks/useStateValue';
import SignUp from '../components/SignUpComponents/SignUp'


const SignUpPage = () => {
    const [{ signUp }, dispatch] = useStateValue();

    return (
        <div className=''>
            {signUp.errorMessage ? (
                <h2 className='sign_up_error'>{signUp.errorMessage}</h2>
            ) : (
                <h2> </h2>
            )}
            {!signUp.isSignedUp ? (
                <SignUp />
            ) : (
                <div className="flex items-center justify-center">
                <div className='flex-col items-center align-center mx-auto mt-10'>
                    <h2 className="text-4xl">
                        Thank you for signing up!
                    </h2>
                    <NavLink
                        className="inline-block text-lg mx-4 px-4 py-2 leading-none border rounded text-teal-500 border-teal-500 hover:border-transparent hover:text-white hover:bg-teal-500 mt-4 lg:mt-0"
                        to='/dashboard'
                        onClick={() => dispatch({ type: SIGNUP_OVER })}>
                        Click here to start potlucking!
                    </NavLink>
                </div>
                </div>
            )}
        </div>
    );
};

export default SignUpPage;
