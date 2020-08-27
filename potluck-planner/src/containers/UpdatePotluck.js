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
            <form
                style={{ width: '550px', margin: '0px' }}
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
                <legend>Update Event</legend>
                <input
                    required
                    name='event_name'
                    type='text'
                    value={editEvent.event_name}
                    onChange={event => eventInputHandler(event)}
                    placeholder='Event Name'
                />
                <input
                    required
                    name='date'
                    type='date'
                    min={today}
                    value={editEvent.date}
                    onChange={event => eventInputHandler(event)}
                />
                <input
                    required
                    name='time'
                    type='time'
                    value={editEvent.time}
                    onChange={event => eventInputHandler(event)}
                />
                <input
                    required
                    name='description'
                    type='text'
                    value={editEvent.description}
                    onChange={event => eventInputHandler(event)}
                    placeholder='Description'
                />
                <input
                    required
                    name='address'
                    type='text'
                    value={editEvent.address}
                    onChange={event => eventInputHandler(event)}
                    placeholder='Street Address'
                />
                <input
                    required
                    name='city'
                    type='text'
                    value={editEvent.city}
                    onChange={event => eventInputHandler(event)}
                    placeholder='City'
                />
                <input
                    required
                    name='state'
                    type='text'
                    value={editEvent.state}
                    onChange={event => eventInputHandler(event)}
                    placeholder='State'
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default UpdatePotluck;
