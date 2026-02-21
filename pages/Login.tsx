
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';

const Login: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col p-8 pt-6">
      {/* Top Branding Row */}
      <div className="flex items-center justify-between mb-10">
        <span className="text-slate-900 dark:text-white font-black tracking-tighter text-sm">STARDY.AI</span>
        <Logo className="size-8" />
      </div>

      <div className="flex flex-col items-center justify-center mb-10">
        {/* Replaced bouncing star with Stardy Logo - Animation removed as requested */}
        <Logo className="size-32 mb-8" />
        <h1 className="text-4xl font-black tracking-tighter text-center">Stardy</h1>
        <p className="text-slate-500 dark:text-slate-400 text-base mt-2 text-center font-medium">Ready to level up your skills?</p>
      </div>

      <div className="flex flex-col gap-5 w-full">
        <h2 className="text-xl font-bold">Login</h2>
        
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium px-1">Email</label>
          <div className="relative flex items-center">
            <span className="material-symbols-outlined absolute left-4 text-slate-400">mail</span>
            <input 
              className="w-full h-14 pl-12 pr-4 rounded-full border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-base focus:border-primary focus:ring-0 outline-none transition-all" 
              placeholder="name@example.com" 
              type="email" 
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center px-1">
            <label className="text-sm font-medium">Password</label>
            <button className="text-xs font-semibold text-primary">Forgot Password?</button>
          </div>
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
        </div>

        <button 
          onClick={() => navigate('/dashboard')}
          className="w-full h-14 bg-primary text-white font-bold text-lg rounded-full shadow-lg shadow-primary/20 active:scale-95 transition-transform mt-4"
        >
          Login
        </button>
      </div>

      <div className="relative my-10 flex items-center">
        <div className="flex-grow border-t border-slate-200 dark:border-white/10"></div>
        <span className="flex-shrink mx-4 text-xs font-medium text-slate-400 uppercase tracking-widest">Or continue with</span>
        <div className="flex-grow border-t border-slate-200 dark:border-white/10"></div>
      </div>

      <div className="flex justify-center gap-6 mb-12">
        <button className="flex items-center justify-center size-14 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 shadow-sm active:scale-90 transition-transform">
          <img alt="Google" className="size-6" src="https://www.gstatic.com/images/branding/product/2x/googleg_48dp.png"/>
        </button>
        <button className="flex items-center justify-center size-14 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 shadow-sm active:scale-90 transition-transform">
          <svg className="size-6 fill-slate-800 dark:fill-white" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
            <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
          </svg>
        </button>
        <button className="flex items-center justify-center size-14 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 shadow-sm active:scale-90 transition-transform">
          <span className="material-symbols-outlined text-[#1877F2]">leaderboard</span>
        </button>
      </div>

      <div className="mt-auto text-center pb-8">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Don't have an account? 
          <button onClick={() => navigate('/signup')} className="text-primary font-bold ml-1 hover:underline">Sign up</button>
        </p>
      </div>
    </div>
  );
};

export default Login;
