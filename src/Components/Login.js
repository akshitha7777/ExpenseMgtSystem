import React, { useState } from "react";
import { Alert } from "react-bootstrap";
// import Home from "./Home";

// // import { Header } from './Header';
// // import { Balance } from './Balance';
// // import { IncomeExpenses } from './IncomeExpenses';
// // import { TransactionList } from './TransactionList';
// // import { AddTransaction } from './AddTransaction';
// // import {Splitwise} from './Splitwise'
// // import {Graph} from 'react-d3-graph'
// import { GlobalProvider } from './GlobalState';
function Login() {
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");

  const [flag, setFlag] = useState(false);

  const [home, setHome] = useState(true);

  function handleLogin(e) {
    e.preventDefault();
    let pass = localStorage
      .getItem("sanskarPassword")
      .replace(/"/g, "");
    let mail = localStorage.getItem("sanskarEmail").replace(/"/g, "");
    

    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log("EMPTY");
    } 
    else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } 
    else {
      setHome(!home);
      setFlag(false);
    }
  }

  return (
    <div>
      {home ? (
        <form onSubmit={handleLogin}>
          <h3>Log In</h3>
          <div className="form-group">
            <table style={{margin:'0px 260px'}}>
            <tr><td><label style={{fontSize:'20px', paddingRight:'5px'}}>Email</label></td>
            <td><input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(event) => setEmaillog(event.target.value)}
            /></td></tr>
            <tr><td><label style={{fontSize:'20px', paddingRight:'5px'}}>Password</label></td>
            <td><input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(event) => setPasswordlog(event.target.value)}
            /></td></tr>
            </table>
          </div>
        <br></br>
          <br></br>
          <button type="submit" className="btn btn-dark btn-lg btn-block">
            Login
          </button>

          {flag && (
            <Alert color="primary" variant="warning">
              Fill correct info else keep trying.
            </Alert>
          )}
        </form>
      ) : (
        //  <Splitwise />

       <></>
      )}
    </div>
  );
}

export default Login;