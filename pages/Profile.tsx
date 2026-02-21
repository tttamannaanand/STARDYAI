
import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import Logo from '../components/Logo';
import FeedbackWidget from '../components/FeedbackWidget';

const Profile: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col pb-32 bg-background-light dark:bg-background-dark">
      {/* Profile Header Card with Star Overlay */}
      <div className="bg-stardy-navy pt-12 pb-16 px-6 rounded-b-[3.5rem] shadow-2xl relative overflow-hidden">
        <div className="flex items-center justify-between mb-8 relative z-10">
          <span className="text-white font-black tracking-tighter text-sm">STARDY.AI</span>
          <Logo className="size-8" />
        </div>

        <div className="flex items-center justify-between mb-6 relative z-10">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate(-1)} className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              <span className="material-symbols-outlined text-white text-xl">arrow_back_ios_new</span>
            </button>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              <span className="material-symbols-outlined text-white text-xl">share</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center relative z-10">
          <div className="relative mb-6">
            <div className="size-32 rounded-full border-[4px] border-primary shadow-[0_0_30px_rgba(248,151,32,0.4)] overflow-hidden bg-slate-800">
              <img 
                src="https://api.dicebear.com/7.x/notionists/svg?seed=Sai&backgroundColor=ffdfbf" 
                alt="Profile" 
                className="w-full h-full object-cover scale-110" 
              />
            </div>
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 translate-y-1/2 bg-primary text-white text-[11px] font-black px-4 py-1.5 rounded-full shadow-lg border-2 border-stardy-navy whitespace-nowrap">
              LVL 15
            </div>
          </div>
          
          <div className="flex flex-col items-center mt-4">
            <h1 className="text-white text-3xl font-bold mb-3 tracking-tight">Sai Sharan</h1>
            {/* Early Bird Member Badge with Tooltip */}
            <div className="group relative mb-8">
              <div className="size-10 rounded-full bg-white/10 backdrop-blur-md border border-primary/40 flex items-center justify-center shadow-xl cursor-help transition-all hover:scale-110 hover:border-primary">
                <span className="material-symbols-outlined text-primary text-xl fill">flutter_dash</span>
              </div>
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap bg-stardy-navy/90 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-2xl border border-white/10 z-50 translate-y-2 group-hover:translate-y-0">
                Early Bird Member
              </div>
            </div>
          </div>
          
          <div className="w-full max-w-sm space-y-3 px-4">
            <div className="flex justify-between text-[10px] text-white font-bold uppercase tracking-[0.1em]">
              <span className="opacity-80">Next Level Progress</span>
              <span className="tabular-nums">1,450 / 2,000 XP</span>
            </div>
            <div className="h-2.5 w-full bg-white/10 rounded-full overflow-hidden p-0.5 border border-white/5">
              <div className="h-full bg-primary rounded-full shadow-[0_0_15px_rgba(248,151,32,0.6)] transition-all duration-1000" style={{ width: '72%' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex gap-4 px-6 -mt-10 relative z-20">
        {[
          { label: 'COURSES', val: '12' },
          { label: 'STREAK', val: '7', icon: 'local_fire_department' },
          { label: 'BADGES', val: '9' }
        ].map((stat) => (
          <div key={stat.label} className="flex-1 rounded-[1.5rem] bg-white dark:bg-[#1a1a1a] p-6 flex flex-col items-center justify-center shadow-xl dark:shadow-2xl border border-slate-100 dark:border-white/5 transition-transform hover:scale-[1.02]">
            <div className="flex items-center gap-1">
              {stat.icon && <span className="material-symbols-outlined text-primary text-2xl fill">{stat.icon}</span>}
              <p className="text-primary text-2xl font-black tabular-nums">{stat.val}</p>
            </div>
            <p className="text-slate-400 dark:text-slate-500 text-[9px] font-black uppercase tracking-[0.1em] mt-2">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Career Interests */}
      <div className="px-6 mt-12 mb-4">
        <h3 className="text-sm font-black uppercase tracking-[0.15em] text-slate-500 mb-5">Career Interests</h3>
        <div className="flex flex-wrap gap-2">
          {['Full-Stack Developer', 'Product Manager', 'Data Scientist'].map((job) => (
            <div key={job} className="bg-primary/10 border border-primary/20 text-primary px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-wider">
              {job}
            </div>
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
        <FeedbackWidget />
      </div>

      <BottomNav />
    </div>
  );
};

export default Profile;
