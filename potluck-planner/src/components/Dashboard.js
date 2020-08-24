import React from 'react'

//Imported Components
import PotluckList from './PotluckDetail';
import PotluckDetail from './PotluckDetail';
import AddPotluckForm from './AddPotluckForm';




export default function Dashboard() {
    return (
        <div>
        Dashboard - page user comes to upon sign in. 

        Protected Route - user cannot see unless they are authenticated.

        Displays: 
        - Events Home Page
            -List of event cards
            -Potlucks where I’m organizer
            -Potlucks where I am a guest (invited, not rsvpd)
            -Potlucks where I am a guest (invited, rsvpd yes)
            - Link to Create A Potluck Form   <br />
            <br />
        ***ANYTHING BELOW THIS IS A NESTED COMPONENT ON DASHBOARD
        PotluckList.js
        <PotluckList />
        PotluckDetail.js
        <PotluckDetail />
        AddPotluckForm.js
        <AddPotluckForm />  
        </div>
        
    )
}
