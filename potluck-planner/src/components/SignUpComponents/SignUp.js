import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { axiosWithAuth } from '../../utils/axiosTypes'

export default function SignUp() {

    const history = useHistory()

    const signupCredentials = {
        fname: '',
        lname: '',
        email: '',
        username: '',
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
                history.push('/')
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
            <form 
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                onSubmit={handleSubmit}>

            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
            First Name
                <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name='fname'
                    value={signup.fname}
                    type='text'
                    placeholder='First Name'
                    onChange={handleChange}
                />
            </label>
            <label className="block text-gray-700 text-sm font-bold mb-2">
            Last Name
                <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name='lname'
                    value={signup.lname}
                    type='text'
                    placeholder='Last Name'
                    onChange={handleChange}
                />
            </label>
            <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
                <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name='email'
                    value={signup.email}
                    type='text'
                    placeholder='Email'
                    onChange={handleChange}
                />
            </label>
            <label className="block text-gray-700 text-sm font-bold mb-2">
            Username
                <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name='username'
                    value={signup.username}
                    type='text'
                    placeholder='Username'
                    onChange={handleChange}
                />
            </label>
            <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
                <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name='password'
                    value={signup.password}
                    type='password'
                    placeholder='Password'
                    onChange={handleChange}
                />
            </label>
            </div>
                <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>Sign Up</button>
            </form>
        </div>
    )
}
