import React from 'react';
import { Icon } from 'semantic-ui-react';
import { useStateValue } from '../../hooks';
import { addGuest } from '../../actions/specificEventActions';


const User = ({ user, eventID }) => {
    const [, dispatch] = useStateValue();

    return (
        <div
            onClick={() =>
                addGuest(dispatch, eventID, {
                    user_id: user.user_id,
                    attending: false,
                })
            }
            aria-label="potential guest container">
            <Icon name='user' />
            <span aria-label='full name'>{user.full_name}</span>
            <span aria-label='username'>{user.username}</span>
        </div>
    );
};

export default User;
