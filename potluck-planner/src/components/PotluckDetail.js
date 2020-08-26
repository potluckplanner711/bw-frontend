import React from "react";
import { useParams } from "react-router-dom";
import data from '../data';

const potlucks = data;


export default function PotluckDetail() {
    const { id, subId } = useParams();

    const potluck = potlucks
    .find(({ id }) => id === id)
    .attendees.find(({ id }) => id === subId);

    console.log(`You got to Potluck Detail`)

    return (
        <div>
            <div className="container bg-gray-300">
                <h2 className="text-lg font-bold">{potluck.name}:</h2>
                <p>{potluck.url}</p>
                <p>{potluck.description}</p>
            </div>
            {/* <div>
                <h3>{potluck.attendees.map(person => {
                    return `${person.firstName} ${person.lastName}, `
                })}</h3>
            </div> */}
            <div>
                {/* Todo list? */}
            </div>
        </div>
    )
}