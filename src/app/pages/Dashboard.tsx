import React from 'react';
import { useAuth } from '../../features/auth/authContext';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="p-10">
      <h1 className="text-3xl font-black">Welcome back, {user?.displayName || 'Student'}!</h1>
      <p className="text-slate-500 mt-2">Your learning journey continues here.</p>
      
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="font-bold text-slate-800">Current Level</h3>
          <p className="text-2xl font-black text-blue-600 mt-2 uppercase tracking-tighter">Medium</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="font-bold text-slate-800">Lessons Completed</h3>
          <p className="text-2xl font-black text-green-600 mt-2 uppercase tracking-tighter">0</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="font-bold text-slate-800">Study Time</h3>
          <p className="text-2xl font-black text-amber-600 mt-2 uppercase tracking-tighter">12m</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
