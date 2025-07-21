import React from 'react';

function getDaysLeft(deadline) {
  const now = new Date();
  const end = new Date(deadline);
  return Math.ceil((end - now) / (1000 * 60 * 60 * 24));
}

const GoalCard = ({ goal, onEdit, onDelete, onDeposit }) => {
  const progress = Math.min(100, (goal.savedAmount / goal.targetAmount) * 100);
  const daysLeft = getDaysLeft(goal.deadline);
  const isCompleted = goal.savedAmount >= goal.targetAmount;
  const isOverdue = !isCompleted && daysLeft < 0;
  const isWarning = !isCompleted && daysLeft <= 30 && daysLeft > 0;

  return (
    <div className={`goal-card${isCompleted ? ' completed' : ''}${isOverdue ? ' overdue' : ''}`}> 
      <h3>{goal.name}</h3>
      <div><strong>ID:</strong> {goal.id}</div>
      <div><strong>Category:</strong> {goal.category}</div>
      <div><strong>Target Amount:</strong> ${goal.targetAmount.toLocaleString()}</div>
      <div><strong>Saved Amount:</strong> ${goal.savedAmount.toLocaleString()}</div>
      <div><strong>Remaining:</strong> ${Math.max(goal.targetAmount - goal.savedAmount, 0).toLocaleString()}</div>
      <div><strong>Deadline:</strong> {goal.deadline}</div>
      <div><strong>Created At:</strong> {goal.createdAt}</div>
      <div><strong>Days Left:</strong> {daysLeft < 0 ? 'Deadline Passed' : daysLeft}</div>
      {isWarning && <div className="warning">⚠️ Less than 30 days left!</div>}
      {isOverdue && <div className="overdue">❌ Overdue</div>}
      {isCompleted && <div className="completed">✅ Goal Completed!</div>}
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
      <button onClick={() => onEdit(goal)}>Edit</button>
      <button onClick={() => onDelete(goal.id)}>Delete</button>
      <button onClick={() => onDeposit(goal)}>Deposit</button>
    </div>
  );
};

export default GoalCard;
import React from 'react';

function getDaysLeft(deadline) {
  const now = new Date();
  const end = new Date(deadline);
  return Math.ceil((end - now) / (1000 * 60 * 60 * 24));
}

const GoalCard = ({ goal, onEdit, onDelete, onDeposit }) => {
  const progress = Math.min(100, (goal.savedAmount / goal.targetAmount) * 100);
  const daysLeft = getDaysLeft(goal.deadline);
  const isCompleted = goal.savedAmount >= goal.targetAmount;
  const isOverdue = !isCompleted && daysLeft < 0;
  const isWarning = !isCompleted && daysLeft <= 30 && daysLeft > 0;

  return (
    <div className={`goal-card${isCompleted ? ' completed' : ''}${isOverdue ? ' overdue' : ''}`}> 
      <h3>{goal.name}</h3>
      <div><strong>ID:</strong> {goal.id}</div>
      <div><strong>Category:</strong> {goal.category}</div>
      <div><strong>Target Amount:</strong> ${goal.targetAmount.toLocaleString()}</div>
      <div><strong>Saved Amount:</strong> ${goal.savedAmount.toLocaleString()}</div>
      <div><strong>Remaining:</strong> ${Math.max(goal.targetAmount - goal.savedAmount, 0).toLocaleString()}</div>
      <div><strong>Deadline:</strong> {goal.deadline}</div>
      <div><strong>Created At:</strong> {goal.createdAt}</div>
      <div><strong>Days Left:</strong> {daysLeft < 0 ? 'Deadline Passed' : daysLeft}</div>
      {isWarning && <div className="warning">⚠️ Less than 30 days left!</div>}
      {isOverdue && <div className="overdue">❌ Overdue</div>}
      {isCompleted && <div className="completed">✅ Goal Completed!</div>}
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
      <button onClick={() => onEdit(goal)}>Edit</button>
      <button onClick={() => onDelete(goal.id)}>Delete</button>
      <button onClick={() => onDeposit(goal)}>Deposit</button>
    </div>
  );
};

export default GoalCard;
import React from 'react';

function getDaysLeft(deadline) {
  const now = new Date();
  const end = new Date(deadline);
  return Math.ceil((end - now) / (1000 * 60 * 60 * 24));
}


const GoalCard = ({ goal, onEdit, onDelete, onDeposit }) => {
  const progress = Math.min(100, (goal.savedAmount / goal.targetAmount) * 100);
  const daysLeft = getDaysLeft(goal.deadline);
  const isCompleted = goal.savedAmount >= goal.targetAmount;
  const isOverdue = !isCompleted && daysLeft < 0;
  const isWarning = !isCompleted && daysLeft <= 30 && daysLeft > 0;

  return (
    <div className={`goal-card${isCompleted ? ' completed' : ''}${isOverdue ? ' overdue' : ''}`}> 
      <h3>{goal.name}</h3>
      <div><strong>ID:</strong> {goal.id}</div>
      <div><strong>Category:</strong> {goal.category}</div>
      <div><strong>Target Amount:</strong> ${goal.targetAmount.toLocaleString()}</div>
      <div><strong>Saved Amount:</strong> ${goal.savedAmount.toLocaleString()}</div>
      <div><strong>Remaining:</strong> ${Math.max(goal.targetAmount - goal.savedAmount, 0).toLocaleString()}</div>
      <div><strong>Deadline:</strong> {goal.deadline}</div>
      <div><strong>Created At:</strong> {goal.createdAt}</div>
      <div><strong>Days Left:</strong> {daysLeft < 0 ? 'Deadline Passed' : daysLeft}</div>
      {isWarning && <div className="warning">⚠️ Less than 30 days left!</div>}
      {isOverdue && <div className="overdue">❌ Overdue</div>}
      {isCompleted && <div className="completed">✅ Goal Completed!</div>}
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
      <button onClick={() => onEdit(goal)}>Edit</button>
      <button onClick={() => onDelete(goal.id)}>Delete</button>
      <button onClick={() => onDeposit(goal)}>Deposit</button>
    </div>
  );
};

export default GoalCard;
