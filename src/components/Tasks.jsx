

import React from 'react';
import { CheckIcon } from './icons';

const Tasks = ({ tasks, onToggleTask }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 h-full">
    <h2 className="text-lg font-bold text-gray-800 mb-4">Today's Tasks</h2>
    <ul className="space-y-3">
      {tasks.map(task => (
        <li key={task.id}
          onClick={() => onToggleTask(task.id)}
          className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors duration-200 ${task.completed ? 'bg-gray-100' : 'hover:bg-gray-50'}`}>
          <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center mr-4 transition-all duration-300 ${task.completed ? 'bg-blue-600 border-blue-600 text-white' : 'border-gray-300'}`}>
            {task.completed && <CheckIcon />}
          </div>
          <span className={`${task.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}>{task.text}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default Tasks;
