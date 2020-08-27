import React from 'react';
import { NavLink } from 'react-router-dom';
import { landinghero } from '../img/landinghero.jpg'

import { SIGNUP_OVER } from '../actions';
import { useStateValue } from '../hooks/useStateValue';
import SignUp from '../components/SignUpComponents/SignUp'


const SignUpPage = () => {
    const [{ signUp }, dispatch] = useStateValue();

    return (
        <div>
            <div className='form sign_up_inner'>
                {signUp.errorMessage ? (
                    <h2 className='sign_up_error'>{signUp.errorMessage}</h2>
                ) : (
                    <h2> </h2>
                )}
                {!signUp.isSignedUp ? (
                    <SignUp />
                ) : (
                    <div>
                        <h2>Thank you for signing up!</h2>
                        <NavLink
                            to='/'
                            onClick={() => dispatch({ type: SIGNUP_OVER })}>
                            Login Now
                        </NavLink>
                    </div>
                )}
            </div>
            <div className='image sign_up_inner'>
                <img src={landinghero} alt='Family Fun Meal!' />
                <NavLink to='/'>I am a member</NavLink>
            </div>
        </div>
    );
};

export default SignUpPage;
