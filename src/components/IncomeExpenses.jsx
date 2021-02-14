import React ,{useContext} from 'react';
import {GlobalContext} from '../context/Globalstate'

const IncomeExpenses = () => {
  const{transactions}=useContext(GlobalContext);
  const amounts=transactions.map(transaction => transaction.amount);
  const Income=amounts.filter(item => item > 0)
  .reduce((acc, item) => (acc += item), 0)
  .toFixed(2);
  const expenses=amounts.filter(item => item < 0)
  .reduce((acc, item) => (acc += item), 0)
  .toFixed(2);
    return (
        <div className="inc-exp-container">
        <div>
        <h4>Income</h4>
<p className="money plus">{Income}</p>
      </div>
      <div>
        <h4>Expense</h4>
<p className="money minus">{expenses}</p>
      </div>
        </div>
    )
}

export default IncomeExpenses
