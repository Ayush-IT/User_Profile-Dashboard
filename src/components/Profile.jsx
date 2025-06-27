

import React from 'react';
import { EditIcon } from './icons';

const Profile = ({ user, onEdit }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center md:items-start md:text-left">
    <img 
      src={user.profilePicture}
      alt={`${user.name}'s profile`}
      className="w-24 h-24 rounded-full object-cover ring-4 ring-blue-100"
      onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/150x150/EFEFEF/333?text=User'; }}
    />
    <div className="mt-4">
      <h3 className="text-xl font-bold text-gray-800">{user.name}</h3>
      <p className="text-sm text-gray-500 mt-1 truncate">{user.email}</p>
    </div>
    <button onClick={onEdit}
      className="mt-4 flex items-center gap-2 text-sm font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-lg transition-colors duration-300">
      <EditIcon /> Edit Profile
    </button>
  </div>
);

export default Profile;

