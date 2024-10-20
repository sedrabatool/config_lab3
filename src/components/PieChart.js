// import React from 'react';
// import '../App.css';
// import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

// const FinancialSummary = ({ transactions }) => {
//   const incomeData = [
//     { name: 'Salary', value: transactions.filter(t => t.category === 'Salary').reduce((acc, t) => acc + t.amount, 0) },
//     { name: 'Rental Income', value: transactions.filter(t => t.category === 'Rental Income').reduce((acc, t) => acc + t.amount, 0) },
//     { name: 'Business', value: transactions.filter(t => t.category === 'Business').reduce((acc, t) => acc + t.amount, 0) },
//     { name: 'Stocks', value: transactions.filter(t => t.category === 'Stocks').reduce((acc, t) => acc + t.amount, 0) },
//   ];

//   const expenseData = [
//     { name: 'Shopping', value: transactions.filter(t => t.category === 'Shopping').reduce((acc, t) => acc + t.amount, 0) },
//     { name: 'Food', value: transactions.filter(t => t.category === 'Food').reduce((acc, t) => acc + t.amount, 0) },
//     { name: 'Entertain', value: transactions.filter(t => t.category === 'Entertain').reduce((acc, t) => acc + t.amount, 0) },
//     { name: 'Grocery', value: transactions.filter(t => t.category === 'Grocery').reduce((acc, t) => acc + t.amount, 0) },
//   ];

//   return (
//     <div className="financial-summary">
//       <h3>Financial Summary</h3>
//       <div>
//         <h4>Income</h4>
//         <PieChart width={200} height={200}>
//           <Pie data={incomeData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50}>
//             {incomeData.map((entry, index) => (
//               <Cell key={`cell-${index}`} fill={['#0088FE', '#00C49F', '#FFBB28', '#FF8042'][index]} />
//             ))}
//           </Pie>
//           <Tooltip />
//           <Legend />
//         </PieChart>
//       </div>

//       <div>
//         <h4>Expense</h4>
//         <PieChart width={200} height={200}>
//           <Pie data={expenseData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50}>
//             {expenseData.map((entry, index) => (
//               <Cell key={`cell-${index}`} fill={['#FF8042', '#FFBB28', '#00C49F', '#0088FE'][index]} />
//             ))}
//           </Pie>
//           <Tooltip />
//           <Legend />
//         </PieChart>
//       </div>
//     </div>
//   );
// };

// export default FinancialSummary;











// import React from 'react';
// import { Pie } from 'react-chartjs-2';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import ChartDataLabels from 'chartjs-plugin-datalabels'; // Import datalabels plugin

// // Register necessary components in ChartJS
// ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

// const PieChart = ({ transactions }) => {

//   // Filter income and expense transactions
//   const incomeTransactions = transactions.filter(t => t.type === 'Income');
//   const expenseTransactions = transactions.filter(t => t.type === 'Expense');

//   // Aggregate income categories and amounts
//   const incomeCategories = incomeTransactions.reduce((acc, transaction) => {
//     if (!acc[transaction.category]) acc[transaction.category] = 0;
//     acc[transaction.category] += transaction.amount;
//     return acc;
//   }, {});

//   // Aggregate expense categories and amounts
//   const expenseCategories = expenseTransactions.reduce((acc, transaction) => {
//     if (!acc[transaction.category]) acc[transaction.category] = 0;
//     acc[transaction.category] += transaction.amount;
//     return acc;
//   }, {});

//   // Calculate total amounts for percentage calculations
//   const totalIncome = Object.values(incomeCategories).reduce((a, b) => a + b, 0);
//   const totalExpense = Object.values(expenseCategories).reduce((a, b) => a + b, 0);

//   // Income Doughnut Chart Data
//   const incomeData = {
//     labels: Object.keys(incomeCategories),
//     datasets: [
//       {
//         label: 'Income',
//         data: Object.values(incomeCategories),
//         backgroundColor:['#04BFDA', '#FB67CA', '#9B88ED', '#FFA84A', '#9966ff'],
//         hoverOffset: 4,
//         cutout: '50%', // Creates the hole in the center to match the donut shape
//       },
//     ],
//   };

//   // Expense Doughnut Chart Data
//   const expenseData = {
//     labels: Object.keys(expenseCategories),
//     datasets: [
//       {
//         label: 'Expense',
//         data: Object.values(expenseCategories),
//         backgroundColor: ['#04BFDA', '#FB67CA', '#9B88ED', '#FFA84A', '#9966ff'],
//         hoverOffset: 4,
//         cutout: '50%', // Creates the hole in the center to match the donut shape
//       },
//     ],
//   };

//   // Common chart options including percentage display
//   const options = {
//     plugins: {
//       datalabels: {
//         color: '#fff', // Text color
//         formatter: (value, context) => {
//           const dataset = context.dataset.data;
//           const total = dataset.reduce((acc, val) => acc + val, 0);
//           const percentage = (value / total * 100).toFixed(2) + '%'; // Calculate percentage
//           return percentage;
//         },
//         anchor: 'center', // Position inside the chart segment
//         align: 'center',
//         font: {
//           weight: 'bold',
//           size: 14,
//         },
//       },
//     },
//   };

//   // Return the doughnut charts with labels and percentages
//   return (
//     <div className="pie-charts">
//       <h3 className='sum'>Transaction Summary</h3> {/* Transaction Summary Heading */}
//       <div className="income-chart">
//         <h4>Income</h4>
//         <Pie data={incomeData} options={options} />
//       </div>
//       <div className="expense-chart">
//         <h4>Expense</h4>
//         <Pie data={expenseData} options={options} />
//       </div>
//     </div>
//   );
// };

// export default PieChart;


// import React from 'react';
// import { Pie } from 'react-chartjs-2';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import ChartDataLabels from 'chartjs-plugin-datalabels';
// import '../App.css';

// // Register necessary components in ChartJS
// ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

// const PieChart = ({ transactions }) => {
//   const incomeTransactions = transactions.filter(t => t.type === 'Income');
//   const expenseTransactions = transactions.filter(t => t.type === 'Expense');

//   const incomeCategories = incomeTransactions.reduce((acc, transaction) => {
//     if (!acc[transaction.category]) acc[transaction.category] = 0;
//     acc[transaction.category] += transaction.amount;
//     return acc;
//   }, {});

//   const expenseCategories = expenseTransactions.reduce((acc, transaction) => {
//     if (!acc[transaction.category]) acc[transaction.category] = 0;
//     acc[transaction.category] += transaction.amount;
//     return acc;
//   }, {});

//   const incomeData = {
//     labels: Object.keys(incomeCategories),
//     datasets: [
//       {
//         label: 'Income',
//         data: Object.values(incomeCategories),
//         backgroundColor: ['#04BFDA', '#FB67CA', '#9B88ED', '#FFA84A', '#9966ff'],
//         hoverOffset: 4,
//         cutout: '50%',
//       },
//     ],
//   };

//   const expenseData = {
//     labels: Object.keys(expenseCategories),
//     datasets: [
//       {
//         label: 'Expense',
//         data: Object.values(expenseCategories),
//         backgroundColor: ['#04BFDA', '#FB67CA', '#9B88ED', '#FFA84A', '#9966ff'],
//         hoverOffset: 4,
//         cutout: '50%',
//       },
//     ],
//   };

//   const options = {
//     plugins: {
//       datalabels: {
//         color: '#fff',
//         formatter: (value, context) => {
//           const dataset = context.dataset.data;
//           const total = dataset.reduce((acc, val) => acc + val, 0);
//           return ((value / total) * 100).toFixed(2) + '%';
//         },
//         anchor: 'center',
//         align: 'center',
//         font: {
//           weight: 'bold',
//           size: 14,
//         },
//       },
//     },
//   };

//   return (
//     <div className="pie-charts">
//       <h3 className='sum'>Transaction Summary</h3>
//       <div className="income-chart">
//         <h4>Income</h4>
//         <Pie data={incomeData} options={options} />
//       </div>
//       <div className="expense-chart">
//         <h4>Expense</h4>
//         <Pie data={expenseData} options={options} />
//       </div>
//     </div>
//   );
// };

// export default PieChart;



import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import '../App.css';

// Register necessary components in ChartJS
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const PieChart = ({ transactions }) => {
  const incomeTransactions = transactions.filter(t => t.type === 'Income');
  const expenseTransactions = transactions.filter(t => t.type === 'Expense');

  const incomeCategories = incomeTransactions.reduce((acc, transaction) => {
    if (!acc[transaction.category]) acc[transaction.category] = 0;
    acc[transaction.category] += transaction.amount;
    return acc;
  }, {});

  const expenseCategories = expenseTransactions.reduce((acc, transaction) => {
    if (!acc[transaction.category]) acc[transaction.category] = 0;
    acc[transaction.category] += transaction.amount;
    return acc;
  }, {});

  const incomeData = {
    labels: Object.keys(incomeCategories),
    datasets: [
      {
        label: 'Income',
        data: Object.values(incomeCategories),
        backgroundColor: ['#04BFDA', '#FB67CA', '#9B88ED', '#FFA84A'],
        borderColor: 'white', // Inner ring color
        borderWidth: 3, // Ring thickness
        hoverOffset: 0,
      },
    ],
  };

  const expenseData = {
    labels: Object.keys(expenseCategories),
    datasets: [
      {
        label: 'Expense',
        data: Object.values(expenseCategories),
        backgroundColor: ['#04BFDA', '#FB67CA', '#9B88ED', '#FFA84A'],
        borderColor: 'white', // Inner ring color
        borderWidth: 3, // Ring thickness
        hoverOffset: 0,
      },
    ],
  };

  const options = {
    plugins: {
      datalabels: {
        color: '#fff',
        formatter: (value, context) => {
          const dataset = context.dataset.data;
          const total = dataset.reduce((acc, val) => acc + val, 0);
          return ((value / total) * 100).toFixed(2) + '%';
        },
        anchor: 'center',
        align: 'center',
        font: {
          weight: 'bold',
          size: 14,
        },
      },
    },
  };

  return (
    <div className="pie-charts">
      <h3 className='sum'>Transaction Summary</h3>
      <div className="income-chart">
        <h4>Income</h4>
        <Pie data={incomeData} options={options} />
      </div>
      <div className="expense-chart">
        <h4>Expense</h4>
        <Pie data={expenseData} options={options} />
      </div>
    </div>  
  );
};

export default PieChart;
