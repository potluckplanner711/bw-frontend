import React from 'react'
import data from "../data";

import AddItems from './AddItems'

const potlucks = data;


export default function ItemList() {


    const potluck= potlucks.find(({ id }) => {
        return id === id;
      });
    return (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="font-bold">Items</h2>
            <ul>
            {potluck.attendees.map(({ item, id }) => (
                <li key={id}>{item}</li>
        ))}
      </ul>
            <AddItems />
        </div>
    )
}