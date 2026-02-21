
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const BottomNav: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: 'Home', icon: 'home', path: '/dashboard' },
    { label: 'Learn', icon: 'menu_book', path: '/learn' },
    { label: 'Opps', icon: 'work', path: '/opportunities', isSpecial: false },
    { label: 'Profile', icon: 'person', path: '/profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-[480px] mx-auto bg-white/90 dark:bg-zinc-900/90 backdrop-blur-lg border-t border-slate-200 dark:border-zinc-800 px-4 pt-3 pb-8 flex items-center justify-between z-50">
      {navItems.map((item) => (
        <button
          key={item.path}
          onClick={() => navigate(item.path)}
          className={`flex-1 flex flex-col items-center gap-1 transition-colors ${
            location.pathname === item.path ? 'text-primary' : 'text-slate-400'
          }`}
        >
          <span className={`material-symbols-outlined ${location.pathname === item.path ? 'fill' : ''}`}>
            {item.icon}
          </span>
          <span className="text-[10px] font-bold uppercase tracking-wider">{item.label}</span>
        </button>
      ))}
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-24 h-1 bg-slate-200 dark:bg-zinc-800 rounded-full"></div>
    </nav>
  );
};

export default BottomNav;
