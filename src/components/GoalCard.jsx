import React from "react";
import './GoalCard.css';

function GoalCard({ goal, onUpdate, onDelete }) {
  const { id, name, savedAmount, targetAmount, deadline, category } = goal;
  const percent = Math.min((savedAmount / targetAmount) * 100, 100);
  const remaining = targetAmount - savedAmount;
  const timeLeft = Math.ceil((new Date(deadline) - new Date()) / (1000 * 60 * 60 * 24));
  const isCompleted = savedAmount >= targetAmount;
  const overdue = new Date(deadline) < new Date() && !isCompleted;
  const warning = timeLeft <= 30 && !isCompleted;

  return (
    <div className="goal-card">
  <h3>{goal.name}</h3>
  <p className="meta">Category: {goal.category}</p>
  <p className="meta">Target: ${goal.targetAmount}</p>
  <p className="meta">Saved: ${goal.savedAmount}</p>
  <p className="meta">Remaining: ${goal.targetAmount - goal.savedAmount}</p>

  <div className="progress-bar">
    <div
      className="progress"
      style={{ width: `${(goal.savedAmount / goal.targetAmount) * 100}%` }}
    ></div>
  </div>
</div>

    

  );
}

export default GoalCard;
