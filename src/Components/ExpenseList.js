import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import ExpenseTransaction from "./ExpenseTransaction";

const ExpenseList = () => {
  const { expenseTransactions } = useContext(GlobalContext);

  console.log(expenseTransactions);

  return (
    <div className="transactions transactions-expense">
      <h2>Expense History</h2>
      <hr></hr>
      <ul className="list">
        {expenseTransactions.map(expenseTransaction => (
          <ExpenseTransaction
            key={expenseTransaction.id}
            expenseTransaction={expenseTransaction}
          />
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
