
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import BottomNav from '../components/BottomNav';
import FeedbackWidget from '../components/FeedbackWidget';
import { useTheme } from '../components/ThemeContext';

const Settings: React.FC = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const settingsOptions = [
    {
      title: 'Account Information',
      desc: 'Update your name, email, age, and phone',
      icon: 'person',
      path: '/account-info'
    },
    {
      title: 'Security',
      desc: 'Change password and manage 2FA',
      icon: 'security',
      path: '/error'
    },
    {
      title: 'Notifications',
      desc: 'Manage push and email alerts',
      icon: 'notifications',
      path: '/error'
    },
    {
      title: 'Privacy',
      desc: 'Control your data and visibility',
      icon: 'visibility',
      path: '/privacy'
    },
    {
      title: 'Help & Support',
      desc: 'Troubleshoot issues and contact us',
      icon: 'help',
      path: '/help'
    },
    {
      title: 'Stardy Premium',
      desc: 'Unlock exclusive courses and internships',
      icon: 'workspace_premium',
      path: '/premium'
    }
  ];

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
          <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
        </div>
      </header>

      <main className="px-6 space-y-4">
        {/* Appearance / Theme Toggle */}
        <div 
          onClick={toggleTheme}
          className="flex items-center justify-between p-5 bg-slate-50 dark:bg-[#1a1a1a] rounded-2xl cursor-pointer hover:bg-slate-100 dark:hover:bg-[#222] transition-all border border-slate-100 dark:border-white/5 group"
        >
          <div className="flex items-center gap-4">
            <div className="size-12 rounded-2xl bg-white dark:bg-white/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
              <span className="material-symbols-outlined text-slate-500 group-hover:text-primary transition-colors">
                {theme === 'dark' ? 'light_mode' : 'dark_mode'}
              </span>
            </div>
            <div>
              <p className="text-sm font-bold">Appearance</p>
              <p className="text-[10px] text-slate-500 font-medium">Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{theme}</span>
            <div className={`w-10 h-5 rounded-full relative transition-colors ${theme === 'dark' ? 'bg-primary' : 'bg-slate-200'}`}>
              <div className={`absolute top-1 size-3 rounded-full bg-white transition-all ${theme === 'dark' ? 'left-6' : 'left-1'}`}></div>
            </div>
          </div>
        </div>

        {settingsOptions.map((option) => (
          <div 
            key={option.title}
            onClick={() => navigate(option.path)}
            className="flex items-center justify-between p-5 bg-slate-50 dark:bg-[#1a1a1a] rounded-2xl cursor-pointer hover:bg-slate-100 dark:hover:bg-[#222] transition-all border border-slate-100 dark:border-white/5 group"
          >
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-2xl bg-white dark:bg-white/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <span className="material-symbols-outlined text-slate-500 group-hover:text-primary transition-colors">{option.icon}</span>
              </div>
              <div>
                <p className="text-sm font-bold">{option.title}</p>
                <p className="text-[10px] text-slate-500 font-medium">{option.desc}</p>
              </div>
            </div>
            <span className="material-symbols-outlined text-slate-400 group-hover:translate-x-1 transition-transform">chevron_right</span>
          </div>
        ))}

        <div className="pt-8">
          <button 
            onClick={() => navigate('/')}
            className="w-full h-14 bg-red-500/10 text-red-500 font-bold rounded-full border border-red-500/20 hover:bg-red-500/20 transition-all flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined">logout</span>
            Logout
          </button>
        </div>

        <div className="pt-8">
          <FeedbackWidget />
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Settings;
