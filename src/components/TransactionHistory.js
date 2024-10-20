// import React from 'react';
// import '../App.css';

// const TransactionHistory = ({ transactions, deleteTransaction }) => {
//   return (
//     <div className="transaction-history">
//       <h3>Transaction History</h3>
//       {transactions.length === 0 ? (
//         <p>No transactions available.</p>
//       ) : (
//         transactions.map((transaction, index) => (
//           <div key={index} className="transaction">
//             <div className="trans_container">
//               <div className='trans_1'>
//                 <div className='transaction_category'>{transaction.category}</div>
//                 <div className='transaction_amount'>${transaction.amount}</div>
//               </div>
//               <div className='trans_2'>
//                 <div>{transaction.type}</div>
//                 <div className='bin'>
//                   <button onClick={() => deleteTransaction(index)}>
//                     <i className="fa-solid fa-trash"></i> {/* Updated to solid style */}
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <div className='transaction_description'>{transaction.description}</div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default TransactionHistory;

import React from 'react';
import '../App.css';

const TransactionHistory = ({ transactions, deleteTransaction }) => {
  return (
    <div className="transaction-history">
      <h3>Transaction History</h3>
      {transactions.length === 0 ? (
        <p>No transactions available.</p>
      ) : (
        transactions.map((transaction, index) => (
          <div key={index} className="transaction">
            <div className="trans_container">
              <div className='trans_1'>
                <div className='transaction_category'>{transaction.category}</div>
                <div className='transaction_amount'>${transaction.amount}</div>
              </div>
              <div className='trans_2'>
                <div>{transaction.type}</div>
                <div className='bin'>
                  <button onClick={() => deleteTransaction(index)}>
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className='transaction_description'>{transaction.description}</div>
          </div>
        ))
      )}
    </div>
  );
};

export default TransactionHistory;
