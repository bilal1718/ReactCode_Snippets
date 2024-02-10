
import React, { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import "./index.css";

export default function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const handleFetch = () => {
    setIsLoading(true);
    fetch("https://reqres.in/api/users?page=0")
      .then((respose) => respose.json())
      .then((respose) => {
        //  setUsers(respose.data)
        //  setIsLoading(false)
        //  Optional code to simulate delay
         setTimeout(() => {
           setUsers(respose.data);
           setIsLoading(false);
         }, 5000);
      })
      .catch(() => {
         setErrorMessage("Unable to fetch user list");
         setIsLoading(false);
      });
  };
  const renderUser = (
    <div className="userlist-container">
      {users.map((item, index) => (
        <div className="user-container" key={index}>
          <img src={item.avatar} alt="" />
          <div className="userDetail">
            <div className="first-name">{`${item.first_name}
                                   ${item.last_name}`}</div>
            <div className="last-name">{item.email}</div>
          </div>
        </div>
      ))}
    </div>
  );
  return (
    <div className="App">
      {isLoading ? <LoadingSpinner /> : renderUser}
      {errorMessage && <div className="error">{errorMessage}</div>}
      <button onClick={handleFetch} disabled={isLoading}>
        Fetch Users
      </button>
    </div>
  );
}
