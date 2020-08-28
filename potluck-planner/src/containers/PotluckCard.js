import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import { useStateValue, useLocalStorage } from '../hooks';
import { getEvent } from '../actions';

import PotluckInfo from '../components/PotluckPageComponents/PotluckInfo';
import GuestsContainer from '../components/PotluckPageComponents/GuestsContainer';
import EditPotluckContainer from '../components/PotluckPageComponents/EditPotluckContainer';
import ItemsContainer from '../components/PotluckPageComponents/ItemsContainer';
import GuestsSearch from '../components/PotluckPageComponents/GuestsSearch';

const PotluckCard = ({ match, history }) => {
    let eventID = match.params.eventID;
    const { url } = match;
    const [{ event }, dispatch] = useStateValue();
    const [user_id] = useLocalStorage('user_id');

    useEffect(() => {
        getEvent(dispatch, eventID);
    }, [dispatch, eventID]);

    const isHost = user_id === event.data.organizer_id;

    return (
        <div className="flex flex-col items-center w-full">
            <div className="w-full">
                <PotluckInfo event={event} />
            </div>
                {isHost && (
                    <EditPotluckContainer 
                        url={url}
                        eventID={event.data.event_id}
                        history={history}
                    />
                )}
            <div className="flex flex-row w-10/12 justify-around">
                <div className='w-2/5 rounded'>
                    <div className=''>
                        <GuestsContainer
                            guests={event.data.guests}
                            organizer={event.data.organizer_id}
                            eventID={event.data.event_id}
                        />
                    </div>
                    <div>
                        {isHost && <GuestsSearch eventID={eventID} />}
                    </div>
                </div>
                <ItemsContainer
                    recipes={event.data.recipes}
                    user_id={user_id}
                    eventID={event.data.event_id}
                    isHost={isHost}
                />
            </div>
        </div>
    );
};

export default withRouter(PotluckCard);
