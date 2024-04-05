import React, { useState, useContext } from 'react';
import '../styles/IncomeExpenseSummary.css';
import ExpenseContext from './ExpenseContext';

const IncomeExpenseSummary = () => {
  const [income, SetIncome] = useState("00.00");
  const [expense, SetExpense] = useState("00.00");

  const { totalBalance, setTotalBalance, expenses, setExpenses } = useContext(ExpenseContext);

  const totalExpenseAmount = expenses.reduce((total, expense) => total + expense.amount, 0);

  return (
    <div className='IncomeExpenseSummary'> 
      <hr/>
      <div className='ExpenseDiv'>
        <div className='BalanceDiv'>
          <p>INCOME</p>
          <p>${totalExpenseAmount > 0 ? totalExpenseAmount.toFixed(2) : "0.00"}</p>
        </div>
        <div className='VerticalLine'></div>
        <div className='BalanceDiv'>
          <p>EXPENSE</p>
          <p>{totalExpenseAmount < 0 ? "-$" + Math.abs(totalExpenseAmount.toFixed(2)) : "0.00"}</p>
        </div>
     </div>
    </div>
  )
}

export default IncomeExpenseSummary;  