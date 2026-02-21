
import React, { useEffect, useState } from 'react';
import Logo from '../components/Logo';

const Loading: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 20);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-screen bg-stardy-navy flex flex-col p-8 relative overflow-hidden">
      {/* Top Branding Row */}
      <div className="flex items-center justify-between mb-10 relative z-20">
        <span className="text-white font-black tracking-tighter text-sm">STARDY.AI</span>
        <Logo className="size-8" />
      </div>

      {/* Background Decor */}
      <div className="absolute top-1/4 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/4 -right-10 w-64 h-64 bg-stardy-blue/10 rounded-full blur-[100px]"></div>

      <div className="flex-1 flex flex-col items-center justify-center relative z-10">
        <Logo className="size-32 mb-8" animate />
        
        <div className="text-center space-y-2 mb-12">
          <h1 className="text-4xl font-extrabold text-white tracking-tighter">Stardy</h1>
          <p className="text-primary/80 font-bold uppercase tracking-[0.3em] text-[10px]">Aligning the stars</p>
        </div>

        <div className="w-64 space-y-3">
          <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary to-stardy-blue transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-[10px] font-bold text-white/40 uppercase tracking-widest px-1">
            <span>Initializing</span>
            <span className="tabular-nums">{progress}%</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 text-white/20 text-[9px] font-bold uppercase tracking-[0.5em]">
        Version 2.4.1
      </div>
    </div>
  );
};

export default Loading;
