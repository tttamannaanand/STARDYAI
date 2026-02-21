
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';

const SignUp: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col p-8 pt-12">
      <div className="flex items-center justify-between mb-8">
        <span className="text-slate-900 dark:text-white font-black tracking-tighter text-sm">STARDY.AI</span>
        <Logo className="size-8" />
      </div>

      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="size-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-white/5">
            <span className="material-symbols-outlined">arrow_back_ios_new</span>
          </button>
        </div>
      </div>

      <div className="mb-10">
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight">
          Join the <span className="text-primary">Adventure</span>
        </h1>
        <p className="mt-2 text-slate-500 dark:text-slate-400 text-lg">
          Level up your skills with millions of learners worldwide.
        </p>
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold uppercase tracking-widest text-slate-400 px-1">Full Name</label>
          <div className="relative flex items-center">
            <span className="material-symbols-outlined absolute left-4 text-slate-400">person</span>
            <input 
              className="w-full h-14 pl-12 pr-4 rounded-full border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-base focus:border-primary focus:ring-0 outline-none transition-all" 
              placeholder="Enter your name" 
              type="text" 
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold uppercase tracking-widest text-slate-400 px-1">Email Address</label>
          <div className="relative flex items-center">
            <span className="material-symbols-outlined absolute left-4 text-slate-400">mail</span>
            <input 
              className="w-full h-14 pl-12 pr-4 rounded-full border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-base focus:border-stardy-blue focus:ring-0 outline-none transition-all" 
              placeholder="hello@stardy.com" 
              type="email" 
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold uppercase tracking-widest text-slate-400 px-1">Password</label>
          <div className="relative flex items-center">
            <span className="material-symbols-outlined absolute left-4 text-slate-400">lock</span>
            <input 
              className="w-full h-14 pl-12 pr-12 rounded-full border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-base focus:border-primary focus:ring-0 outline-none transition-all" 
              placeholder="••••••••" 
              type="password" 
            />
            <button className="absolute right-4 text-slate-400">
              <span className="material-symbols-outlined">visibility</span>
            </button>
          </div>
          <div className="flex gap-1.5 ml-4 mt-1">
            <div className="h-1 w-8 bg-primary rounded-full"></div>
            <div className="h-1 w-8 bg-primary rounded-full"></div>
            <div className="h-1 w-8 bg-slate-200 dark:bg-zinc-800 rounded-full"></div>
            <div className="h-1 w-8 bg-slate-200 dark:bg-zinc-800 rounded-full"></div>
          </div>
        </div>

        <button 
          onClick={() => navigate('/dashboard')}
          className="w-full h-16 bg-primary text-white font-bold text-lg rounded-full shadow-lg shadow-primary/20 flex items-center justify-center gap-2 active:scale-95 transition-transform mt-4"
        >
          Create Account
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>

      <div className="mt-auto text-center pb-8 pt-10">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Already have an account? 
          <button onClick={() => navigate('/login')} className="text-stardy-blue font-bold ml-1 hover:underline">Log In</button>
        </p>
        <p className="mt-4 text-[10px] text-slate-400 leading-relaxed px-4">
          By signing up, you agree to our 
          <span className="underline ml-1">Terms of Service</span> and 
          <span className="underline ml-1">Privacy Policy</span>.
        </p>
      </div>
    </div>
  );
};

export default SignUp;
