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
            <form onSubmit={handleSubmit}>
                <input 
                    name='potluckTitle'
                    value={initPotluck.potluckTitle}
                    type='text'
                    placeholder='Potluck Name'
                    onChange={handleChange}
                />
                <br />
                <input 
                    name='potluckDate'
                    value={initPotluck.potluckDate}
                    type='text'
                    placeholder='Potluck Date'
                    onChange={handleChange}
                />
                <br />
                <input 
                    name='potluckAddress'
                    value={initPotluck.potluckAddress}
                    type='text'
                    placeholder='Potluck Address'
                    onChange={handleChange}
                />
                <br />
                <input 
                    name='potluckCity'
                    value={initPotluck.potluckCity}
                    type='text'
                    placeholder='Potluck City'
                    onChange={handleChange}
                />
                <br />
                <input 
                    name='potluckSt'
                    value={initPotluck.potluckSt}
                    type='text'
                    placeholder='Potluck State'
                    onChange={handleChange}
                />
                <br />
                <input 
                    name='potluckZip'
                    value={initPotluck.potluckZip}
                    type='text'
                    placeholder='Potluck Zip Code'
                    onChange={handleChange}
                />
                <br />
                <button>Create Potluck!</button>
            </form>
        </div>
    )
}

export default AddPotluckForm;