import React, { useEffect, useState } from 'react';
import DepositForm from './components/DepositForm';
import GoalList from './components/GoalList';

function App() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/goals")
      .then(res => res.json())
      .then(data => setGoals(data));
  }, []);

  const handleDeposit = (goalId, amount) => {
    const goalToUpdate = goals.find(goal => goal.id === parseInt(goalId));
    const updatedGoal = {
      ...goalToUpdate,
      saved: goalToUpdate.saved + amount,
    };

    fetch(`http://localhost:3001/goals/${goalId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ saved: updatedGoal.saved })
    })
      .then(res => res.json())
      .then((updatedGoalFromServer) => {
        const updatedGoals = goals.map(goal =>
          goal.id === updatedGoalFromServer.id ? updatedGoalFromServer : goal
        );
        setGoals(updatedGoals);
      });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1> Smart Goal Planner</h1>
      <DepositForm goals={goals} onDeposit={handleDeposit} />
      <GoalList goals={goals} />
    </div>
  );
}

export default App;

