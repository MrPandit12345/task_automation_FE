import { useState } from "react";
import { createTask } from "../api/task.js";

export default function TaskForm({ reload }) {
  const [taskTitle, setTaskTitle] = useState("");
  const token = localStorage.getItem("token");

  const submit = async (e) => {
    e.preventDefault();
    await createTask({ taskTitle }, token);
    setTaskTitle("");
    reload();
  };

  return (
    <form className="card" onSubmit={submit}>
      <input
        placeholder="New Task"
        value={taskTitle}
        onChange={e => setTaskTitle(e.target.value)}
      />
      <button>Add Task</button>
    </form>
  );
}
