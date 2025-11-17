import React from "react";

const TaskItem = ({ task, index, onToggle, onDelete }) => {
  return (
    <li
      className={`flex justify-between items-center px-4 py-2 rounded-lg cursor-pointer 
      ${index % 2 === 0 ? "bg-gray-700" : "bg-gray-800"}`}
    >
      {/* Toggle */}
      <span onClick={() => onToggle(task.id)}>
        {task.text} {task.completed ? "✅" : "❌"}
      </span>

      {/* Delete */}
      <button
        onClick={() => onDelete(task.id)}
        className="text-red-400 hover:text-red-500 transition"
      >
        ❌
      </button>
    </li>
  );
};

export default TaskItem;
