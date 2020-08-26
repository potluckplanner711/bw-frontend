import React from 'react'
import data from "../data";
import AddGuest from './AddGuest'

const potlucks = data;


export default function GuestList() {


    const potluck= potlucks.find(({ id }) => {
        return id === id;
      });
    return (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="font-bold">Guests</h2>
            <ul>
            {potluck.attendees.map(({ firstname, lastname, id }) => (
                <li key={id}>{firstname} {lastname}</li>
        ))}
      </ul>
              <AddGuest />
        </div>
    )
}
