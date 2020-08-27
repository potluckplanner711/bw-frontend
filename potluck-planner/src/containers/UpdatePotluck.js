import React, { useState, useEffect } from 'react';
import { useStateValue } from '../hooks/useStateValue';
import { updateEvent } from '../actions';
import { getEvent } from '../actions';
import moment from 'moment';

const UpdatePotluck = props => {
    const today = moment(new Date()).format('YYYY-MM-DD');
    const [editEvent, setEvent] = useState({
        event_name: '',
        date: '',
        time: '',
        description: '',
        address: '',
        city: '',
        state: '',
        event_id: ''
    });

    const [, dispatch] = useStateValue();
    let eventID = props.match.params.eventID;

    useEffect(() => {
        getEvent(dispatch, eventID).then(res => {
            const date = moment(res.data.date).format('YYYY-MM-DD');
            setEvent({ ...res.data, date: date });
        });
    }, [dispatch, eventID]);

    const eventInputHandler = e => {
        const name = e.target.name;
        const value = e.target.value;
        setEvent({ ...editEvent, [name]: value });
    };
    
    return (
        <div>
            <form className="flex flex-col items-center"
                onSubmit={e => {
                    e.preventDefault();
                    updateEvent(dispatch, eventID, {
                        event_name: editEvent.event_name,
                        date: editEvent.date,
                        time: editEvent.time,
                        description: editEvent.description,
                        address: editEvent.address,
                        city: editEvent.city,
                        state: editEvent.state,
                        event_id: editEvent.event_id
                    });
                    setEvent({
                        event_name: '',
                        date: '',
                        time: '',
                        description: '',
                        address: '',
                        city: '',
                        state: '',
                    });
                    props.history.push(`/dashboard/event/${eventID}`);
                }}>
                <legend className="text-4xl text-center font-extrabold" >Update Event</legend>
                <input className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg px-4 py-4 my-3 block w-4/5 appearance-none leading-normal"
                    required
                    name='event_name'
                    type='text'
                    value={editEvent.event_name}
                    onChange={event => eventInputHandler(event)}
                    placeholder='Event Name'
                />
                <h4>Date and Time:</h4>
                <div className="flex space-x-6">
                    <input
                        className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg px-4 py-4 my-3 block .w-3/4 appearance-none leading-normal"
                        required
                        name='date'
                        type='date'
                        min={today}
                        value={editEvent.date}
                        onChange={event => eventInputHandler(event)}
                    />
                    <input
                        className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg px-4 py-4 my-3 block .w-3/4 appearance-none leading-normal"
                        required
                        name='time'
                        type='time'
                        value={editEvent.time}
                        onChange={event => eventInputHandler(event)}
                    />
                </div>
                <h4>Location:</h4>
                <input
                    className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg px-4 py-4 my-3 block w-4/5 appearance-none leading-normal"
                    required
                    name='address'
                    type='text'
                    value={editEvent.address}
                    onChange={event => eventInputHandler(event)}
                    placeholder='Street Address'
                />
                <input
                    className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg px-4 py-4 my-3 block w-4/5 appearance-none leading-normal"
                    required
                    name='city'
                    type='text'
                    value={editEvent.city}
                    onChange={event => eventInputHandler(event)}
                    placeholder='City'
                />
                <input
                    className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg px-4 py-4 my-3 block w-4/5 appearance-none leading-normal"
                    required
                    name='state'
                    type='text'
                    value={editEvent.state}
                    onChange={event => eventInputHandler(event)}
                    placeholder='State'
                />
                <input
                    className="bg-white focus:outline-none focus:shadow-outline focus:apricot border border-gray-300 rounded-lg px-4 py-10 my-3 block w-4/5 appearance-none leading-normal"
                    required
                    name='description'
                    type='text'
                    value={editEvent.description}
                    onChange={event => eventInputHandler(event)}
                    placeholder='Description'
                />
                <button className="bg-white text-xl focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg px-4 py-4 my-3 block w-4/5 appearance-none leading-normal hover:bg-apricot"
                    type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default UpdatePotluck;
