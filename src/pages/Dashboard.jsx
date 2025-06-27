

import React, { useState, useEffect } from 'react';
import Profile from '../components/Profile';
import EditProfileForm from '../components/EditProfileForm';
import Tasks from '../components/Tasks';
import Statistics from '../components/Statistics';
import mockData from '../data/mockData.json';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setUser(mockData.user);
      setTasks(mockData.tasks);
      setLoading(false);
    }, 1200);
  }, []);

  const toggleTask = (id) =>
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  const saveUser = (data) => { setUser(data); setIsEditing(false); };

  if (loading)
    return <div className="flex flex-col items-center justify-center min-h-screen text-gray-500">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-4">Loading Dashboard...</p>
    </div>;

  return (
    <div className="bg-gray-50 min-h-screen p-4 sm:p-6 lg:p-8 font-sans">
      {isEditing && <EditProfileForm user={user} onSave={saveUser} onCancel={() => setIsEditing(false)} />}
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-2xl font-normal text-gray-600">
            Good morning, <strong className="font-bold text-gray-900">{user?.name.split(' ')[0]}</strong>
          </h1>
        </header>
        <main className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div><Profile user={user} onEdit={() => setIsEditing(true)} /></div>
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Tasks tasks={tasks} onToggleTask={toggleTask} />
            <Statistics tasks={tasks} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
