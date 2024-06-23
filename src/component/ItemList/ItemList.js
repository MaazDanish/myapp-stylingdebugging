import React, { useState } from "react";

const ItemList = (props) => {
    console.log(props.userDataFromApp);
    const data = props.userDataFromApp;



    return (
        <div>
            <div>
                    {data.map(userdata => {
                        return (
                            <>
                            <p>{userdata.name} ({userdata.age} years old)</p>
                            </>
                            )
                    })}
            </div>
        </div>
    )
}

export default ItemList;