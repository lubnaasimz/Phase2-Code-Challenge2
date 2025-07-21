import React, { useState } from 'react';

const DepositForm = ({ goals, onDeposit }) => {
  const [selectedGoalId, setSelectedGoalId] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const numericAmount = parseFloat(amount);
    if (!selectedGoalId || isNaN(numericAmount) || numericAmount <= 0) {
      alert("Select a goal and enter a valid deposit amount.");
      return;
    }

    onDeposit(selectedGoalId, numericAmount);
    setSelectedGoalId('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>💰 Make a Deposit</h2>
      <select value={selectedGoalId} onChange={(e) => setSelectedGoalId(e.target.value)}>
        <option value="">-- Choose a Goal --</option>
        {goals.map(goal => (
          <option key={goal.id} value={goal.id}>{goal.name}</option>
        ))}
      </select>

      <input
        type="number"
        value={amount}
        placeholder="Amount"
        onChange={(e) => setAmount(e.target.value)}
        style={{ marginLeft: "10px" }}
      />

      <button type="submit" style={{ marginLeft: "10px" }}>Deposit</button>
    </form>
  );
};

export default DepositForm;
