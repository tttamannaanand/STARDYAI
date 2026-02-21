
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import BottomNav from '../components/BottomNav';
import FeedbackWidget from '../components/FeedbackWidget';

const Help: React.FC = () => {
  const navigate = useNavigate();

  const [message, setMessage] = useState('');

  const issues = [
    { title: 'App Crash', id: 'crash' },
    { title: 'XP Not Syncing', id: 'xp' },
    { title: 'Login Issues', id: 'login' },
    { title: 'Course Content Error', id: 'content' },
    { title: 'Other', id: 'other' }
  ];

  const faqs = [
    {
      q: "How do I earn XP?",
      a: "You earn XP by completing lessons, finishing quizzes, and maintaining your daily streak."
    },
    {
      q: "How do I apply for internships?",
      a: "Go to the Opportunities tab, find a match, and click 'Apply Now'. Make sure your profile is complete!"
    }
  ];

  const troubleshootItems = [
    { title: 'Connection Test', icon: 'wifi', status: 'Optimal' },
    { title: 'Sync Status', icon: 'sync', status: 'Synced' }
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
          <h1 className="text-2xl font-bold tracking-tight">Help & Support</h1>
        </div>
      </header>

      <main className="px-6 space-y-8">
        {/* Contact Support Options */}
        <section className="grid grid-cols-2 gap-4">
          <a href="mailto:support@stardy.ai" className="flex flex-col items-center gap-3 p-6 bg-slate-50 dark:bg-[#1a1a1a] rounded-3xl border border-slate-100 dark:border-white/5">
            <span className="material-symbols-outlined text-primary text-3xl">mail</span>
            <span className="text-xs font-bold">Gmail Support</span>
          </a>
          <a href="tel:+1234567890" className="flex flex-col items-center gap-3 p-6 bg-slate-50 dark:bg-[#1a1a1a] rounded-3xl border border-slate-100 dark:border-white/5">
            <span className="material-symbols-outlined text-primary text-3xl">call</span>
            <span className="text-xs font-bold">Call Us</span>
          </a>
        </section>

        {/* Report an Issue */}
        <section>
          <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-4">Report an Issue</h2>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2 mb-4">
              {issues.map((issue) => (
                <button key={issue.id} className="px-4 py-2 bg-slate-100 dark:bg-white/5 rounded-full text-[10px] font-bold uppercase tracking-wider text-slate-500 hover:bg-primary/10 hover:text-primary transition-colors">
                  {issue.title}
                </button>
              ))}
            </div>
            <div className="relative">
              <textarea 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Describe your issue here..."
                className="w-full h-32 p-4 bg-slate-50 dark:bg-[#1a1a1a] border border-slate-100 dark:border-white/5 rounded-2xl text-sm outline-none focus:border-primary transition-all resize-none"
              />
            </div>
            <button className="w-full h-14 bg-primary text-white font-bold rounded-full shadow-lg shadow-primary/20 active:scale-95 transition-transform">
              Send Message
            </button>
          </div>
        </section>

        {/* Troubleshoot Section */}
        <section>
          <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-4">System Status</h2>
          <div className="grid grid-cols-1 gap-3">
            {troubleshootItems.map((item) => (
              <div key={item.title} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-[#1a1a1a] rounded-2xl border border-slate-100 dark:border-white/5">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">{item.icon}</span>
                  <span className="text-sm font-bold">{item.title}</span>
                </div>
                <span className="text-[10px] font-black uppercase text-green-500 bg-green-500/10 px-3 py-1 rounded-full">{item.status}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Feedback Section */}
        <section>
          <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-4">Your Feedback</h2>
          <FeedbackWidget />
        </section>
      </main>

      <BottomNav />
    </div>
  );
};

export default Help;
