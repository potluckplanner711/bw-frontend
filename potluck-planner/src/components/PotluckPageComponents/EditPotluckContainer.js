import React from 'react';
import { NavLink } from 'react-router-dom';
import { deleteEvent } from '../../actions/generalEventsActions';
import { useStateValue } from '../../hooks';


const EditPotluckContainer = ({ url, eventID, history }) => {
    const [, dispatch] = useStateValue();
    return (
        <div>
            <button className="bg-aqua text-white font-bold border rounded w-40 p-2 m-6 space-y-10 hover:bg-white hover:text-aqua hover:border-transparent">
                <NavLink to={`${url}/update`}>Edit</NavLink>
            </button>
            <button
                className="bg-aqua text-white font-bold border rounded w-40 p-2 m-6 space-y-10 hover:bg-white hover:text-aqua hover:border-transparent"
                onClick={e => {
                    e.preventDefault();
                    deleteEvent(dispatch, eventID);
                    history.push('/dashboard');
                }}>
                Delete
            </button>
        </div>
    );
};

export default EditPotluckContainer;
