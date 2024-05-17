import React, { useState } from 'react';
import './ExpenseInput.css';

const ExpenseInput = () => {
 
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [expenses, setExpenses] = useState([]);

  const handleInputChange = (event, setState) => {
    setState(event.target.value);
  };

  
  const addExpense = () => {
    if (amount && category && description) {
      const newExpense = { amount, category, description };
      setExpenses([...expenses, newExpense]);
    
      setAmount('');
      setCategory('');
      setDescription('');
    }
  };

 
  const deleteExpense = (index) => {
    const updatedExpenses = [...expenses];
    updatedExpenses.splice(index, 1);
    setExpenses(updatedExpenses);
  };

  return (
    <div className="expense-input">
      <div className="showResults">
      
        {expenses.map((expense, index) => (
          <div className="expense" key={index}>
            <div className="amounts">${expense.amount}</div>
            <div className="Names">{expense.category}</div>
            <div className="desc">{expense.description}</div>
            <button onClick={() => deleteExpense(index)}>Delete</button>
          </div>
        ))}
      </div>
      <div className="showTasks">
        <div>
          <span>Amount: $</span>
          <input
            type="text"
            value={amount}
            onChange={(e) => handleInputChange(e, setAmount)}
            placeholder="Add Amount"
          />
        </div>
        <div>
          <span>Category: </span>
          <input
            type="text"
            value={category}
            onChange={(e) => handleInputChange(e, setCategory)}
            placeholder="Add Category"
          />
        </div>
        <div>
          <span>Description</span>
          <input
            type="text"
            value={description}
            onChange={(e) => handleInputChange(e, setDescription)}
            placeholder="Add description"
          />
        </div>
        <button type="button" onClick={addExpense}>
          Add Expense
        </button>
      </div>
    </div>
  );
};

export default ExpenseInput;
