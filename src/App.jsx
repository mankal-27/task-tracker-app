import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskItem from "./components/TaskItem";

export default function App() {
  // Load tasks from localStorage
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  // Filter state: all | active | completed
  const [filter, setFilter] = useState("all");

  // Save tasks to localStorage on state change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add a new task
  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  // Toggle completed/uncompleted
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Clear completed tasks
  const clearCompleted = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  // Filter logic
  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true; // all
  });

  const remainingCount = tasks.filter((t) => !t.completed).length;

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex flex-col items-center py-20">
      <h1 className="text-4xl font-bold text-blue-400 mb-8">Task Tracker</h1>

      <div className="bg-gray-800 p-6 rounded-xl shadow-md w-full max-w-md">
        {/* Add Task Form */}
        <TaskForm onAddTask={addTask} />

        {/* Filters */}
        <div className="flex gap-3 mb-4">
          <button
            onClick={() => setFilter("all")}
            className={`px-3 py-1 rounded-lg ${
              filter === "all"
                ? "bg-blue-500 text-white"
                : "bg-gray-700 text-gray-300"
            }`}
          >
            All
          </button>

          <button
            onClick={() => setFilter("active")}
            className={`px-3 py-1 rounded-lg ${
              filter === "active"
                ? "bg-blue-500 text-white"
                : "bg-gray-700 text-gray-300"
            }`}
          >
            Active
          </button>

          <button
            onClick={() => setFilter("completed")}
            className={`px-3 py-1 rounded-lg ${
              filter === "completed"
                ? "bg-blue-500 text-white"
                : "bg-gray-700 text-gray-300"
            }`}
          >
            Completed
          </button>
        </div>

        {/* Task Counter */}
        <p className="text-gray-400 mb-3">
          {remainingCount} task{remainingCount !== 1 ? "s" : ""} remaining
        </p>

        {/* Task List */}
        <ul className="space-y-3">
          {filteredTasks.length > 0 ? (
            filteredTasks.map((task, index) => (
              <TaskItem
                key={task.id}
                task={task}
                index={index}
                onToggle={toggleTask}
                onDelete={deleteTask}
              />
            ))
          ) : (
            <p className="text-gray-400 text-center py-4">
              No tasks in this category.
            </p>
          )}
        </ul>

        {/* Clear Completed Button */}
        {tasks.some((t) => t.completed) && (
          <button
            onClick={clearCompleted}
            className="mt-5 w-full bg-red-500 hover:bg-red-600 transition text-white font-semibold py-2 rounded-lg"
          >
            Clear Completed
          </button>
        )}
      </div>
    </div>
  );
}
