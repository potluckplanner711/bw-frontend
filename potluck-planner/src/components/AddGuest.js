import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios';

export default function AddGuest() {
    const initialGuestValues = {
        firstname: '',
        lastname: '',
        going: false,
     }
     const history = useHistory()

     const [attendee, setAttendee] = useState(initialGuestValues);

     const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('endpoint', attendee)
            .then(res => {
                console.log(res)
                history.push('/')
            })
            .catch(err => {
                console.log(err)
            })
        setAttendee(initialGuestValues)
    }

    const handleChange = (e) => {
        e.persist()
        setAttendee({
            ...attendee,
            [e.target.name]: e.target.value
        })
    }
    
    return (
        <div>
            <form 
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                onSubmit={handleSubmit}>
                <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    First Name: 
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    name="First Name"
                    value={attendee.firstname}
                    type='text'
                    placeholder='Enter First Name'
                    onChange={handleChange}
                />
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Last Name: 
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    name="Last Name"
                    value={attendee.lastname}
                    type='text'
                    placeholder='Enter Last Name'
                    onChange={handleChange}
                />
                </div>
                <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>Add Guest</button>
            </form>
        </div>
    )
}
