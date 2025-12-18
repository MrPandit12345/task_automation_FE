import { updateTask, deleteTask } from "../api/task.js";

export default function TaskList({ tasks, reload }) {
  const token = localStorage.getItem("token");

  const completeTask = async (task) => {
    await updateTask(
      task._id,
      { status: "completed" },
      token
    );
    reload();
  };

  const removeTask = async (id) => {
    await deleteTask(id, token);
    reload();
  };

  return (
    <div>
      {tasks.map((task) => (
        <div className="task" key={task._id}>
          <span
            style={{
              textDecoration:
                task.status === "completed" ? "line-through" : "none"
            }}
          >
            {task.title}
          </span>

          <div>
            {task.status !== "completed" && (
              <button onClick={() => completeTask(task)}>
                ✅
              </button>
            )}
            <button onClick={() => removeTask(task._id)}>
              ❌
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
