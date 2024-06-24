import React from "react";
import './UsersList.css';

const UsersList = (props) => {
    const users = props.users;
    console.log(users);
    return (
        <div className="users">

            <ul>
                {users.map((user, index) => (
                    <li key={index}>
                        <span>{user.name}</span> <span> ({user.age} years old)</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UsersList;