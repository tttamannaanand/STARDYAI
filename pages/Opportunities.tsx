
import React, { useState } from 'react';
import BottomNav from '../components/BottomNav';
import Logo from '../components/Logo';
import NotificationsMenu from '../components/NotificationsMenu';
import PremiumLock from '../components/PremiumLock';

const Opportunities: React.FC = () => {
  const [view, setView] = useState<'Internships' | 'Projects'>('Internships');
  const [isNotifOpen, setIsNotifOpen] = useState(false);

  const internships = [
    {
      id: 1,
      type: 'Paid Internship',
      title: 'Junior Frontend Intern',
      company: 'Stardy Tech',
      location: 'Remote',
      logo: 'https://picsum.photos/seed/tech1/100/100',
      teamCount: 12,
      tag: 'Tech'
    },
    {
      id: 2,
      type: 'Premium Internship',
      title: 'Senior AI Research Intern',
      company: 'FutureMind AI',
      location: 'San Francisco',
      logo: 'https://picsum.photos/seed/ai/100/100',
      teamCount: 5,
      tag: 'AI',
      isPremiumOnly: true
    }
  ];

  const projects = [
    {
      id: 3,
      type: 'Project • 2 Weeks',
      title: 'E-commerce API Integration',
      company: 'SwiftPay Systems',
      location: 'Contract',
      logo: 'https://picsum.photos/seed/code/100/100',
      skills: ['Node.js', 'Stripe'],
      tag: 'Tech'
    },
    {
      id: 6,
      type: 'Project • 4 Weeks',
      title: 'Blockchain Security Audit',
      company: 'CryptoSafe',
      location: 'Remote',
      logo: 'https://picsum.photos/seed/crypto/100/100',
      skills: ['Solidity', 'Security'],
      tag: 'Web3',
      requiredXP: 5000
    },
    {
      id: 4,
      type: 'Project • 1 Week',
      title: 'Brand Identity Design',
      company: 'Artisan Co',
      location: 'Remote',
      logo: 'https://picsum.photos/seed/design/100/100',
      skills: ['Figma', 'Branding'],
      tag: 'Creative'
    },
    {
      id: 5,
      type: 'Project • 3 Weeks',
      title: 'Leadership Workshop',
      company: 'PeopleFirst',
      location: 'Hybrid',
      logo: 'https://picsum.photos/seed/people/100/100',
      skills: ['Management', 'Communication'],
      tag: 'Soft Skills'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col pb-32 bg-background-light dark:bg-background-dark">
      <NotificationsMenu isOpen={isNotifOpen} onClose={() => setIsNotifOpen(false)} />

      <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-6 pt-12 pb-4 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <span className="text-slate-900 dark:text-white font-black tracking-tighter text-sm">STARDY.AI</span>
          <Logo className="size-8" />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-bold tracking-tight">Opportunities</h1>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsNotifOpen(true)}
              className="size-10 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
            >
              <span className="material-symbols-outlined text-slate-600 dark:text-slate-400">notifications</span>
            </button>
          </div>
        </div>
      </header>

      <main className="px-6">
        <div className="mt-4 mb-8">
          <div className="flex h-12 w-full items-center justify-center rounded-full bg-slate-100 dark:bg-white/5 p-1 border border-slate-200 dark:border-white/10">
            {['Internships', 'Projects'].map((v) => (
              <button
                key={v}
                onClick={() => setView(v as any)}
                className={`flex-1 h-full rounded-full text-xs font-bold transition-all ${
                  view === v ? 'bg-white dark:bg-zinc-800 text-primary shadow-sm' : 'text-slate-400'
                }`}
              >
                {v}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <div className="relative flex items-center w-full">
            <span className="material-symbols-outlined absolute left-4 text-slate-400">search</span>
            <input 
              className="w-full h-12 pl-12 pr-4 bg-slate-100 dark:bg-white/5 border-none rounded-full focus:ring-2 focus:ring-primary text-sm transition-all outline-none" 
              placeholder={`Search ${view.toLowerCase()}, skills or companies`} 
              type="text" 
            />
          </div>
        </div>

        <div className="flex items-center justify-between mb-6">
          <h3 className="font-bold text-lg tracking-tight">Recommended for you</h3>
          <button className="text-primary text-xs font-bold hover:underline">See all</button>
        </div>

        <div className="space-y-4">
          {(view === 'Internships' ? internships : projects).map((item) => (
            <PremiumLock 
              key={item.id} 
              type={view === 'Internships' ? 'internship' : 'project'}
              requiredXP={(item as any).requiredXP}
              isPremiumOnly={(item as any).isPremiumOnly}
            >
              <div className="bg-white dark:bg-zinc-900 p-5 rounded-2xl shadow-sm border border-slate-100 dark:border-white/5 flex flex-col gap-4 active:scale-[0.98] transition-all">
                <div className="flex justify-between items-start">
                  <div className="flex gap-4">
                    <div className="size-14 rounded-2xl bg-slate-50 dark:bg-zinc-800 flex items-center justify-center p-2">
                      <img src={item.logo} alt="Logo" className="w-full h-full object-contain rounded-xl" />
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <p className="text-[10px] font-bold text-primary uppercase tracking-widest">{item.type}</p>
                        {(item as any).tag && (
                          <span className="px-2 py-0.5 bg-stardy-blue/10 text-stardy-blue text-[8px] font-black uppercase rounded-full">
                            {(item as any).tag}
                          </span>
                        )}
                      </div>
                      <h4 className="font-bold text-base leading-tight mt-0.5">{item.title}</h4>
                      <p className="text-slate-400 text-xs mt-1 font-medium">{item.company} • {item.location}</p>
                    </div>
                  </div>
                  <button className="text-slate-300 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">bookmark</span>
                  </button>
                </div>

                <div className="flex items-center justify-between mt-2">
                  {item.teamCount ? (
                    <div className="flex -space-x-2">
                      {[1, 2].map((n) => (
                        <div key={n} className="size-7 rounded-full border-2 border-white dark:border-zinc-900 bg-slate-200 overflow-hidden">
                          <img src={`https://picsum.photos/seed/${n + 20}/30/30`} alt="Avatar" />
                        </div>
                      ))}
                      <div className="size-7 flex items-center justify-center rounded-full border-2 border-white dark:border-zinc-900 bg-slate-100 dark:bg-zinc-800 text-[8px] font-bold">
                        +{item.teamCount}
                      </div>
                    </div>
                  ) : item.posted ? (
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Posted {item.posted}</span>
                  ) : (
                    <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar max-w-[150px]">
                      {item.skills?.map((s) => (
                        <span key={s} className="px-3 py-1 bg-slate-100 dark:bg-zinc-800 rounded-full text-[9px] font-bold uppercase tracking-wider text-slate-500 shrink-0">
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                  <button className="bg-primary text-white font-bold py-2.5 px-6 rounded-full text-xs shadow-md shadow-primary/20 active:scale-90 transition-transform">
                    Apply Now
                  </button>
                </div>
              </div>
            </PremiumLock>
          ))}
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Opportunities;
