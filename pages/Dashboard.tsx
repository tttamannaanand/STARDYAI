
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import Logo from '../components/Logo';
import NotificationsMenu from '../components/NotificationsMenu';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [isNotifOpen, setIsNotifOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col pb-32 bg-background-light dark:bg-background-dark">
      <NotificationsMenu isOpen={isNotifOpen} onClose={() => setIsNotifOpen(false)} />
      
      {/* Header Overlay */}
      <header className="bg-stardy-navy p-6 pb-14 rounded-b-3xl shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-10 -mt-10 blur-3xl"></div>
        
        {/* Branding Row */}
        <div className="flex items-center justify-between mb-6 relative z-10">
          <span className="text-white font-black tracking-tighter text-sm">STARDY.AI</span>
          <Logo className="size-6" />
        </div>

        <div className="flex items-center justify-between relative z-10">
          <div className="flex items-center gap-4">
            <div className="relative" onClick={() => navigate('/profile')}>
              <div className="size-14 rounded-full border-2 border-primary overflow-hidden cursor-pointer bg-slate-800">
                <img 
                  className="w-full h-full object-cover scale-110" 
                  src="https://api.dicebear.com/7.x/notionists/svg?seed=Sai&backgroundColor=ffdfbf" 
                  alt="User" 
                />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full border-2 border-stardy-navy">
                LV. 12
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-white text-xl font-bold tracking-tight">Welcome back!</h1>
                <span className="material-symbols-outlined text-primary text-sm fill animate-pulse">auto_awesome</span>
              </div>
              <p className="text-primary/80 text-sm font-medium">Sai Sharan, ready to level up?</p>
            </div>
          </div>
          <button 
            onClick={() => setIsNotifOpen(true)}
            className="size-12 rounded-full bg-white/10 flex items-center justify-center text-white backdrop-blur-md border border-white/10 hover:bg-white/20 transition-colors"
          >
            <span className="material-symbols-outlined">notifications</span>
          </button>
        </div>
      </header>

      {/* Stats Section */}
      <div className="px-4 -mt-10 grid grid-cols-2 gap-3 relative z-20">
        <div className="bg-white dark:bg-[#1a1a1a] p-4 rounded-2xl shadow-lg border border-slate-200 dark:border-white/5 flex flex-col items-center">
          <span className="material-symbols-outlined text-primary mb-1 fill">stars</span>
          <span className="text-xs font-medium text-slate-500">XP</span>
          <span className="text-lg font-bold tabular-nums">3,000</span>
        </div>
        <div className="bg-white dark:bg-[#1a1a1a] p-4 rounded-2xl shadow-lg border border-slate-200 dark:border-white/5 flex flex-col items-center">
          <span className="material-symbols-outlined text-orange-500 mb-1 fill">local_fire_department</span>
          <span className="text-xs font-medium text-slate-500">Streak</span>
          <span className="text-lg font-bold tabular-nums">5 Days</span>
        </div>
      </div>

      {/* Progress Section */}
      <section className="p-6 mt-4">
        <div className="flex justify-between items-end mb-3">
          <div>
            <h2 className="text-lg font-bold">Current Level: 12</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">750 XP to Level 13</p>
          </div>
          <span className="text-primary font-bold text-sm">62%</span>
        </div>
        <div className="w-full bg-slate-200 dark:bg-white/10 h-4 rounded-full overflow-hidden">
          <div className="h-full bg-primary shadow-[0_0_15px_rgba(248,151,32,0.5)]" style={{ width: '62%' }}></div>
        </div>
      </section>

      {/* Daily Goal Card */}
      <section className="px-6 py-2">
        <div className="bg-stardy-navy rounded-2xl p-6 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full -mr-16 -mt-16 blur-3xl"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-primary text-lg">bolt</span>
              <span className="text-primary text-[10px] font-bold uppercase tracking-widest">Daily Goal</span>
            </div>
            <h3 className="text-white text-xl font-bold mb-1">Complete 1 Lesson</h3>
            <p className="text-slate-300 text-sm mb-4 leading-relaxed">Boost your soft skills and maintain your 5-day streak.</p>
            <button 
              onClick={() => navigate('/quiz')}
              className="bg-primary hover:bg-primary/90 text-white font-bold py-3.5 px-6 rounded-full w-full transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              Start Today's Lesson
              <span className="material-symbols-outlined text-sm">arrow_forward_ios</span>
            </button>
          </div>
        </div>
      </section>

      {/* Continue Learning */}
      <section className="mt-6">
        <div className="flex items-center justify-between px-6 mb-4">
          <h2 className="text-lg font-bold">Continue Learning</h2>
          <button onClick={() => navigate('/learn')} className="text-primary text-sm font-bold">View All</button>
        </div>
        <div className="flex overflow-x-auto gap-4 px-6 pb-4 no-scrollbar">
          <div className="min-w-[280px] bg-white dark:bg-zinc-900 rounded-2xl p-4 border border-slate-100 dark:border-white/5 shadow-sm">
            <div className="flex gap-4 mb-3">
              <div className="size-16 rounded-2xl bg-orange-100 dark:bg-primary/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary text-3xl">code</span>
              </div>
              <div>
                <h4 className="font-bold text-base leading-tight">Advanced React UI Patterns</h4>
                <p className="text-xs text-slate-500 mt-1">Tech Skill • 12 Lessons left</p>
              </div>
            </div>
            <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 mb-1">
              <span>PROGRESS</span>
              <span>45%</span>
            </div>
            <div className="w-full bg-slate-100 dark:bg-white/5 h-1.5 rounded-full overflow-hidden">
              <div className="h-full bg-primary" style={{ width: '45%' }}></div>
            </div>
          </div>

          <div className="min-w-[280px] bg-white dark:bg-zinc-900 rounded-2xl p-4 border border-slate-100 dark:border-white/5 shadow-sm">
            <div className="flex gap-4 mb-3">
              <div className="size-16 rounded-2xl bg-blue-100 dark:bg-stardy-blue/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-stardy-blue text-3xl">record_voice_over</span>
              </div>
              <div>
                <h4 className="font-bold text-base leading-tight">Public Speaking Mastery</h4>
                <p className="text-xs text-slate-500 mt-1">Soft Skill • 4 Lessons left</p>
              </div>
            </div>
            <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 mb-1">
              <span>PROGRESS</span>
              <span>80%</span>
            </div>
            <div className="w-full bg-slate-100 dark:bg-white/5 h-1.5 rounded-full overflow-hidden">
              <div className="h-full bg-stardy-blue" style={{ width: '80%' }}></div>
            </div>
          </div>
        </div>
      </section>

      <BottomNav />
    </div>
  );
};

export default Dashboard;
