import React, { useState } from 'react'
import { axiosWithAuth } from './utils/axiosWithAuth'
import { useHistory } from 'react-router-dom'

function AddPotluckForm() {

    const initPotluck = {
        potluckId: '',
        potluckTitle: '',
        potluckDate: '',
        potluckAddress: '',
        potluckCity: '',
        potluckSt: '',
        potluckZip: '',
        attendees: [],
        items: []
    }
    
    const history = useHistory()

    const [potluck, setPotluck] = useState(initPotluck);

    const handleSubmit = (e) => {
        e.preventDefault()
        axiosWithAuth().post('endpoint', potluck)
            .then(res => {
                console.log(res)
                history.push('/')
            })
            .catch(err => {
                console.log(err)
            })
        setPotluck(initPotluck)
    }

    const handleChange = (e) => {
        e.persist()
        setPotluck({
            ...potluck,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <form 
                class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                onSubmit={handleSubmit}>
                <div>
                <label class="block text-gray-700 text-sm font-bold mb-2">
                    Potluck Name
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    name='potluckTitle'
                    value={potluck.potluckTitle}
                    type='text'
                    placeholder='Potluck Name'
                    onChange={handleChange}
                />
                <label class="block text-gray-700 text-sm font-bold mb-2">
                    Date
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    name='potluckDate'
                    value={potluck.potluckDate}
                    type='text'
                    placeholder='Potluck Date'
                    onChange={handleChange}
                />
                <label class="block text-gray-700 text-sm font-bold mb-2">
                    Address
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    name='potluckAddress'
                    value={potluck.potluckAddress}
                    type='text'
                    placeholder='Potluck Address'
                    onChange={handleChange}
                />
                <label class="block text-gray-700 text-sm font-bold mb-2">
                    Potluck City
                </label>
                <input 
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name='potluckCity'
                    value={potluck.potluckCity}
                    type='text'
                    placeholder='Potluck City'
                    onChange={handleChange}
                />
                <label class="block text-gray-700 text-sm font-bold mb-2">
                    State
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    name='potluckSt'
                    value={potluck.potluckSt}
                    type='text'
                    placeholder='Potluck State'
                    onChange={handleChange}
                />
                <label class="block text-gray-700 text-sm font-bold mb-2">
                    Zip Code
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" 
                    name='potluckZip'
                    // pattern='[0-9]*'
                    value={potluck.potluckZip}
                    type='text'
                    placeholder='Potluck Zip Code'
                    onChange={handleChange}
                />
                </div>
                <button class='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>Create Potluck!</button>
            </form>
        </div>
    )
}

export default AddPotluckForm;