import React from 'react';

const Overview = ({ goals }) => {
  const totalGoals = goals.length;
  const totalSaved = goals.reduce((sum, g) => sum + Number(g.savedAmount), 0);
  const completedGoals = goals.filter(g => Number(g.savedAmount) >= Number(g.targetAmount)).length;

  return (
    <div className="overview">
      <h2>Overview</h2>
      <div>Total Goals: {totalGoals}</div>
      <div>Total Saved: ${totalSaved.toLocaleString()}</div>
      <div>Goals Completed: {completedGoals}</div>
    </div>
  );
};


export default Overview;