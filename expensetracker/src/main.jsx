import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import ExpenseProvider from './components/ExpenseProvider';

ReactDOM.render(
  <React.StrictMode>
    <ExpenseProvider>
      <App />
    </ExpenseProvider>
  </React.StrictMode>,
  document.getElementById('root')
);