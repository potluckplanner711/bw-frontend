import React from 'react'
import RSVP from './RSVP';

export default function PotluckDetail() {
    return (
        <div>
            Event Data:
            - Headline - edit functionality??
            - Date
            - Time
            - Location
            - Event creator
            - RSVP Buttons (Yes, No)
            - RSVP Component 
                - RSVP
                    -[users who are coming]
                    -Button to RSVP to event
                    -Food List - add/check/delete
                    -Form input to enter in new items
                    -List of items
                    -Ability to check item and have it assigned based on currently logged in user id
            <br />**Nested within this is RSVP
            <RSVP />
        </div>
    )
}
