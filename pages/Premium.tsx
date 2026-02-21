
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import BottomNav from '../components/BottomNav';

const Premium: React.FC = () => {
  const navigate = useNavigate();

  const benefits = [
    { title: 'Exclusive Internships', desc: 'Direct access to top-tier tech companies.', icon: 'work' },
    { title: 'Advanced Courses', desc: 'Master complex topics with expert paths.', icon: 'auto_stories' },
    { title: 'Priority Support', desc: 'Get help from our mentors in minutes.', icon: 'support_agent' },
    { title: 'Ad-Free Experience', desc: 'Focus entirely on your learning journey.', icon: 'block' }
  ];

  return (
    <div className="min-h-screen flex flex-col pb-32 bg-stardy-navy text-white">
      <header className="px-6 pt-12 pb-6 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <span className="text-white font-black tracking-tighter text-sm">STARDY.AI</span>
          <Logo className="size-8" />
        </div>
        <div className="flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="size-10 flex items-center justify-center rounded-full bg-white/10 border border-white/10 transition-colors">
            <span className="material-symbols-outlined text-xl">arrow_back_ios_new</span>
          </button>
          <h1 className="text-2xl font-bold tracking-tight">Stardy Premium</h1>
        </div>
      </header>

      <main className="px-6 space-y-8">
        <section className="text-center py-8">
          <div className="size-24 bg-gradient-to-tr from-primary to-orange-300 rounded-[2rem] flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-primary/30 animate-bounce">
            <span className="material-symbols-outlined text-white text-5xl fill">workspace_premium</span>
          </div>
          <h2 className="text-3xl font-black tracking-tighter mb-2">Unlock Your Potential</h2>
          <p className="text-slate-400 text-sm max-w-[280px] mx-auto">Join thousands of students accelerating their careers with Stardy Premium.</p>
        </section>

        <section className="grid grid-cols-1 gap-4">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="flex items-center gap-4 p-5 bg-white/5 rounded-3xl border border-white/10">
              <div className="size-12 rounded-2xl bg-primary/20 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary">{benefit.icon}</span>
              </div>
              <div>
                <h3 className="text-sm font-bold">{benefit.title}</h3>
                <p className="text-[10px] text-slate-400 font-medium">{benefit.desc}</p>
              </div>
            </div>
          ))}
        </section>

        <section className="pt-4">
          <div className="bg-white text-slate-900 p-8 rounded-[2.5rem] text-center shadow-2xl">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-2 block">Best Value</span>
            <h4 className="text-4xl font-black tracking-tighter mb-1">$9.99<span className="text-sm text-slate-400 font-bold">/mo</span></h4>
            <p className="text-xs text-slate-500 mb-8">Cancel anytime. No hidden fees.</p>
            
            <button className="w-full h-16 bg-primary text-white font-black text-lg rounded-full shadow-xl shadow-primary/20 active:scale-95 transition-transform mb-4">
              Start 7-Day Free Trial
            </button>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Secure Payment via Stripe</p>
          </div>
        </section>
      </main>

      <BottomNav />
    </div>
  );
};

export default Premium;
