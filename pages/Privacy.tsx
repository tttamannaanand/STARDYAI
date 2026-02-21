
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import BottomNav from '../components/BottomNav';

const Privacy: React.FC = () => {
  const navigate = useNavigate();

  const policies = [
    {
      title: "Data Collection",
      content: "We collect information you provide directly to us, such as when you create an account, update your profile, or participate in quizzes. This includes your name, email, and learning progress."
    },
    {
      title: "How We Use Your Data",
      content: "We use the information we collect to provide, maintain, and improve our services, to personalize your learning experience, and to match you with relevant career opportunities."
    },
    {
      title: "Data Sharing",
      content: "We do not share your personal information with third parties except as described in this policy, such as when you explicitly apply for an internship or project."
    },
    {
      title: "Security",
      content: "We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access."
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
          <h1 className="text-2xl font-bold tracking-tight">Privacy Policy</h1>
        </div>
      </header>

      <main className="px-6 space-y-8">
        <div className="p-6 bg-primary/5 rounded-[2rem] border border-primary/10">
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Last updated: February 21, 2026. Your privacy is important to us. This policy explains how we handle your data.
          </p>
        </div>

        <div className="space-y-6">
          {policies.map((policy, i) => (
            <section key={i}>
              <h2 className="text-sm font-black uppercase tracking-widest text-primary mb-2">{policy.title}</h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {policy.content}
              </p>
            </section>
          ))}
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Privacy;
