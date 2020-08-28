import React from 'react';
import GuestList from './GuestList';


const GuestsContainer = ({ guests, organizer, eventID }) => {
    return (
        <div className="flex flex-col items-center bg-apricot rounded p-4">
            <h3 className="text-3xl font-extrabold">Guests</h3>
            {guests.map(guest => {
                return (
                    <GuestList
                        key={guest.user_id}
                        guest={guest}
                        organizer={organizer}
                        eventID={eventID}
                    />
                );
            })}
        </div>
    );
};

export default GuestsContainer;
