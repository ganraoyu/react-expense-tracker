import React, { useState } from 'react'
import '../styles/Buttons.css';

const Buttons = () => {
  const [inputValue, setInputValue] = useState('');
  const [expenses, setExpenses] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddClick = () => {
    setExpenses(prevExpenses => [...prevExpenses, { id: prevExpenses.length, amount: parseFloat(inputValue) }]);
    setInputValue('');
  };

  return (
    <div className='Buttons'>
      {expenses.map(expense => (
        <div className="expense-item" key={expense.id}>${expense.amount.toFixed(2)}</div>
      ))}
      <input placeholder='Enter Amount' value={inputValue} onChange={handleInputChange} />
      <button className='Add-Button' onClick={handleAddClick}>ADD</button>  
    </div>
  )
}

export default Buttons