

import React from 'react';

const Statistics = ({ tasks }) => {
  const completed = tasks.filter(t => t.completed).length;
  const total = tasks.length;
  const percent = total ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 h-full flex flex-col justify-center items-center">
      <h2 className="text-lg font-bold text-gray-800 mb-4">Progress</h2>
      <div className="relative w-32 h-32">
        <svg className="w-full h-full" viewBox="0 0 36 36">
          <path className="text-gray-100" strokeWidth="3" fill="none" stroke="currentColor"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
          <path className="text-blue-600" strokeWidth="3" fill="none" stroke="currentColor"
            strokeDasharray={`${percent}, 100`}
            style={{ transition: 'stroke-dasharray 0.5s ease-in-out' }}
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-gray-800">{percent}%</span>
        </div>
      </div>
      <p className="text-sm text-gray-500 mt-4">{completed} of {total} tasks completed</p>
    </div>
  );
};

export default Statistics;
