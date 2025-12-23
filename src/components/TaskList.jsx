import { updateTask, deleteTask } from "../api/task.js";
import { CheckCircle, Trash2, ListTodo } from "lucide-react";

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
    <div className="mt-6">
      {tasks.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-zinc-800 bg-zinc-950 p-6 text-center">
          <ListTodo className="h-8 w-8 text-zinc-600" />
          <p className="text-sm text-zinc-400">No tasks available</p>
        </div>
      ) : (
        <ul className="space-y-3">
          {tasks.map((task) => (
            <li
              key={task._id}
              className="group flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 transition hover:border-zinc-700"
            >
              {/* Task title */}
              <span
                className={`text-sm font-medium ${
                  task.status === "completed"
                    ? "text-zinc-500 line-through"
                    : "text-white"
                }`}
              >
                {task.title}
              </span>

              {/* Actions */}
              <div className="flex items-center gap-2 opacity-90">
                {task.status !== "completed" && (
                  <button
                    onClick={() => completeTask(task)}
                    title="Mark as completed"
                    className="rounded-lg border border-green-700/40 bg-green-700/10 p-2 text-green-400 transition hover:bg-green-700/20 hover:text-green-300"
                  >
                    <CheckCircle className="h-4 w-4" />
                  </button>
                )}

                <button
                  onClick={() => removeTask(task._id)}
                  title="Delete task"
                  className="rounded-lg border border-red-700/40 bg-red-700/10 p-2 text-red-400 transition hover:bg-red-700/20 hover:text-red-300"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
