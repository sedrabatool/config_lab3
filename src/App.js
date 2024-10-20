// import React, { useState } from 'react';
// import AddTransaction from './components/AddTransaction';
// import TransactionHistory from './components/TransactionHistory';
// import FinancialSummary from './components/FinancialSummary';



// function App() {
//   const [transactions, setTransactions] = useState([]);
//   const [balance, setBalance] = useState(3578);
//   const [income, setIncome] = useState(1800);
//   const [expense, setExpense] = useState(1800);

//   const addTransaction = (transaction) => {
//     setTransactions([...transactions, transaction]);
//     if (transaction.type === 'Income') {
//       setIncome(income + transaction.amount);
//       setBalance(balance + transaction.amount);
//     } else {
//       setExpense(expense + transaction.amount);
//       setBalance(balance - transaction.amount);
//     }
//   };

//   const deleteTransaction = (index) => {
//     const deletedTransaction = transactions[index];
//     if (deletedTransaction.type === 'Income') {
//       setIncome(income - deletedTransaction.amount);
//       setBalance(balance - deletedTransaction.amount);
//     } else {
//       setExpense(expense - deletedTransaction.amount);
//       setBalance(balance + deletedTransaction.amount);
//     }
//     setTransactions(transactions.filter((_, i) => i !== index));
//   };

//   return (
//     <div className="app-container">
//       <div className="header">
//         <div className="balance">
//           <h3>Available Balance</h3>
//           <p>${balance}</p>
//         </div>
//         <div className="income-expense">
//           <div><h4>Income</h4><p>${income}</p></div>
//           <div><h4>Expense</h4><p>${expense}</p></div>
//         </div>
//       </div>
      
//       <div className="row">
//         <AddTransaction addTransaction={addTransaction} />
//         <TransactionHistory transactions={transactions} deleteTransaction={deleteTransaction} />
//         <FinancialSummary transactions={transactions} />
//       </div>
//     </div>
//   );
// }

// export default App;


// +++++++++++++++++
// import React, { useState, useEffect } from 'react';
// import AddTransaction from './components/AddTransaction';
// import TransactionHistory from './components/TransactionHistory';
// import PieChart from './components/PieChart';
// import './App.css';

// function App() {
//   // Load data from localStorage (with fallback to defaults if not present)
//   const getInitialBalance = () => JSON.parse(localStorage.getItem('balance')) || 0;
//   const getInitialIncome = () => JSON.parse(localStorage.getItem('income')) || 0;
//   const getInitialExpense = () => JSON.parse(localStorage.getItem('expense')) || 0;
//   const getInitialTransactions = () => JSON.parse(localStorage.getItem('transactions')) || [];

//   // Set state with the retrieved localStorage data
//   const [balance, setBalance] = useState(getInitialBalance);
//   const [income, setIncome] = useState(getInitialIncome);
//   const [expense, setExpense] = useState(getInitialExpense);
//   const [transactions, setTransactions] = useState(getInitialTransactions);

//   // Save data to localStorage whenever there's a change
//   useEffect(() => {
//     localStorage.setItem('balance', JSON.stringify(balance));
//     localStorage.setItem('income', JSON.stringify(income));
//     localStorage.setItem('expense', JSON.stringify(expense));
//     localStorage.setItem('transactions', JSON.stringify(transactions));
//   }, [balance, income, expense, transactions]);

//   const addTransaction = (transaction) => {
//     setTransactions([...transactions, transaction]);
//     if (transaction.type === 'Income') {
//       setIncome(income + transaction.amount);
//       setBalance(balance + transaction.amount);
//     } else {
//       setExpense(expense + transaction.amount);
//       setBalance(balance - transaction.amount);
//     }
//   };

//   const deleteTransaction = (index) => {
//     const deletedTransaction = transactions[index];
//     if (deletedTransaction.type === 'Income') {
//       setIncome(income - deletedTransaction.amount);
//       setBalance(balance - deletedTransaction.amount);
//     } else {
//       setExpense(expense - deletedTransaction.amount);
//       setBalance(balance + deletedTransaction.amount);
//     }
//     setTransactions(transactions.filter((_, i) => i !== index));
//   };

//   return (
//     <div className="app-container">
//       <div className="header">
//         <div className="balance">
//           <h3>Available Balance</h3>
//           <p>${balance}</p>
//         </div>
//         <div className="income-expense">
//           <div className='income'><h4>Income</h4><p>${income}</p></div>
//           <div className='expense'><h4>Expense</h4><p>${expense}</p></div>
//         </div>
//       </div>

//       <div className="row">
//         <AddTransaction addTransaction={addTransaction} />
//         <TransactionHistory transactions={transactions} deleteTransaction={deleteTransaction} />
//         <PieChart transactions={transactions} />
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import AddTransaction from './components/AddTransaction';
import TransactionHistory from './components/TransactionHistory';
import PieChart from './components/PieChart';
import './App.css';

function App() {
  // Load data from localStorage (with fallback to defaults if not present)
  const getInitialBalance = () => JSON.parse(localStorage.getItem('balance')) || 0;
  const getInitialIncome = () => JSON.parse(localStorage.getItem('income')) || 0;
  const getInitialExpense = () => JSON.parse(localStorage.getItem('expense')) || 0;
  const getInitialTransactions = () => JSON.parse(localStorage.getItem('transactions')) || [];

  // Set state with the retrieved localStorage data
  const [balance, setBalance] = useState(getInitialBalance);
  const [income, setIncome] = useState(getInitialIncome);
  const [expense, setExpense] = useState(getInitialExpense);
  const [transactions, setTransactions] = useState(getInitialTransactions);

  // Save data to localStorage whenever there's a change
  useEffect(() => {
    localStorage.setItem('balance', JSON.stringify(balance));
    localStorage.setItem('income', JSON.stringify(income));
    localStorage.setItem('expense', JSON.stringify(expense));
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [balance, income, expense, transactions]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
    if (transaction.type === 'Income') {
      setIncome(income + transaction.amount);
      setBalance(balance + transaction.amount);
    } else {
      setExpense(expense + transaction.amount);
      setBalance(balance - transaction.amount);
    }
  };

  const deleteTransaction = (index) => {
    const deletedTransaction = transactions[index];
    if (deletedTransaction.type === 'Income') {
      setIncome(income - deletedTransaction.amount);
      setBalance(balance - deletedTransaction.amount);
    } else {
      setExpense(expense - deletedTransaction.amount);
      setBalance(balance + deletedTransaction.amount);
    }
    setTransactions(transactions.filter((_, i) => i !== index));
  };

  return (
    <div className="app-container">
      <div className="header">
        <div className="balance">
          <h3>Available Balance</h3>
          <p>${balance}</p>
        </div>
        <div className="income-expense">
          <div className='income'><h4>Income</h4><p>${income}</p></div>
          <div className='expense'><h4>Expense</h4><p>${expense}</p></div>
        </div>
      </div>

      <div className="row">
        <AddTransaction addTransaction={addTransaction} />
        <TransactionHistory transactions={transactions} deleteTransaction={deleteTransaction} />
        <PieChart transactions={transactions} />
      </div>
    </div>
  );
}

export default App;
