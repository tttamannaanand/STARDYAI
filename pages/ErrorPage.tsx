
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';

const ErrorPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col p-6 pt-12 bg-background-light dark:bg-background-dark text-slate-900 dark:text-white transition-colors duration-300">
      <div className="flex items-center justify-between mb-8">
        <span className="font-black tracking-tighter text-sm">STARDY.AI</span>
        <Logo className="size-8" />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-4 text-center">
        <div className="size-32 rounded-3xl bg-slate-100 dark:bg-white/5 flex items-center justify-center mb-8 border border-slate-200 dark:border-white/10">
          <Logo className="size-16 grayscale opacity-50" />
        </div>

        <h1 className="text-3xl font-black tracking-tighter mb-4">
          System Glitch
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-[240px] font-medium">
          We've encountered an unexpected error. Our team has been notified.
        </p>
      </div>

      <div className="space-y-3 pb-12">
        <button 
          onClick={() => navigate('/dashboard')}
          className="w-full h-14 bg-primary text-white font-bold rounded-2xl shadow-lg shadow-primary/20 active:scale-95 transition-all"
        >
          Back to Dashboard
        </button>
        <button 
          onClick={() => navigate(-1)}
          className="w-full h-14 bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 font-bold rounded-2xl active:scale-95 transition-all"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
