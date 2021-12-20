import React from 'react'
import {useAuth0} from '@auth0/auth0-react'
import JSONPretty from 'react-json-pretty';
const Profile = () => {
    const {user} = useAuth0();
    return (
        <div>
            <h1>this is you profile</h1>
            {JSON.stringify(user)}
            <div>
                <img src={user?.picture} alt={user?.name} />
                <h2>{user?.name}</h2>
                <p>{user?.email}</p>

            </div>
            <JSONPretty id="json-pretty" data={user}></JSONPretty>
        </div>
    )
}

export default Profile
