// Write your code at relevant places in the code below:

import React, { useState } from "react";
import './AddUser.css';
import Card from '../UI/Card'
import Button from '../UI/Button'
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {

    const [userName, setUserName] = useState("");
    const [userAge, setUserAge] = useState("");
    const [error, setError] = useState();

   
    const errorModalHandler = () =>{
        setError(null)
    }


    const usernameHandler = (event) => {
        setUserName(event.target.value);
    }

    const ageHandler = (event) => {
        setUserAge(event.target.value);
    }


    const addUserHandler = (event) => {
        event.preventDefault();

        if (userName.trim().length === 0 || userAge.trim().length === 0) {
            setError({ title: 'Invalid Input', message: 'Please enter a valid username and age (non-empty values).' })
            return;
        }

        if (userAge <= 0) {
            setError({ title: 'Invalid Input', message: 'Please enter a valid age (> 0).' })
            return;
        }
        // let userId = Math.random().toString();
        const usersdata = {
            name: userName, age: userAge
        }
        props.onFetchDataFromUser(usersdata);


        setUserName("");
        setUserAge("");
    };


    return (
        <>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorModalHandler} />}
            <Card className="input">
                <form onSubmit={addUserHandler} >
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" value={userName} onChange={usernameHandler} />
                    <label htmlFor="age">Age</label>
                    <input id="age" type="number" value={userAge} onChange={ageHandler} />
                    <Button type="submit">Add User</Button>
                </form>

            </Card>
        </>
    );
};

export default AddUser;
