import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios';
    
export default function AddItems() {

    const initialItemValues = {
        item: '',
     }
     const history = useHistory()

     const [item, setItem] = useState(initialItemValues);

     const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('endpoint', item)
            .then(res => {
                console.log(res)
                history.push('/')
            })
            .catch(err => {
                console.log(err)
            })
        setItem(initialItemValues)
    }

    const handleChange = (e) => {
        e.persist()
        setItem({
            ...item,
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
                    Item: 
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    name="Item"
                    value={item}
                    type='text'
                    placeholder='What are you bringing'
                    onChange={handleChange}
                />
                </div>
                <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>Add Item</button>
            </form>
        </div>
    )
}
