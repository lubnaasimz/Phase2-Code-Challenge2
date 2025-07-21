
import React, { useState, useEffect } from 'react';

const initialState = {
  name: '',
  targetAmount: '',
  savedAmount: 0,
  category: '',
  deadline: '',
};

const GoalForm = ({ onSubmit, editingGoal, onCancel }) => {
  const [form, setForm] = useState(initialState);

  useEffect(() => {
    if (editingGoal) {
      setForm(editingGoal);
    } else {
      setForm(initialState);
    }
  }, [editingGoal]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(form);
    setForm(initialState);
  }

  return (
    <form className="goal-form" onSubmit={handleSubmit}>
      <h2>{editingGoal ? 'Edit Goal' : 'Add New Goal'}</h2>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Goal Name" required />
      <input name="targetAmount" type="number" value={form.targetAmount} onChange={handleChange} placeholder="Target Amount" required />
      <input name="category" value={form.category} onChange={handleChange} placeholder="Category" required />
      <input name="deadline" type="date" value={form.deadline} onChange={handleChange} required />
      <button type="submit">{editingGoal ? 'Update' : 'Add Goal'}</button>
      {editingGoal && <button type="button" onClick={onCancel}>Cancel</button>}
    </form>
  );
};


import React, { useState, useEffect } from 'react';

const initialState = {
  name: '',
  targetAmount: '',
  savedAmount: 0,
  category: '',
  deadline: '',
};

const GoalForm = ({ onSubmit, editingGoal, onCancel }) => {
  const [form, setForm] = useState(initialState);

  useEffect(() => {
    if (editingGoal) {
      setForm(editingGoal);
    } else {
      setForm(initialState);
    }
  }, [editingGoal]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(form);
    setForm(initialState);
  }

  return (
    <form className="goal-form" onSubmit={handleSubmit}>
      <h2>{editingGoal ? 'Edit Goal' : 'Add New Goal'}</h2>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Goal Name" required />
      <input name="targetAmount" type="number" value={form.targetAmount} onChange={handleChange} placeholder="Target Amount" required />
      <input name="category" value={form.category} onChange={handleChange} placeholder="Category" required />
      <input name="deadline" type="date" value={form.deadline} onChange={handleChange} required />
      <button type="submit">{editingGoal ? 'Update' : 'Add Goal'}</button>
      {editingGoal && <button type="button" onClick={onCancel}>Cancel</button>}
    </form>
  );
};

export default GoalForm;
