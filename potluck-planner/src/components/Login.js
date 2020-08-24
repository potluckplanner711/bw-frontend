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
                history.push('/')
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
        <div class="w-full max-w-xs">
            <form 
                class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                onSubmit={handleSubmit}>

                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2">
                        Email
                    </label>
                    <input 
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name='email'
                        value={login.email}
                        type='text'
                        placeholder='Email'
                        onChange={handleChange}
                    />
                </div>
                

                <label>
                    Password
                </label>
                <input 
                    name='password'
                    value={login.password}
                    type='password'
                    placeholder='Password'
                    onChange={handleChange}
                />

                <button>Login</button>
            </form>
        </div>
    )
}
