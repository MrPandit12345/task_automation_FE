import { useState } from "react";
import { createTask } from "../api/task.js";

export default function TaskForm({ reload }) {
  const token = localStorage.getItem("token");

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dueDate: "",
    status: "pending",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submit = async (e) => {
    e.preventDefault();

    await createTask(formData, token);

    setFormData({
      title: "",
      description: "",
      dueDate: "",
      status: "pending",
    });

    reload();
  };

  return (
    <div className="taskform-wrapper d-flex justify-content-center">
      <div className="card taskform-card shadow">
        <div className="card-body">
          <h4 className="mb-4 fw-bold text-center">Create Task</h4>

          <form onSubmit={submit}>
            {/* Title */}
            <div className="mb-3">
              <label className="form-label">Task Title</label>
              <input
                type="text"
                name="title"
                className="form-control"
                placeholder="Enter task title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>

            {/* Description */}
            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                name="description"
                className="form-control"
                rows="3"
                placeholder="Enter task description"
                value={formData.description}
                onChange={handleChange}
              />
            </div>

            {/* Due Date */}
            <div className="mb-3">
              <label className="form-label">Due Date</label>
              <input
                type="date"
                name="dueDate"
                className="form-control"
                value={formData.dueDate}
                onChange={handleChange}
                required
              />
            </div>

            {/* Status */}
            <div className="mb-4">
              <label className="form-label">Status</label>
              <select
                name="status"
                className="form-select"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Add Task
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
