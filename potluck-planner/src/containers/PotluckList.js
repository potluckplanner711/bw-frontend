import React, { useEffect } from 'react';

import { getUsers } from '../actions';
import { getEvents } from '../actions';
import { useStateValue, useLocalStorage } from '../hooks';
import PotluckDetail from '../components/DashboardComponents/PotluckDetail';


const PotluckList = () => {
    const [user_id] = useLocalStorage('user_id');
    const [{ events, users }, dispatch] = useStateValue();
    const { errorMessage, data } = events;

    useEffect(() => {
        getEvents(dispatch, user_id);
    }, [dispatch, user_id]);

    useEffect(() => {
        getUsers(dispatch);
    }, [dispatch]);

    const checkOrganizers = id => {
        let matches = organizers.filter(user =>
            user.full_name
                .toLowerCase()
                .includes(events.searchTerm.toLowerCase())
        );
        return Boolean(matches.map(match => match.user_id === id).length);
    };
    
    let organizers = data.map(event =>
        users.data.find(user => {
            if (user.user_id === event.organizer_id)
                return { name: user.full_name, id: user.user_id };
        })
    );

    let filteredData = data.filter(
        event =>
            event.event_name
                .toLowerCase()
                .includes(events.searchTerm.toLowerCase()) ||
            checkOrganizers(event.organizer_id)
    );
    let eventsToMap = events.searchTerm ? filteredData : data;

    return (
        <section className=" flex flex-col items-center">
            <h2 className="text-6xl font-extrabold">My Potlucks</h2>
            <div className="flex flex-row flex-wrap flex-none items-end space-x-8 space-y-6 justify-center">
                {errorMessage && data.length < 1 && (
                    <h2 className='text-red-600'>
                        Time to start creating events!
                    </h2>
                )}
                    
                    {data.length > 0 &&
                        eventsToMap.map(event => (
                        <div class="flex items-start max-w-sm rounded overflow-hidden shadow-lg p-3 m-3">
                            <PotluckDetail
                                event={event}
                                key={event.event_id}
                                organizers={organizers}
                            />
                        </div>
                    ))}
            </div>
        </section>
    );
};

export default PotluckList;
