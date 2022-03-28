import './App.css';
import Splitwise from './Components/Splitwise';
import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Registration from './Components/Registration';
import Login from './Components/Login';
import  Navbar  from './Components/Navbar';
import Header from "./Components/Header";
import Balance from "./Components/Balance";
import IncomeList from "./Components/IncomeList";
import ExpenseList from "./Components/ExpenseList";
import AddTransaction from "./Components/AddTransaction";
import { Homepage } from './Components/Homepage';
import { GlobalContextProvider } from "./context/GlobalState";

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
      <Switch>

      <Route path="/home">
        <Homepage/>
        </Route>

      <Route path="/register">
        <Registration/>
        </Route>
    
        <Route path="/login">
        <Login/>
        </Route>

      <Route path="/expense">
      <GlobalContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <Balance />
          <IncomeList />
          <ExpenseList />
          <AddTransaction />
        </div>
      </div>
    </GlobalContextProvider>
        </Route>
        
      <Route path="/split">
        <Splitwise/>
        </Route>
      </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
