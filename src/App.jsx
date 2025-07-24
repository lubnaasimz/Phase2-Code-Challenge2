// App.jsx
import React, { useEffect, useState } from "react";
import GoalList from "./components/GoalList";
import AddGoalForm from "./components/AddGoalForm";
import DepositForm from "./components/DepositForm";
import OverviewDashboard from "./components/OverviewDashboard";
import "./App.css";

function App() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/goals")
      .then(res => res.json())
      .then(data => setGoals(data))
      .catch(err => console.error("Failed to fetch goals:", err));
  }, []);

  const addGoal = (newGoal) => {
    fetch("http://localhost:3001/goals", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newGoal),
    })
      .then(res => res.json())
      .then(data => setGoals([...goals, data]));
  };

  const updateGoal = (id, updatedFields) => {
    fetch(`http://localhost:3001/goals/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedFields),
    })
      .then(res => res.json())
      .then(updatedGoal =>
        setGoals(goals.map(goal => goal.id === id ? updatedGoal : goal))
      );
  };

  const deleteGoal = (id) => {
    fetch(`http://localhost:3001/goals/${id}`, {
      method: "DELETE",
    }).then(() => setGoals(goals.filter(goal => goal.id !== id)));
  };

  return (
    <main className="app-container">
      <h1 className="app-title">Smart Goal Planner</h1>
      <OverviewDashboard goals={goals} />
      <div className="forms-grid">
        <AddGoalForm onAddGoal={addGoal} />
        <DepositForm goals={goals} onDeposit={updateGoal} />
      </div>
      <GoalList goals={goals} onUpdate={updateGoal} onDelete={deleteGoal} />
    </main>
  );
}

export default App;
