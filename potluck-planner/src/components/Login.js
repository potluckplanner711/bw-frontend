import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { axiosWithAuth } from './utils/axiosWithAuth'
import loginpic from '../img/login-pic.jpg'

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
        <div className="flex-col sm:flex-row h-full">
            <form 
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4  "
                onSubmit={handleSubmit}>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Email
                    </label>
                    <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name='email'
                        value={login.email}
                        type='text'
                        placeholder='Email'
                        onChange={handleChange}
                    />
                </div>
                
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Password
                    </label>
                    <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name='password'
                        value={login.password}
                        type='password'
                        placeholder='Password'
                        onChange={handleChange}
                    />
                </div>

                <button className='bg-transparent hover:bg-orange text-aqua font-semibold hover:text-white py-2 px-4 border border-aqua hover:border-transparent rounded'>Login</button>
            </form>
            <div className="w-6/12" >
                <img src={loginpic} alt="food-table" className="rounded" />
            </div>
        </div>
    )
}
