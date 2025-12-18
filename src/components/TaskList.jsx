import { updateTask, deleteTask } from "../api/task.js";

export default function TaskList({ tasks, reload }) {
  const token = localStorage.getItem("token");

  const completeTask = async (task) => {
    await updateTask(task._id, { status: "completed" }, token);
    reload();
  };

  const removeTask = async (id) => {
    await deleteTask(id, token);
    reload();
  };

  return (
    <div className="tasklist-wrapper mt-4">
      {tasks.length === 0 ? (
        <div className="text-center text-muted">
          No tasks available
        </div>
      ) : (
        <div className="list-group">
          {tasks.map((task) => (
            <div
              key={task._id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {/* Task Title */}
              <span
                className={`fw-medium ${
                  task.status === "completed"
                    ? "text-decoration-line-through text-muted"
                    : ""
                }`}
              >
                {task.title}
              </span>

              {/* Actions */}
              <div className="btn-group">
                {task.status !== "completed" && (
                  <button
                    className="btn btn-sm btn-outline-success"
                    onClick={() => completeTask(task)}
                    title="Mark as completed"
                  >
                    ✅
                  </button>
                )}

                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => removeTask(task._id)}
                  title="Delete task"
                >
                  ❌
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
