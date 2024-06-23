import React, { useState } from "react";
import AddUser from "./component/Users/AddUser";
import ItemList from "./component/ItemList/ItemList";

const dataArray = [
  
];

function App() {
  const [data, setData] = useState(dataArray);

  const fetchingUserDataHandler = (dataFromForm) => {
    // console.log(dataFromForm);
    setData(prevData => {
      return [dataFromForm,...prevData]
    })

  }
  // console.log(data);

  return (
    <div>
      <AddUser onfetchUserData={fetchingUserDataHandler} />
      <ItemList userDataFromApp={data}/>
    </div>
  );
}

export default App;