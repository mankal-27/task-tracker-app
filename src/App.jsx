import React, { useState } from 'react';

const App = () => {
  const [task, setTask] = useState([
    {id: 1, title: 'Learn React'},
    {id: 2, title: 'Build Portfolio'},
    {id: 3, title: 'Deploy Projects'}
  ]);

  return (
    <div className='min-h-screen bg-gray-950 text-gray-100 flex flex-col items-center py-20'>
      <h1 className='text-4xl font-bold text-blue-400 mb-8'>Task Tracker</h1>
      <div className='bg-gray-800 p-6 rounded-xl shadow-md w-full max-w-md'>
        <h2 className='text-2xl font-semibold mb-4 text-gray-200'>My Tasks</h2>
        {/* Dynamic Rendering of Task List */}
        <ul className='space-y-3'>
          {task.map ((task) => (
            <li
              key={task.id}
              className='bg-gray-700 hover:bg-gray-600 transition-all px-4 py-2 rounded-lg'>
              {task.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App;