import React, { useState } from "react";

const TaskForm = ({ onAddTask }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    onAddTask(text);
    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-3 mb-6 bg-gray-900 p-4 rounded-lg border border-gray-700"
    >
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a task..."
        className="bg-gray-800 text-gray-200 px-4 py-2 rounded-md w-full 
                   border border-gray-700 focus:border-blue-400 outline-none"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md 
                   text-white font-semibold transition-all"
      >
        Add
      </button>
    </form>
  );
};

export default TaskForm;
