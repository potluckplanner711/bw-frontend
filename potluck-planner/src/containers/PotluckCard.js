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
            <div className="flex flex-row space-x-12 space-y-8">
                <div className="w-1/2 flex-col">
                    <GuestsContainer
                        guests={event.data.guests}
                        organizer={event.data.organizer_id}
                        eventID={event.data.event_id}
                    />
                    {isHost && <GuestsSearch eventID={eventID} />}
                </div>
                <div className="w-1/2">
                    <ItemsContainer
                        recipes={event.data.recipes}
                        user_id={user_id}
                        eventID={event.data.event_id}
                        isHost={isHost}
                    />
                </div>
            </div>
        </div>
    );
};

export default withRouter(PotluckCard);
