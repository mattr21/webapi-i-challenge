import React from 'react';
import User from './User.js';

const UsersList = props => {
    return (
        <div>
            {props.users.map(user => {
                return <User key={user.id} user={user}/>
            })}
        </div>
    )
}

export default UsersList;