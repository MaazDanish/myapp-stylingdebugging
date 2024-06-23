import React, { useState } from "react";
import Modal from "react-modal";

import './AddUser.css'
const AddUser = (props) => {
    const [userName, setUserName] = useState("");
    const [userAge, setUserAge] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState("");



    const userNameHandler = (event) => {
        // console.log(event.target.value);
        setUserName(event.target.value);
    }
    const userAgeHandler = (event) => {
        // console.log(event.target.value);
        setUserAge(event.target.value);
    }

    const userFormHandler = (event) => {
        event.preventDefault();

        if (userName.trim().length === 0 || userAge.trim().length === 0) {
            console.log("hello both");
            setModalMessage("Please enter a valid name and age (non-empty values).");
            setIsModalOpen(true);
            return;
        }

        if (+userAge < 0) {
            console.log("hello frm less than zero");
            setModalMessage("Please enter a valid age (> 0).");
            setIsModalOpen(true);
            return;
        }

        const userData = {
            name: userName,
            age: userAge
        }
        // console.log(userData);
        props.onfetchUserData(userData);
        setUserName("");
        setUserAge("");

    }

    const closeModal = () => {
        setIsModalOpen(false);
    }
    return (
        <>
            <form onSubmit={userFormHandler} id="field-form">
                <div className="new-expense__controls">
                    <div className="new-expense__controls">
                        <label htmlFor=""> Username:</label>
                        <input type="text" id="username" value={userName} onChange={userNameHandler}></input>
                    </div>
                    <div className="new-expense__controls">
                        <label htmlFor="age">Age (years)</label>
                        <input type="text" id="age" value={userAge} onChange={userAgeHandler}></input>
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add User</button>
                </div>

            </form>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Error Modal"
                className="modal"
                overlayClassName="modal-overlay"
            >
                <h2>Invalid input</h2>
                <p>{modalMessage}</p>
                <button onClick={closeModal}>OK</button>
            </Modal>
        </>
    )
}

export default AddUser;