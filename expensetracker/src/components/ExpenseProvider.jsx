import React, { useState } from 'react';
import ExpenseContext from './ExpenseContext';

const ExpenseProvider = ({ children }) => {
  const [totalBalance, setTotalBalance] = useState(0);
  const [expenses, setExpenses] = useState([]);

  return (
    <ExpenseContext.Provider value={{ totalBalance, setTotalBalance, expenses, setExpenses }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseProvider;