import React from "react";
import './UsersList.css';
import Card from "../UI/Card";

const UsersList = (props) => {
    const users = props.users;
    console.log(users,"why");
    return (
        <Card className="users">
            <ul>
                {users.map(user => (
                
                    <li key={user.id}>
                        {user.name} ({user.age} years old)
                    </li>
                ))}
            </ul>
        </Card>
    )
}

export default UsersList;