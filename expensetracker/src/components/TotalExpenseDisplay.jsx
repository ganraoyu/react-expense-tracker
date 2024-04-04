import React, { useState } from 'react'
import '../styles/TotalExpenseDisplay.css';
const TotalExpenseDisplay = () => {

  const [ totalBalance, setTotalBalance ] = useState(0)
  return (
    <div className='TotalExpenseDisplay'>
      <div className='YourBalance'>YOUR BALANCE</div>
      <div className='Balance'>${totalBalance}</div>
    </div>
  )
}

export default TotalExpenseDisplay
