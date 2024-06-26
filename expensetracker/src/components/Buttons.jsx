import React, { useContext, useState } from 'react';
import ExpenseContext from './ExpenseContext';
import '../styles/Buttons.css';

const Buttons = () => {
  const { totalBalance, setTotalBalance, expenses, setExpenses } = useContext(ExpenseContext);
  const [inputValue, setInputValue] = useState('');
  const totalExpenseAmount = expenses.reduce((total, expense) => total + expense.amount, 0);
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddClick = () => {
    const amount = parseFloat(inputValue);
    if (!isNaN(amount) && amount !== 0) {
      const newExpense = { id: expenses.length, amount };
      setExpenses(prevExpenses => [...prevExpenses, newExpense]);
      setTotalBalance(prevTotalBalance => prevTotalBalance + newExpense.amount);
      setInputValue('');
    } else {
      alert('Please enter a valid amount');
      setInputValue('');
    }
  };

  const handleDeleteClick = (id) => {
    const newExpenses = expenses.filter(expense => expense.id !== id);
    setExpenses(newExpenses);
  }

  return (
    <div className='Buttons'>
      {expenses.map(expense => (
        <div className="expense-item" key={expense.id}>
        {expense.amount < 0 ? "-$" + Math.abs(expense.amount).toFixed(2) : `$${expense.amount.toFixed(2)}`}
        <button className='deleteButton' onClick={() => handleDeleteClick(expense.id)}>X</button>
      </div>
      ))}
      <h2>ADD NEW TRANSACTION</h2>
      <hr/>
      <input placeholder='Enter Amount' value={inputValue} onChange={handleInputChange} />
      <button className='Add-Button' onClick={handleAddClick}>ADD</button>  
    </div>
  )
}

export default Buttons;
