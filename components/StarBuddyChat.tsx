import React, { useState } from 'react';
import Logo from './Logo';

const StarBuddyChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-24 right-6 z-[100]">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-white/10 overflow-hidden flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-stardy-navy p-4 flex items-center gap-3">
            <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
              <Logo className="size-6" />
            </div>
            <div>
              <h3 className="text-white font-bold text-sm">Star Buddy</h3>
              <div className="flex items-center gap-1.5">
                <div className="size-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-white/60 text-[10px] font-bold uppercase tracking-wider">Online</span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="ml-auto text-white/40 hover:text-white transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          {/* Messages Area */}
          <div className="h-96 p-4 overflow-y-auto bg-slate-50 dark:bg-black/20 flex flex-col gap-4 no-scrollbar">
            <div className="flex gap-3">
              <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                <Logo className="size-5" />
              </div>
              <div className="bg-white dark:bg-zinc-800 p-3 rounded-2xl rounded-tl-none shadow-sm border border-slate-100 dark:border-white/5 max-w-[85%]">
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  Hey, this is Star Buddy! What can I help you with today?
                </p>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white dark:bg-zinc-900 border-t border-slate-100 dark:border-white/5">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Ask me anything..."
                className="w-full bg-slate-100 dark:bg-white/5 border-none rounded-2xl py-3 pl-4 pr-12 text-sm focus:ring-2 focus:ring-primary/50 transition-all"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 size-8 bg-primary text-white rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 active:scale-90 transition-all">
                <span className="material-symbols-outlined text-sm font-bold">send</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`size-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 active:scale-90 ${
          isOpen 
            ? 'bg-stardy-navy text-white rotate-90' 
            : 'bg-primary text-white hover:scale-110 shadow-primary/40'
        }`}
      >
        {isOpen ? (
          <span className="material-symbols-outlined text-2xl">close</span>
        ) : (
          <div className="relative">
            <Logo className="size-8" />
            <div className="absolute -top-1 -right-1 size-3 bg-emerald-500 border-2 border-primary rounded-full"></div>
          </div>
        )}
      </button>
    </div>
  );
};

export default StarBuddyChat;
