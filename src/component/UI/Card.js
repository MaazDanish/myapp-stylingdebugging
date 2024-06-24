import React from "react";
import './Card.css';

const Card = (props) => {
    const   classees = 'card ' + props.className;
    return (
        // <div className={`card ${props.className}`}>
        <div className={classees}>
            {props.children}
        </div>
    );
}

export default Card;
