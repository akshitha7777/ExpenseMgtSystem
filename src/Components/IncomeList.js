import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import IncomeTransaction from "./IncomeTransaction";

const IncomeList = () => {
  const { incomeTransactions } = useContext(GlobalContext);

  console.log(incomeTransactions);

  return (
    <div className="transactions transactions-income">
      <h2>Income History</h2>
      <hr></hr>
      <ul className="list">
        {incomeTransactions.map(incomeTransaction => (
          <IncomeTransaction
            key={incomeTransaction.id}
            incomeTransaction={incomeTransaction}
          />
        ))}
      </ul>
    </div>
  );
};

export default IncomeList;
