import React, { useContext } from 'react';
import ExpenseContext from './ExpenseContext';
import '../styles/TotalExpenseDisplay.css';

const TotalExpenseDisplay = () => {
  const { totalBalance, expenses } = useContext(ExpenseContext);
  const totalExpenseAmount = expenses.reduce((total, expense) => total + expense.amount, 0);

  return (
    <div className='TotalExpenseDisplay'>
      <div className='YourBalance'>YOUR BALANCE</div>
      <div className='Balance'>
        {totalExpenseAmount < 0 
          ? "-$" + Math.abs(totalExpenseAmount.toFixed(2)) 
          : totalExpenseAmount > 0 
            ? "$" + totalExpenseAmount.toFixed(2) 
            : "$0.00"}
      </div>
    </div>
  )
}

export default TotalExpenseDisplay;