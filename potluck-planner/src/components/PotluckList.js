import React, { useState, useEffect } from 'react'
import PotluckDetail from './PotluckDetail';


const initialPotluckList =
[
    {
        potluckId: 2,
        potluckTitle: "Kickass Potluck",
        potluckDate: "1/1/2021",
        potluckAddress: "555 W St",
        potluckCity: "Town",
        potluckSt: "St",
        potluckZip: "55555",
        attendees: 
        [
            {
                firstName: "First",
                lastName: "Last",
                type: "ORGANIZER",
                going: true
            },
            {
                firstName: "Mr",
                lastName: "Sir",
                type: "GUEST",
                going: true,
                item: "Salad"
            },
            {
                firstName: "Ms",
                lastName: "Sir",
                type: "GUEST",
                going: true,
                item: "Hotdogs"
            },
            {
                firstName: "Bobby",
                lastName: "Sir",
                type: "GUEST",
                going: true
            }
        ],
        items: 
        [
            {
                itemId: 3,
                itemTitle: "Salad",
                taken: true
            },
            {
                itemId: 4,
                itemTitle: "Hotdogs",
                taken: true
            },
            {
                itemId: 5,
                itemTitle: "Mac and Cheese",
                taken: false
            }
        ]
    },
]

const fakeAxiosGet = () => {
    return Promise.resolve({ status: 200, success: true, data: initialPotluckList })
    console.log(fakeAxiosGet());
  }
  console.log(fakeAxiosGet())
export default function PotluckList() {
    const [potlucks, setPotlucks ] = useState([])

    useEffect(() => {
        fakeAxiosGet('fakeapi.com').then(res => setPotlucks(res.data))
      }, [])


    return (
        <div>
            <header><h1>My Potlucks</h1></header>
            <div>
                {
                potlucks.map(potluck => {
                    return (
                        <PotluckDetail potluck={potluck}/>
                    )
                })
                }
            </div>
        </div>
    )
}
