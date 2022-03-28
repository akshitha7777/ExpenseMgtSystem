import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import Login from "./Login";

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  //const [profession, setProfession] = useState("");

  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);
  


  function handleFormSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password || !phone ) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("sanskarEmail", JSON.stringify(email));
      localStorage.setItem(
        "sanskarPassword",
        JSON.stringify(password)
      );
      console.log("Saved in Local Storage");

      setLogin(!login);
    }
  }

  function handleClick() {
    setLogin(!login);
  }

 
  

  return (
    <>
 
        <div>
          {" "}
          {login ? (
            <form onSubmit={handleFormSubmit}>
              <h3>Sign Up</h3>

              <div className="form-group">
                <table style={{margin: '0px 260px'}}>
                <tr><td><label>Full Name</label></td>
                <td><input
                  type="text"
                  className="form-control"
                  placeholder="Enter Full Name"
                  onChange={(event) => setName(event.target.value)}
                /></td></tr>

                <tr><td><label>Email</label></td>
                <td><input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)}
                /></td></tr>

                <tr><td><label>Password</label></td>
                <td><input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  onChange={(event) => setPassword(event.target.value)}
                /></td></tr>

                <tr><td><label>Phone No.</label></td>
                <td><input
                  type="Phone"
                  className="form-control"
                  placeholder="Enter contact no"
                  onChange={(event) => setPhone(event.target.value)}
                /></td></tr>
                </table>
              </div>

              
              <br></br>
              <button type="submit" className="btn btn-dark btn-lg btn-block">
                Sign up
              </button>
              
              <p onClick={handleClick} className="forgot-password text-right">
                Already registered{" "}log in?
                
              </p>
              {flag && (
                <Alert color="primary" variant="danger">
                  I got it you are in hurry! But every Field is important!
                </Alert>
              )}
            </form>
          ) : (
            <Login />//redirects to login page
          )}
        </div>
    
    </>
  );
}

export default Registration;