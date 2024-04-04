import React from 'react'
import '../styles/IncomeExpenseSummary.css';
const IncomeExpenseSummary = () => {
  return (
    <div className='IncomeExpenseSummary'> 
      <hr/>
      <div className='ExpenseDiv'>
        <div className='BalanceDiv'>
          <p >INCOME</p>
          <p>$100.00</p>
        </div>
        <div className='BalanceDiv'>
          <p >EXPENSE</p>
          <p>$50.00</p>
        </div>
     </div>
    </div>
  )
}

export default IncomeExpenseSummary
