import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { axiosWithAuth } from './utils/axiosWithAuth'

export default function Login() {

    const history = useHistory()

    const loginCredentials = {
        email: '',
        password: ''
    }
    const [login, setLogin] = useState(loginCredentials)

    const handleSubmit = (e) => {
        e.preventDefault()
        axiosWithAuth().post('apiurl', login)
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
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    name='email'
                    value={login.email}
                    type='text'
                    placeholder='Email'
                    onChange={handleChange}
                />
                <br />
                <input 
                    name='password'
                    value={login.password}
                    type='password'
                    placeholder='Password'
                    onChange={handleChange}
                />
                <br />
                <button>Login</button>
            </form>
        </div>
    )
}
