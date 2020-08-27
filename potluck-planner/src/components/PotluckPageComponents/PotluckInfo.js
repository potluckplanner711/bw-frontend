import React from 'react';
import moment from 'moment';
import { Icon } from 'semantic-ui-react';
import tablepic from '..//../img/spencer-davis-vJsj-hgOEG0-unsplash.jpg'


const PotluckInfo = ({ event }) => {
    const eventTime = moment(event.data.time, 'HH:mm:ss a').format('LT');

    return (
        <div className="flex flex-col items-center bg-apricot bg-opacity-50 w-10/12 mt-8 mx-auto rounded-lg pb-4">
            <h2 className="text-5xl font-extrabold font-sans text-center m-4">{event.data.event_name}</h2>
            <div className="flex flex-col bg-teal-100 rounded-lg w-2/3 lg:w-3/6 p-4 m-4 items-center">
            <Icon name='calendar check' />
                <div className="text-2xl font-bold">
                    <Icon name='calendar' />
                    {moment(event.data.date).format('LL')}
                </div>
                <div className="text-2xl font-bold">
                    <Icon name='outline clock' />
                    {`${eventTime}`}
                </div>
                <div className="text-center mt-6">
                    <Icon name='map marker' />
                    {event.data.address} 
                    <br />
                    {event.data.city}
                    <br />
                    {event.data.state}
                </div>
            </div>
            <div className="text-xl text-center mx-4 mb-6">
                <Icon name='newspaper outline' />
                {event.data.description}
            </div>
            <img src={tablepic} className='w-2/3 mb-6'/>
        </div>
    );
};

export default PotluckInfo;
