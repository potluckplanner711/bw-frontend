import React from 'react'
import { Link, Route } from 'react-router-dom';
import PotluckDetail from './PotluckDetail'


export default function PotluckCard(props) {
    const { potluck } = props

    console.log('PotluckCard' + props)
    return (
        <div>
            <Link to={`/potlucks/${potluck.potluckId}`}>
            <div className="bg-gray-300 m-2 p-2">
                <h2 className="text-lg font-bold">  
                    {potluck.potluckTitle}
                </h2>
                {potluck.potluckDate}
            </div>
            </Link>
            <Route path='/potlucks/:id'>
                <PotluckDetail potluck={potluck} />
            </Route>
            
        </div>
    )
}