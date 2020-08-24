import React from 'react'
import { useHistory } from 'react-router-dom'
//Imported Components
import PotluckList from './PotluckDetail';
import PotluckDetail from './PotluckDetail';
import AddPotluckForm from './AddPotluckForm';




export default function Dashboard() {
    const history = useHistory();
    
    return (
        <div>
            <h2>Dashboard</h2>
                <section>
                    <div>
                    <h3>Your Potlucks</h3>
                        <p>
                            Here is where you'll find a list of potlucks that youre organizing or attending
                        </p>
                        <button 
                            onClick={() => history.push("/courses")}
                        >
                            View My Potlucks
                        </button>
                    </div>
                    <div>
                    <h3>Potluck Invitations</h3>
                        <p>
                            Here is where you'll find a list of potlucks that you were invited to.
                        </p>
                        <button 
                            onClick={() => history.push("/courses")}
                        >
                            View My RSVPs
                        </button>
                    </div>
                </section>
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
