import { useEffect, useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import { getTasks } from "../api/task.jsx";

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
    <div className="app">
      <h1>AutoTasker Pro</h1>
      <button onClick={logout}>Logout</button>
      <TaskForm reload={loadTasks} />
      <TaskList tasks={tasks} reload={loadTasks} />
    </div>
  );
}
