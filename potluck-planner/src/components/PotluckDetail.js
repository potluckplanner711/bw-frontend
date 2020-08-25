import React from 'react'



export default function PotluckDetail(props) {
    const { potluck } = props
    

    return (
        <div>
            <div className="container bg-gray-300">
                <h2 className="text-lg font-bold">{potluck.potluckTitle}:</h2>
                <p>{potluck.potluckDate}</p>
                <p>{potluck.potluckAddress}</p>
                <p>{potluck.potluckCity}</p>
                <p>{potluck.potluckSt}</p>
                <p>{potluck.potluckZip}</p>
            </div>
            <div>
                <h3>{potluck.attendees.map(person => {
                    return `${person.firstName} ${person.lastName}, `
                })}</h3>
            </div>
            <div>
                {/* Todo list? */}
            </div>
        </div>
    )
}