import React, { useState } from 'react';

const EditProfileForm = ({ user, onSave, onCancel }) => {
  const [formData, setFormData] = useState({ ...user });
  const handleChange = (e) =>
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => { e.preventDefault(); onSave(formData); };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <form onSubmit={handleSubmit}>
          <h2 className="text-xl font-bold text-gray-800 mb-6">Edit Profile</h2>
          <div className="space-y-4">
            {["name", "email", "profilePicture"].map(field => (
              <div key={field}>
                <label htmlFor={field}
                  className="block text-sm font-medium text-gray-600 mb-1 capitalize">
                  {field === "profilePicture" ? "Profile Picture URL" : field}
                </label>
                <input
                  type={field === "email" ? "email" : "text"}
                  id={field} name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
              </div>
            ))}
          </div>
          <div className="flex justify-end gap-4 mt-8">
            <button type="button" onClick={onCancel}
              className="px-6 py-2 text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition">
              Cancel
            </button>
            <button type="submit"
              className="px-6 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileForm;
