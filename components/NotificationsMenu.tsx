
import React from 'react';

interface Notification {
  id: number;
  title: string;
  desc: string;
  time: string;
  icon: string;
  color: string;
}

interface NotificationsMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const NotificationsMenu: React.FC<NotificationsMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const notifications: Notification[] = [
    {
      id: 1,
      title: "XP Milestone Reached!",
      desc: "You've earned 500 bonus XP for your 5-day streak.",
      time: "2m ago",
      icon: "stars",
      color: "text-primary"
    },
    {
      id: 2,
      title: "New Internship Match",
      desc: "Frontend Intern at Stardy Tech matches your skills.",
      time: "1h ago",
      icon: "work",
      color: "text-stardy-blue"
    },
    {
      id: 3,
      title: "Course Recommendation",
      desc: "Advanced TypeScript is now available for your level.",
      time: "5h ago",
      icon: "auto_stories",
      color: "text-purple-500"
    }
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center px-4 pt-20 bg-black/40 backdrop-blur-sm animate-in fade-in duration-300">
      <div 
        className="w-full max-w-[440px] bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl overflow-hidden animate-in slide-in-from-top-10 duration-500"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 border-b border-slate-100 dark:border-white/5 flex items-center justify-between">
          <h3 className="text-lg font-bold">Notifications</h3>
          <button onClick={onClose} className="size-8 flex items-center justify-center rounded-full bg-slate-100 dark:bg-white/5">
            <span className="material-symbols-outlined text-sm">close</span>
          </button>
        </div>
        
        <div className="max-h-[400px] overflow-y-auto no-scrollbar">
          {notifications.map((n) => (
            <div key={n.id} className="p-4 flex gap-4 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors border-b border-slate-50 dark:border-white/5 last:border-0">
              <div className={`size-12 rounded-2xl bg-slate-100 dark:bg-zinc-800 flex items-center justify-center shrink-0`}>
                <span className={`material-symbols-outlined fill ${n.color}`}>{n.icon}</span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-sm font-bold leading-tight">{n.title}</h4>
                  <span className="text-[10px] font-medium text-slate-400 tabular-nums">{n.time}</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{n.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="p-4 bg-slate-50 dark:bg-zinc-800/50 flex justify-center">
          <button className="text-xs font-bold text-primary uppercase tracking-widest hover:underline">Mark all as read</button>
        </div>
      </div>
      <div className="absolute inset-0 -z-10" onClick={onClose}></div>
    </div>
  );
};

export default NotificationsMenu;
