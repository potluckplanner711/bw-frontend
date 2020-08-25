import React from 'react'



export default function PotluckDetail(props) {
    const { potluck } = props

    // const foodToggle = (e) => {
    //     if(potluck.items) {
    //         return {...item, !item.taken}
    //     } else {
    //         return
    //     }
    // }

    return (
        <div>
            <div>
                <p>{potluck.potluckTitle}:</p>
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