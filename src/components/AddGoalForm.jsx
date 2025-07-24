import React, { useState } from "react";

function AddGoalForm({ onAddGoal }) {
  const [form, setForm] = useState({
    name: "",
    category: "",
    targetAmount: "",
    deadline: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newGoal = {
      ...form,
      targetAmount: Number(form.targetAmount),
      savedAmount: 0,
      createdAt: new Date().toISOString().split("T")[0],
    };
    onAddGoal(newGoal);
    setForm({ name: "", category: "", targetAmount: "", deadline: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Goal</h2>
      <input name="name" placeholder="Goal Name" onChange={handleChange} value={form.name} required />
      <input name="category" placeholder="Category" onChange={handleChange} value={form.category} required />
      <input name="targetAmount" placeholder="Target Amount" type="number" onChange={handleChange} value={form.targetAmount} required />
      <input name="deadline" type="date" onChange={handleChange} value={form.deadline} required />
      <button type="submit">Add Goal</button>
    </form>
  );
}

export default AddGoalForm;
