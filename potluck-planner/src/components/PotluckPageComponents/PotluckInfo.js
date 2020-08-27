import React from 'react';
import moment from 'moment';
import { Icon } from 'semantic-ui-react';


const PotluckInfo = ({ event }) => {
    const eventTime = moment(event.data.time, 'HH:mm:ss a').format('LT');

    return (
        <div className="flex flex-col items-center">
            <h2 className="text-5xl font-extrabold">{event.data.event_name}</h2>
            <div className="flex flex-col bg-teal-100 rounded-lg w-1/3 p-4 m-4 items-center">
            <Icon name='calendar check' />
                <div className="text-2xl font-bold">
                    <Icon name='calendar' />
                    {moment(event.data.date).format('LL')}
                </div>
                <div className="text-2xl font-bold">
                    <Icon name='outline clock' />
                    {`${eventTime}`}
                </div>
                <div >
                    <Icon name='map marker' />
                    {event.data.address}, {event.data.city}, {event.data.state}
                </div>
            </div>
            <div className="text-2xl italic">
                <Icon name='newspaper outline' />
                {event.data.description}
            </div>
        </div>
    );
};

export default PotluckInfo;
