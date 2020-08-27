import React, { useState, useEffect } from 'react';

import { UPDATE_SEARCH } from '../../actions/generalEventsActions';
import { useStateValue } from '../../hooks/useStateValue';


export const SearchPotluck = () => {
    const [search, setSearch] = useState('');
    const [{ events }, dispatch] = useStateValue();

    useEffect(() => {
        dispatch({ type: UPDATE_SEARCH, payload: search });
    }, [dispatch, search]);

    return (
        <input
            type='text'
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder='Search your events...'
            disabled={!events.data.length}
        />
    );
};
