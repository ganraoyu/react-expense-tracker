import React, { useContext } from 'react';
import '../styles/IncomeExpenseSummary.css';
import ExpenseContext from './ExpenseContext';

const IncomeExpenseSummary = () => {
  const { expenses } = useContext(ExpenseContext);

  const totalIncome = expenses
    .filter(expense => expense.amount > 0)
    .reduce((total, expense) => total + expense.amount, 0)
    .toFixed(2);

  const totalExpense = expenses
    .filter(expense => expense.amount < 0)
    .reduce((total, expense) => total + Math.abs(expense.amount), 0)
    .toFixed(2);

  return (
    <div className='IncomeExpenseSummary'> 
      <hr/>
      <div className='ExpenseDiv'>
        <div className='BalanceDiv'>
          <p>INCOME</p>
          <p>${totalIncome}</p>
        </div>
        <div className='VerticalLine'></div>
        <div className='BalanceDiv'>
          <p>EXPENSE</p>
          <p>-${totalExpense}</p>
        </div>
     </div>
    </div>
  )
}

export default IncomeExpenseSummary;  