import React, { useContext } from 'react';
import ExpenseContext from './ExpenseContext';
import '../styles/TotalExpenseDisplay.css';

const TotalExpenseDisplay = () => {
  const { totalBalance } = useContext(ExpenseContext);

  return (
    <div className='TotalExpenseDisplay'>
      <div className='YourBalance'>YOUR BALANCE</div>
      <div className='Balance'>${totalBalance.toFixed(2)}</div>
    </div>
  )
}

export default TotalExpenseDisplay;