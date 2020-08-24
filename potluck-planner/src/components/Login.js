import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axiosWithAuth from './utils/axiosWithAuth'

export default function Login() {

    const credentials = {
        email: '',
        password: ''
    }
    const [login, setLogin] = useState(credentials)

    const handleSubmit = (e) => {
        e.preventDefault()
        axiosWithAuth().post('apiurl', credentials)
        // need to update api url to reflect backend address
            .then(res => {
                console.log(res)
                localStorage.setItem('token', res.data)
                // may need to change location of token from res
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleChange = (e) => {

    }

    return (
        <div>
            <form>

            </form>
        </div>
    )
}
