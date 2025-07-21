
import React from 'react';

const GoalList = ({ goals }) => {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '24px' }}>
      <h2 style={{ fontWeight: 700, fontSize: '2rem', marginBottom: '24px', color: '#2d3748' }}>🎯 Your Goals</h2>
      {goals.length === 0 ? (
        <p style={{ color: '#718096', fontSize: '1.1rem' }}>No goals available.</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {goals.map(goal => (
            <div
              key={goal.id}
              style={{
                background: 'linear-gradient(135deg, #f8fafc 60%, #e2e8f0 100%)',
                borderRadius: '16px',
                boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                transition: 'box-shadow 0.2s',
                border: '1px solid #e2e8f0',
              }}
            >
              <div style={{ fontWeight: 600, fontSize: '1.25rem', color: '#2b6cb0', marginBottom: '8px' }}>{goal.name}</div>
              <div style={{ color: '#4a5568', marginBottom: '8px' }}><strong>Category:</strong> {goal.category || 'N/A'}</div>
              <div style={{ color: '#4a5568', marginBottom: '8px' }}><strong>Target:</strong> Ksh {goal.target}
              </div>
              <div style={{ color: '#4a5568', marginBottom: '8px' }}><strong>Saved:</strong> Ksh {goal.saved}</div>
              <div style={{ color: '#4a5568', marginBottom: '8px' }}><strong>Deadline:</strong> {goal.deadline}</div>
              <div style={{ width: '100%', margin: '12px 0' }}>
                <div style={{
                  background: '#e2e8f0',
                  borderRadius: '8px',
                  height: '10px',
                  width: '100%',
                  overflow: 'hidden',
                }}>
                  <div style={{
                    background: 'linear-gradient(90deg, #4299e1 60%, #38b2ac 100%)',
                    height: '10px',
                    width: `${Math.min(100, (goal.saved / goal.target) * 100)}%`,
                    borderRadius: '8px',
                    transition: 'width 0.3s',
                  }} />
                </div>
              </div>
              <div style={{ color: '#718096', fontSize: '0.95rem', marginBottom: '8px' }}>
                Remaining: Ksh {Math.max(goal.target - goal.saved, 0)}
              </div>
              {/* Add more details or actions here if needed */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GoalList;

