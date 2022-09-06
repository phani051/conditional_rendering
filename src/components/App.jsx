import React from "react";
import Login from "./Login";

var loggedIn = false;
var userRegistered = false;

function App() {
  return (
    <div className="container">
      {/* {loggedIn ? <h1>Hello</h1> : <Login />} */}
      
      
      <Login registerinfo={userRegistered}/>

    </div>
  );
}

export default App;
