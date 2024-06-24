import React, { useState } from "react";
import AddUser from "./component/Users/AddUser";
import UsersList from "./component/Users/UsersList";


const userData = []

function App() {
  const [isUserData, setIsUserData] = useState(userData);


  const fetchingDataFromUserComponent = (data) => {
    // console.log(data);
    const name = data.name;
    const age = data.age;
    setIsUserData((prevdata) => {
      return [...prevdata, { name, age, id: Math.random().toString() }]
    })
  }
  // console.log(isUserData);

  return (
    <div>
      <AddUser onFetchDataFromUser={fetchingDataFromUserComponent} />
      <UsersList users={isUserData}></UsersList>
    </div>
  );
}

export default App;
