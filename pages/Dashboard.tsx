
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import Logo from '../components/Logo';
import NotificationsMenu from '../components/NotificationsMenu';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [isFirstTime, setIsFirstTime] = useState(true); // Simulated state for demonstration

  return (
    <div className="min-h-screen flex flex-col pb-32 bg-background-light">
      <NotificationsMenu isOpen={isNotifOpen} onClose={() => setIsNotifOpen(false)} />
      
      {/* Header Overlay - Updated to match image */}
      <header className="bg-black p-6 flex items-center gap-4 border-b border-white/10 sticky top-0 z-50">
        <div className="flex-1 relative">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">search</span>
          <input 
            type="text" 
            placeholder="Search courses, lessons..."
            className="w-full h-12 bg-white/10 rounded-full pl-12 pr-4 text-sm text-white outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-slate-500"
          />
        </div>
        
        <button 
          onClick={() => setIsNotifOpen(true)}
          className="size-12 rounded-full flex items-center justify-center text-slate-500 hover:text-white active:text-white transition-colors relative"
        >
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-3 right-3 size-2 bg-primary rounded-full border-2 border-black"></span>
        </button>

        <div 
          onClick={() => navigate('/profile')}
          className="size-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm cursor-pointer shadow-lg shadow-primary/20"
        >
          SS
        </div>
      </header>

      {/* Welcome Section - Moved below the new header */}
      <section className="px-6 pt-8 pb-4">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-black tracking-tight text-slate-900">
              {isFirstTime ? 'Welcome, Explorer!' : 'Welcome back!'}
            </h1>
            <p className="text-slate-500 text-sm font-medium">
              {isFirstTime ? 'Let\'s start your journey.' : 'Sai Sharan, ready to level up?'}
            </p>
          </div>
          {isFirstTime && (
            <button 
              onClick={() => setIsFirstTime(false)}
              className="text-[10px] font-black text-primary uppercase tracking-widest hover:underline"
            >
              Demo Mode
            </button>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <div className="px-6 grid grid-cols-2 gap-4">
        <div className="bg-gradient-to-br from-primary to-[#7f1d1d] p-5 rounded-3xl shadow-lg shadow-primary/20 border border-white/10 flex flex-col items-center group hover:scale-[1.02] transition-transform">
          <span className="material-symbols-outlined text-white mb-2 fill">stars</span>
          <span className="text-[10px] font-black text-white/60 uppercase tracking-widest">XP</span>
          <span className="text-xl font-black tabular-nums text-white">{isFirstTime ? '0' : '3,000'}</span>
        </div>
        <div className="bg-gradient-to-br from-primary to-[#7f1d1d] p-5 rounded-3xl shadow-lg shadow-primary/20 border border-white/10 flex flex-col items-center group hover:scale-[1.02] transition-transform">
          <span className="material-symbols-outlined text-white mb-2 fill">local_fire_department</span>
          <span className="text-[10px] font-black text-white/60 uppercase tracking-widest">Streak</span>
          <span className="text-xl font-black tabular-nums text-white">{isFirstTime ? '0 Days' : '5 Days'}</span>
        </div>
      </div>

      {/* Progress Section */}
      <section className="p-6 mt-4">
        <div className="flex justify-between items-end mb-3">
          <div>
            <h2 className="text-lg font-bold text-slate-900">Current Level: {isFirstTime ? '1' : '12'}</h2>
            <p className="text-sm text-slate-500">
              {isFirstTime ? '500 XP to Level 2' : '750 XP to Level 13'}
            </p>
          </div>
          <span className="text-primary font-bold text-sm">{isFirstTime ? '0%' : '62%'}</span>
        </div>
        <div className="w-full bg-slate-100 h-4 rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary shadow-[0_0_15px_rgba(248,151,32,0.5)] transition-all duration-1000" 
            style={{ width: isFirstTime ? '0%' : '62%' }}
          ></div>
        </div>
      </section>

      {/* Daily Goal Card / Onboarding CTA */}
      <section className="px-6 py-2">
        <div className="bg-gradient-to-br from-primary to-[#7f1d1d] rounded-2xl p-6 relative overflow-hidden group shadow-xl shadow-primary/20">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-white text-lg">
                {isFirstTime ? 'explore' : 'bolt'}
              </span>
              <span className="text-white/80 text-[10px] font-bold uppercase tracking-widest">
                {isFirstTime ? 'Getting Started' : 'Daily Goal'}
              </span>
            </div>
            <h3 className="text-white text-xl font-bold mb-1">
              {isFirstTime ? 'Discover Your Path' : 'Complete 1 Lesson'}
            </h3>
            <p className="text-white/70 text-sm mb-4 leading-relaxed">
              {isFirstTime 
                ? 'Take our AI-powered skill assessment to unlock your personalized career roadmap.' 
                : 'Boost your soft skills and maintain your 5-day streak.'}
            </p>
            <button 
              onClick={() => navigate(isFirstTime ? '/onboarding' : '/quiz')}
              className="bg-white text-black font-black py-3.5 px-6 rounded-full w-full transition-all active:scale-95 flex items-center justify-center gap-2 shadow-lg"
            >
              {isFirstTime ? 'Start Skill Assessment' : 'Start Today\'s Lesson'}
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>

      {/* Continue Learning / Recommended */}
      <section className="mt-8">
        <div className="flex items-center justify-between px-6 mb-6 border-l-4 border-primary">
          <h2 className="text-xl font-black tracking-tight uppercase ml-2">
            {isFirstTime ? 'Recommended for you' : 'Recommended for you'}
          </h2>
          <button onClick={() => navigate('/learn')} className="text-primary text-xs font-bold uppercase tracking-widest">View All</button>
        </div>
        <div className="flex overflow-x-auto gap-4 px-6 pb-4 no-scrollbar">
          {isFirstTime ? (
            <>
              <div 
                onClick={() => navigate('/learn')}
                className="min-w-[280px] bg-widget rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-xl transition-all cursor-pointer"
              >
                <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-primary text-3xl">code</span>
                </div>
                <h4 className="font-bold text-lg mb-1 text-slate-900">Software Engineering</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Master full-stack development with AI-guided projects.</p>
                <div className="mt-4 flex items-center gap-2 text-primary font-black text-[10px] uppercase tracking-widest">
                  <span>Explore</span>
                  <span className="material-symbols-outlined text-xs">arrow_forward</span>
                </div>
              </div>
              <div 
                onClick={() => navigate('/learn')}
                className="min-w-[280px] bg-widget rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-xl transition-all cursor-pointer"
              >
                <div className="size-14 rounded-2xl bg-slate-100 flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-slate-600 text-3xl">palette</span>
                </div>
                <h4 className="font-bold text-lg mb-1 text-slate-900">UI/UX Design</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Build beautiful, user-centric interfaces from scratch.</p>
                <div className="mt-4 flex items-center gap-2 text-slate-600 font-black text-[10px] uppercase tracking-widest">
                  <span>Explore</span>
                  <span className="material-symbols-outlined text-xs">arrow_forward</span>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="min-w-[280px] bg-widget rounded-2xl p-4 border border-slate-100 shadow-sm">
                <div className="flex gap-4 mb-3">
                  <div className="size-16 rounded-2xl bg-slate-200 flex items-center justify-center shrink-0">
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
                <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: '45%' }}></div>
                </div>
              </div>

              <div className="min-w-[280px] bg-widget rounded-2xl p-4 border border-slate-100 shadow-sm">
                <div className="flex gap-4 mb-3">
                  <div className="size-16 rounded-2xl bg-slate-200 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-slate-600 text-3xl">record_voice_over</span>
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
                <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                  <div className="h-full bg-slate-600" style={{ width: '80%' }}></div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* StarBuddy Intro for First Time */}
      {isFirstTime && (
        <section className="px-6 mt-4">
          <div className="bg-widget border border-slate-200 p-6 rounded-[2rem] flex items-center gap-4">
            <div className="size-16 rounded-2xl bg-primary flex items-center justify-center shrink-0 shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined text-white text-3xl">auto_awesome</span>
            </div>
            <div>
              <h4 className="text-primary font-black text-sm uppercase tracking-widest">Meet StarBuddy</h4>
              <p className="text-slate-600 text-xs font-medium mt-1 leading-relaxed">
                Your AI mentor is ready to help. Tap the chat icon to ask anything!
              </p>
            </div>
          </div>
        </section>
      )}

      <BottomNav />
    </div>
  );
};

export default Dashboard;
