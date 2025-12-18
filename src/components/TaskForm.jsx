import { useState } from "react";
import { createTask } from "../api/task.js";

export default function TaskForm({ reload }) {
  const token = localStorage.getItem("token");

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dueDate: "",
    status: "pending"
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const submit = async (e) => {
    e.preventDefault();

    await createTask(formData, token);

    setFormData({
      title: "",
      description: "",
      dueDate: "",
      status: "pending"
    });

    reload();
  };

  return (
    <form className="card" onSubmit={submit}>
      <h3>Create Task</h3>

      {/* Title */}
      <input
        name="title"
        placeholder="Task title"
        value={formData.title}
        onChange={handleChange}
        required
      />

      {/* Description */}
      <textarea
        name="description"
        placeholder="Task description"
        value={formData.description}
        onChange={handleChange}
      />

      {/* Due Date */}
      <input
        type="date"
        name="dueDate"
        value={formData.dueDate}
        onChange={handleChange}
        required
      />

      {/* Status */}
      <select
        name="status"
        value={formData.status}
        onChange={handleChange}
      >
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>

      <button type="submit">Add Task</button>
    </form>
  );
}
