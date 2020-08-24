import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { axiosWithAuth } from './utils/axiosWithAuth'

export default function SignUp() {

    const history = useHistory()

    const signupCredentials = {
        email: '',
        password: ''
    }
    const [signup, setSignup] = useState(signupCredentials)

    const handleSubmit = (e) => {
        e.preventDefault()
        axiosWithAuth().post('apiurl', signup)
        // need to update api url to reflect backend address
            .then(res => {
                console.log(res)
                localStorage.setItem('token', res.data)
                // may need to change location of token from res
                history.pushState('/')
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleChange = (e) => {
        setSignup({
            ...signup,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <h2>Sign Up for Potluck Planner</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    name='email'
                    value={signup.email}
                    type='text'
                    placeholder='Email'
                    onChange={handleChange}
                />
                <br />
                <input 
                    name='password'
                    value={signup.password}
                    type='password'
                    placeholder='Password'
                    onChange={handleChange}
                />
                <br />
                <button>Sign Up</button>
            </form>
        </div>
    )
}
