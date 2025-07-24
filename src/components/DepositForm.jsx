import React, { useState } from "react";

function DepositForm({ goals, onDeposit }) {
  const [amount, setAmount] = useState("");
  const [selectedGoalId, setSelectedGoalId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const goal = goals.find(g => g.id === selectedGoalId);
    if (!goal) return;
    const updatedAmount = goal.savedAmount + Number(amount);
    onDeposit(goal.id, { savedAmount: updatedAmount });
    setAmount("");
    setSelectedGoalId("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Make a Deposit</h2>
      <select value={selectedGoalId} onChange={(e) => setSelectedGoalId(e.target.value)} required>
        <option value="">Select Goal</option>
        {goals.map(goal => (
          <option key={goal.id} value={goal.id}>{goal.name}</option>
        ))}
      </select>
      <input
        type="number"
        placeholder="Deposit Amount"
        value={amount}
        onChange={e => setAmount(e.target.value)}
        required
      />
      <button type="submit">Deposit</button>
    </form>
  );
}

export default DepositForm;
