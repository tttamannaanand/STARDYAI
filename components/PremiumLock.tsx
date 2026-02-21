
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface PremiumLockProps {
  type: 'course' | 'internship' | 'project';
  requiredXP?: number;
  isPremiumOnly?: boolean;
  children: React.ReactNode;
}

const PremiumLock: React.FC<PremiumLockProps> = ({ type, requiredXP, isPremiumOnly, children }) => {
  const navigate = useNavigate();
  
  // Mock state - in a real app this would come from a user context
  const userXP = 1200;
  const isPremiumUser = false;

  const isLocked = (isPremiumOnly && !isPremiumUser) || (requiredXP && userXP < requiredXP);

  if (!isLocked) return <>{children}</>;

  return (
    <div className="relative group">
      <div className="blur-[2px] pointer-events-none opacity-50 grayscale">
        {children}
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 backdrop-blur-md rounded-3xl border border-white/10 p-6 text-center transition-all group-hover:bg-black/50">
        <div className="size-12 rounded-2xl bg-primary/20 flex items-center justify-center mb-3 shadow-lg shadow-primary/20">
          <span className="material-symbols-outlined text-primary text-2xl fill">lock</span>
        </div>
        <h4 className="text-white font-bold text-sm mb-1">Locked Content</h4>
        <p className="text-white/70 text-[10px] font-medium mb-4 leading-tight">
          {isPremiumOnly 
            ? 'This exclusive content requires a Stardy Premium subscription.' 
            : `Reach ${requiredXP?.toLocaleString()} XP to unlock this ${type}. You need ${(requiredXP! - userXP).toLocaleString()} more XP.`}
        </p>
        <button 
          onClick={() => navigate('/premium')}
          className="px-6 py-2 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg shadow-primary/20 active:scale-95 transition-transform"
        >
          {isPremiumOnly ? 'Go Premium' : 'Unlock Now'}
        </button>
      </div>
    </div>
  );
};

export default PremiumLock;
