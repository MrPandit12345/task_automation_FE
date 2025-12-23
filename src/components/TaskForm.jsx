import { useState } from "react";
import { createTask } from "../api/task.js";
import { Plus, Calendar, ClipboardList, AlignLeft } from "lucide-react";

export default function TaskForm({ reload }) {
  const token = localStorage.getItem("token");

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dueDate: "",
    status: "pending",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
        <div className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-950 p-6 shadow-2xl">
            <div className="mb-6 flex items-center gap-2">
                <ClipboardList className="h-6 w-6 text-blue-500" />
                <h2 className="text-xl font-semibold text-white">Create Task</h2>
            </div>

            <form onSubmit={submit} className="space-y-4">
                <div>
                    <label className="mb-1 flex items-center gap-2 text-sm text-zinc-400">
                        <ClipboardList className="h-4 w-4" />
                        Task Title
                    </label>
                    <input
                        type="text"
                        name="title"
                        placeholder="Enter task title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                    />
                </div>

                <div>
                    <label className="mb-1 flex items-center gap-2 text-sm text-zinc-400">
                        <AlignLeft className="h-4 w-4" />
                        Description
                    </label>
                    <textarea
                        name="description"
                        rows={3}
                        placeholder="Describe the task"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                    />
                </div>

                <div>
                    <label className="mb-1 flex items-center gap-2 text-sm text-zinc-400">
                        <Calendar className="h-4 w-4" />
                        Due Date
                    </label>
                    <input
                        type="date"
                        name="dueDate"
                        value={formData.dueDate}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 [color-scheme:dark]"
                    />
                </div>

                <div>
                    <label className="mb-1 text-sm text-zinc-400">Status</label>
                    <select
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                    >
                        <option value="pending">Pending</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 active:scale-[0.98]"
                >
                    <Plus className="h-5 w-5" />
                    Add Task
                </button>
            </form>
        </div>
    </div>
);
}
