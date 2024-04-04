// TotalExpenseDisplay.jsx
import React from 'react'
import '../styles/TotalExpenseDisplay.css';

const TotalExpenseDisplay = ({ totalBalance }) => {
  return (
    <div className='TotalExpenseDisplay'>
      <div className='YourBalance'>YOUR BALANCE</div>
      <div className='Balance'>${totalBalance}</div>
    </div>
  )
}

export default TotalExpenseDisplay