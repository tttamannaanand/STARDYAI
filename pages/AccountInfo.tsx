
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import BottomNav from '../components/BottomNav';

const AccountInfo: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: 'Sai Sharan',
    email: 'sai@stardy.ai',
    age: '22',
    gender: 'Male',
    phone: '+1 (555) 0123'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleUpdate = () => {
    alert('Account information updated successfully!');
    navigate('/profile');
  };

  return (
    <div className="min-h-screen flex flex-col pb-32 bg-white dark:bg-background-dark">
      <header className="px-6 pt-12 pb-6 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <span className="text-slate-900 dark:text-white font-black tracking-tighter text-sm">STARDY.AI</span>
          <Logo className="size-8" />
        </div>
        <div className="flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="size-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 transition-colors">
            <span className="material-symbols-outlined text-xl">arrow_back_ios_new</span>
          </button>
          <h1 className="text-2xl font-bold tracking-tight">Account Info</h1>
        </div>
      </header>

      <main className="px-6 space-y-6">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold uppercase tracking-widest text-slate-400 px-1">Full Name</label>
            <input 
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full h-14 px-6 rounded-full border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-base focus:border-primary focus:ring-0 outline-none transition-all" 
              type="text" 
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold uppercase tracking-widest text-slate-400 px-1">Email Address</label>
            <input 
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full h-14 px-6 rounded-full border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-base focus:border-primary focus:ring-0 outline-none transition-all" 
              type="email" 
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-400 px-1">Age</label>
              <input 
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="w-full h-14 px-6 rounded-full border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-base focus:border-primary focus:ring-0 outline-none transition-all" 
                type="number" 
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-400 px-1">Gender</label>
              <select 
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full h-14 px-6 rounded-full border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-base focus:border-primary focus:ring-0 outline-none transition-all appearance-none"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold uppercase tracking-widest text-slate-400 px-1">Phone Number</label>
            <input 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full h-14 px-6 rounded-full border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-base focus:border-primary focus:ring-0 outline-none transition-all" 
              type="tel" 
            />
          </div>

          <button 
            onClick={handleUpdate}
            className="w-full h-16 bg-primary text-white font-bold text-lg rounded-full shadow-lg shadow-primary/20 active:scale-95 transition-transform mt-4"
          >
            Update Information
          </button>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default AccountInfo;
