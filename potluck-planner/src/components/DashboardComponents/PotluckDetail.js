import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import moment from 'moment';

import { useStateValue, useLocalStorage } from '../../hooks';

import { HostButtons, GuestButtons } from './Buttons';

const PotluckDetail= ({ event, match, organizers }) => {
    const {
        event_name,
        organizer_id,
        date,
        time,
        city,
        state,
        event_id,
    } = event;
    const { url } = match;
    const [, dispatch] = useStateValue();
    const [user_id] = useLocalStorage('user_id');
    
    let eventOrganizer =
        organizers[0] &&
        organizers.filter(user => user.user_id === organizer_id)[0];
    let isHost = user_id === organizer_id;
    const eventTime = moment(time, 'HH:mm:ss a').format('LT');

    return (
        <div>
            <div>
                <NavLink to={`${url}/event/${event_id}`}>
                    <h2 className="text-2xl font-extrabold">{event_name}</h2>
                </NavLink>
                <button className="bg-gray-400">
                    {isHost ? (
                        <HostButtons event={event} dispatch={dispatch} />
                    ) : (
                        <GuestButtons
                            event={event}
                            dispatch={dispatch}
                            user_id={user_id}
                        />
                    )}
                </button>
            </div>
            <div className='text-center'>
                <div>
                    <div className=''>
                        <span className='card-field'>Organizer: </span>
                        {eventOrganizer && eventOrganizer.full_name}
                    </div>
                    <div className='card-location'>
                        {city}, {state}
                    </div>
                </div>
                <div>
                    <div className='card-date'>
                        {moment(date).format('LL')}
                    </div>
                    <div className='card-time'>
                        {eventTime}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withRouter(PotluckDetail);
