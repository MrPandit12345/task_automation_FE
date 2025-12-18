import { deleteTask } from "../api/task.js";

export default function TaskList({ tasks, reload }) {
  const token = localStorage.getItem("token");

  const remove = async (id) => {
    await deleteTask(id, token);
    reload();
  };

  return (
    <div>
      {tasks.map(task => (
        <div className="task" key={task._id}>
          <span>{task.taskTitle}</span>
          <button onClick={() => remove(task._id)}>❌</button>
        </div>
      ))}
    </div>
  );
}
