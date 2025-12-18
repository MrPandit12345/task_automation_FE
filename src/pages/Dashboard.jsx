import { useEffect, useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import { getTasks } from "../api/task.js";

export default function Dashboard({ setToken }) {
  const token = localStorage.getItem("token");
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const res = await getTasks(token);
    setTasks(res.data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <div className="dashboard-wrapper container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold mb-0">AutoTasker Pro</h2>
        <button
          className="btn btn-outline-danger btn-sm"
          onClick={logout}
        >
          Logout
        </button>
      </div>

      <TaskForm reload={loadTasks} />

      <TaskList tasks={tasks} reload={loadTasks} />
    </div>
  );
}
