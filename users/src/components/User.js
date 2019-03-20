import React from 'react';

const User = props => {
    console.log(props);
    return (
        <div>
            {props.user.name}
            {props.user.bio}
        </div>
    )
}

export default User;