import { useEffect, useState } from "react";
import { LogOut, LayoutDashboard } from "lucide-react";

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
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-20 border-b border-zinc-800 bg-black/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <LayoutDashboard className="h-5 w-5 text-blue-500" />
            <h1 className="text-lg font-semibold tracking-wide text-white">
              AutoTasker <span className="text-blue-500">Pro</span>
            </h1>
          </div>

          <button
            onClick={logout}
            className="flex items-center gap-2 rounded-lg border border-red-800/50 bg-red-900/10 px-3 py-1.5 text-sm text-red-500 transition hover:bg-red-900/20 hover:text-red-300"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-6">
        <TaskForm reload={loadTasks} />

        <div className="mt-6">
          <TaskList tasks={tasks} reload={loadTasks} />
        </div>
      </main>
    </div>
  );
}
