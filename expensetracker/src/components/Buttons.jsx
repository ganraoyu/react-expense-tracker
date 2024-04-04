import React, { useContext, useState } from 'react';
import ExpenseContext from './ExpenseContext';
import '../styles/Buttons.css';

const Buttons = () => {
  const { totalBalance, setTotalBalance, expenses, setExpenses } = useContext(ExpenseContext);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddClick = () => {
    const newExpense = { id: expenses.length, amount: parseFloat(inputValue) };
    setExpenses(prevExpenses => [...prevExpenses, newExpense]);
    setTotalBalance(prevTotalBalance => prevTotalBalance + newExpense.amount);
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

export default Buttons;