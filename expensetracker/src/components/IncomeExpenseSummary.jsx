import React, { useState} from 'react'
import '../styles/IncomeExpenseSummary.css';
const IncomeExpenseSummary = () => {

  const [income, SetIncome] = useState("00.00");
  const [expense, SetExpense] = useState("00.00");
  return (
    <div className='IncomeExpenseSummary'> 
      <hr/>
      <div className='ExpenseDiv'>
        <div className='BalanceDiv'>
          <p >INCOME</p>
          <p>${income}</p>
        </div>
        <div className='VerticalLine'></div>
        <div className='BalanceDiv'>
          <p>EXPENSE</p>
          <p>${expense}</p> 
        </div>
     </div>
    </div>
  )
}

export default IncomeExpenseSummary