import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import moment from 'moment';

import { useStateValue, useLocalStorage } from '../../hooks';

// import { HostButtons, GuestButtons } from './Buttons';

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
        <div className="bg-apricot w-56 h-48 text-center px-4">
            <NavLink to={`${url}/event/${event_id}`}>
                <h2 className="text-2xl font-extrabold">{event_name}</h2>
            </NavLink>
            <div className='text-center'>
                    <div className=''>
                        <span className=''>Organizer: </span>
                        {eventOrganizer && eventOrganizer.full_name}
                    </div>
                    <div className=''>
                        {city}, {state}
                    </div>
                    <div className=''>
                        {moment(date).format('LL')}
                    </div>
                    <div className=''>
                        {eventTime}
                    </div>
            </div>
        </div>
    );
};

export default withRouter(PotluckDetail);
