
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import Logo from '../components/Logo';
import NotificationsMenu from '../components/NotificationsMenu';
import PremiumLock from '../components/PremiumLock';

const Opportunities: React.FC = () => {
  const navigate = useNavigate();
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
      tag: 'Tech',
      description: 'Join our frontend team to build beautiful interfaces with React and Tailwind.',
      requirements: ['HTML/CSS/JS', 'React Basics', 'Team Player'],
      benefits: ['Stipend', 'Mentorship', 'Remote Work']
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
      isPremiumOnly: true,
      description: 'Research cutting-edge LLM architectures and optimization techniques.',
      requirements: ['Python', 'PyTorch', 'Linear Algebra'],
      benefits: ['High Stipend', 'Housing Allowance', 'NVIDIA GPUs Access']
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
      tag: 'Tech',
      description: 'Build a robust payment gateway integration for a global e-commerce platform.',
      requirements: ['Node.js', 'Stripe API', 'Error Handling'],
      benefits: ['Project Fee', 'Certificate', 'Portfolio Piece']
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
      requiredXP: 5000,
      description: 'Audit smart contracts for potential vulnerabilities and security flaws.',
      requirements: ['Solidity', 'Security Mindset', 'Audit Experience'],
      benefits: ['High Reward', 'Security Badge', 'Network Access']
    },
    {
      id: 4,
      type: 'Project • 1 Week',
      title: 'Brand Identity Design',
      company: 'Artisan Co',
      location: 'Remote',
      logo: 'https://picsum.photos/seed/design/100/100',
      skills: ['Figma', 'Branding'],
      tag: 'Creative',
      description: 'Create a modern and minimalist brand identity for a new startup.',
      requirements: ['Figma', 'Typography', 'Color Theory'],
      benefits: ['Design Fee', 'Creative Freedom', 'Portfolio Piece']
    },
    {
      id: 5,
      type: 'Project • 3 Weeks',
      title: 'Leadership Workshop',
      company: 'PeopleFirst',
      location: 'Hybrid',
      logo: 'https://picsum.photos/seed/people/100/100',
      skills: ['Management', 'Communication'],
      tag: 'Soft Skills',
      description: 'Develop and lead a workshop on effective communication for management.',
      requirements: ['Public Speaking', 'EQ', 'Curriculum Design'],
      benefits: ['Honorarium', 'Leadership Experience', 'Networking']
    }
  ];

  const handleItemClick = (item: any) => {
    navigate(`/opportunity/${item.id}`, { state: { item } });
  };

  return (
    <div className="min-h-screen flex flex-col pb-32 bg-background-light dark:bg-background-dark">
      <NotificationsMenu isOpen={isNotifOpen} onClose={() => setIsNotifOpen(false)} />

      <header className="sticky top-0 z-50 bg-black px-6 pt-12 pb-4 flex flex-col gap-4 border-b border-white/10">
        <div className="flex items-center justify-between">
          <span className="text-slate-500 font-black tracking-tighter text-sm">STARDY.AI</span>
          <Logo className="size-8" />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-bold tracking-tight text-slate-500">Opportunities</h1>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsNotifOpen(true)}
              className="size-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 active:text-white text-slate-500 transition-colors"
            >
              <span className="material-symbols-outlined">notifications</span>
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
          <h3 className="font-bold text-lg tracking-tight text-black">Recommended for you</h3>
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
              <div 
                onClick={() => handleItemClick(item)}
                className="bg-zinc-900 p-5 rounded-2xl shadow-sm border border-white/5 flex flex-col gap-4 active:scale-[0.98] transition-all cursor-pointer group"
              >
                <div className="flex justify-between items-start">
                  <div className="flex gap-4">
                    <div className="size-14 rounded-2xl bg-zinc-800 flex items-center justify-center p-2">
                      <img src={item.logo} alt="Logo" className="w-full h-full object-contain rounded-xl grayscale" />
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <p className="text-[10px] font-bold text-primary uppercase tracking-widest">{item.type}</p>
                        {(item as any).tag && (
                          <span className="px-2 py-0.5 bg-white/10 text-white text-[8px] font-black uppercase rounded-full">
                            {(item as any).tag}
                          </span>
                        )}
                      </div>
                      <h4 className="font-bold text-base leading-tight mt-0.5 group-hover:text-primary transition-colors text-white">{item.title}</h4>
                      <p className="text-white/40 text-xs mt-1 font-medium">{item.company} • {item.location}</p>
                    </div>
                  </div>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      // Handle bookmark
                    }}
                    className="text-slate-300 hover:text-primary transition-colors"
                  >
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
                  ) : (
                    <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar max-w-[150px]">
                      {item.skills?.map((s) => (
                        <span key={s} className="px-3 py-1 bg-white/5 rounded-full text-[9px] font-bold uppercase tracking-wider text-white/60 shrink-0">
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleItemClick(item);
                    }}
                    className="bg-gradient-to-r from-primary to-[#7f1d1d] text-white font-black py-2.5 px-6 rounded-full text-xs shadow-lg shadow-primary/20 active:scale-90 transition-transform uppercase tracking-widest"
                  >
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
