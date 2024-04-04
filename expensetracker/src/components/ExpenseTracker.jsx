import React from 'react'
import TotalExpenseDisplay from './TotalExpenseDisplay'
import IncomeExpenseSummary from './IncomeExpenseSummary'
import ExpenseList from './ExpenseList'
import Buttons from './Buttons'
import '../styles/ExpenseTracker.css';

const ExpenseTracker = () => {
  return (
    <div className='ExpenseTracker'>
      <TotalExpenseDisplay />
      <IncomeExpenseSummary />
      <ExpenseList />
      <Buttons  />
    </div>
  )
}

export default ExpenseTracker
