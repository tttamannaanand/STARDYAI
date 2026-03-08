
import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import Logo from '../components/Logo';
import FeedbackWidget from '../components/FeedbackWidget';

const Profile: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col pb-32 bg-background-light">
      {/* Profile Header - Updated to match new theme */}
      <header className="bg-black px-6 pt-12 pb-6 flex flex-col gap-6 border-b border-white/10">
        <div className="flex items-center justify-between">
          <button onClick={() => navigate(-1)} className="size-10 flex items-center justify-center rounded-full bg-white/10 text-slate-500 hover:text-white active:text-white transition-colors">
            <span className="material-symbols-outlined text-xl">arrow_back</span>
          </button>
          <span className="font-black tracking-tighter text-sm text-slate-500">STARDY.AI</span>
          <Logo className="size-8" />
        </div>
        
        <div className="flex flex-col items-center">
          <div className="relative mb-6">
            <div className="size-32 rounded-full border-[4px] border-primary shadow-xl overflow-hidden bg-slate-800">
              <img 
                src="https://api.dicebear.com/7.x/notionists/svg?seed=Sai&backgroundColor=ffdfbf" 
                alt="Profile" 
                className="w-full h-full object-cover scale-110" 
              />
            </div>
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 translate-y-1/2 bg-primary text-white text-[11px] font-black px-4 py-1.5 rounded-full shadow-lg whitespace-nowrap">
              LVL 15
            </div>
          </div>
          <h1 className="text-3xl font-black tracking-tight text-slate-500">Sai Sharan</h1>
          <p className="text-slate-400 font-bold text-xs uppercase tracking-widest mt-2">Full-Stack Developer</p>
        </div>
      </header>

      {/* Stats Section */}
      <div className="flex gap-4 px-6 mt-8">
        {[
          { label: 'COURSES', val: '12' },
          { label: 'STREAK', val: '7', icon: 'local_fire_department' },
          { label: 'BADGES', val: '9' }
        ].map((stat) => (
          <div key={stat.label} className="flex-1 rounded-[1.5rem] bg-gradient-to-br from-primary to-[#7f1d1d] p-6 flex flex-col items-center justify-center shadow-lg shadow-primary/10 border border-white/10 transition-transform hover:scale-[1.02]">
            <div className="flex items-center gap-1">
              {stat.icon && <span className="material-symbols-outlined text-white text-2xl fill">{stat.icon}</span>}
              <p className="text-white text-2xl font-black tabular-nums">{stat.val}</p>
            </div>
            <p className="text-white/60 text-[9px] font-black uppercase tracking-[0.1em] mt-2">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Career Interests */}
      <div className="px-6 mt-12 mb-4">
        <h3 className="text-sm font-black uppercase tracking-[0.15em] text-slate-500 mb-5">Career Interests</h3>
        <div className="flex flex-wrap gap-2">
          {['Full-Stack Developer', 'Product Manager', 'Data Scientist'].map((job) => (
            <button 
              key={job} 
              onClick={() => navigate(`/roadmap/${job}`)}
              className="bg-primary/10 border border-primary/20 text-primary px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-wider hover:bg-primary hover:text-white transition-all active:scale-95"
            >
              {job}
            </button>
          ))}
          <button 
            onClick={() => {
              const newInterest = prompt('Enter a new career interest:');
              if (newInterest) {
                alert(`Added "${newInterest}" to your interests!`);
              }
            }}
            className="bg-slate-100 dark:bg-white/5 text-slate-500 px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-wider flex items-center gap-1 border border-slate-200 dark:border-white/5 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
          >
            <span className="material-symbols-outlined text-xs">add</span> Add
          </button>
        </div>
      </div>

      {/* Settings/Account */}
      <div className="mt-8 px-6 pb-4">
        <div 
          onClick={() => navigate('/settings')}
          className="flex items-center justify-between p-5 bg-white dark:bg-[#1a1a1a] rounded-2xl cursor-pointer hover:bg-slate-50 dark:hover:bg-[#222] transition-all border border-slate-100 dark:border-white/5 group shadow-sm"
        >
          <div className="flex items-center gap-4">
            <div className="size-12 rounded-2xl bg-slate-100 dark:bg-white/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
              <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">settings</span>
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900 dark:text-white">Profile Settings</p>
              <p className="text-[10px] text-slate-500 font-medium">Account, Security, Preferences</p>
            </div>
          </div>
          <span className="material-symbols-outlined text-slate-400 group-hover:translate-x-1 transition-transform">chevron_right</span>
        </div>
      </div>

      {/* Feedback Section */}
      <div className="px-6 mt-8">
        <FeedbackWidget variant="primary" />
      </div>

      <BottomNav />
    </div>
  );
};

export default Profile;
