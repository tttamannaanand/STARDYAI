
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import Logo from '../components/Logo';
import NotificationsMenu from '../components/NotificationsMenu';
import PremiumLock from '../components/PremiumLock';

const LearningCenter: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Beginner');
  const [isNotifOpen, setIsNotifOpen] = useState(false);

  const courses = [
    {
      id: 1,
      title: 'Mastering Python',
      tag: 'Tech',
      level: 'Beginner',
      image: 'https://picsum.photos/seed/python/400/200',
      rating: '5.0',
      progress: 65,
      lessons: '24 Lessons',
    },
    {
      id: 2,
      title: 'Conflict Resolution',
      tag: 'Soft Skills',
      level: 'Intermediate',
      image: 'https://picsum.photos/seed/conflict/400/200',
      rating: '4.8',
      lessons: '12 Lessons • 2h 30m',
      isNew: true
    },
    {
      id: 3,
      title: 'UI/UX Fundamentals',
      tag: 'Creative',
      level: 'Beginner',
      image: 'https://picsum.photos/seed/ux/400/200',
      rating: '4.9',
      lessons: '8 Lessons • 1h 45m',
    },
    {
      id: 4,
      title: 'Advanced React Patterns',
      tag: 'Tech',
      level: 'Advanced',
      image: 'https://picsum.photos/seed/react/400/200',
      rating: '5.0',
      lessons: '15 Lessons • 4h 20m',
    },
    {
      id: 5,
      title: 'Emotional Intelligence',
      tag: 'Soft Skills',
      level: 'Advanced',
      image: 'https://picsum.photos/seed/eq/400/200',
      rating: '4.7',
      lessons: '10 Lessons • 3h 15m',
    },
    {
      id: 7,
      title: 'Quantum Computing 101',
      tag: 'Tech',
      level: 'Advanced',
      image: 'https://picsum.photos/seed/quantum/400/200',
      rating: '5.0',
      lessons: '20 Lessons • 8h 00m',
      isPremiumOnly: true
    },
    {
      id: 8,
      title: 'Global Economics',
      tag: 'Soft Skills',
      level: 'Intermediate',
      image: 'https://picsum.photos/seed/econ/400/200',
      rating: '4.9',
      lessons: '15 Lessons • 5h 30m',
      requiredXP: 3000
    },
    {
      id: 6,
      title: 'Digital Illustration',
      tag: 'Creative',
      level: 'Intermediate',
      image: 'https://picsum.photos/seed/art/400/200',
      rating: '4.9',
      lessons: '18 Lessons • 5h 00m',
    },
  ];

  const filteredCourses = courses.filter(course => course.level === activeTab);

  return (
    <div className="min-h-screen flex flex-col pb-32 bg-background-light dark:bg-background-dark">
      <NotificationsMenu isOpen={isNotifOpen} onClose={() => setIsNotifOpen(false)} />
      
      <header className="bg-stardy-navy sticky top-0 z-50 px-6 py-4 flex flex-col gap-4 shadow-lg">
        <div className="flex items-center justify-between">
          <span className="text-white font-black tracking-tighter text-sm">STARDY.AI</span>
          <Logo className="size-8" />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex flex-col">
              <h1 className="text-white text-xl font-bold leading-tight">Learning Center</h1>
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-primary text-xs">bolt</span>
                <p className="text-primary text-[10px] font-bold uppercase tracking-wider">7 Day Streak</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="size-10 rounded-full bg-white/10 flex items-center justify-center text-white backdrop-blur-md">
              <span className="material-symbols-outlined text-xl">search</span>
            </button>
            <button 
              onClick={() => setIsNotifOpen(true)}
              className="size-10 rounded-full bg-white/10 flex items-center justify-center text-white backdrop-blur-md"
            >
              <span className="material-symbols-outlined text-xl">notifications</span>
            </button>
          </div>
        </div>
      </header>

      <div className="px-6 py-6">
        <div className="flex bg-slate-200 dark:bg-white/5 p-1 rounded-full">
          {['Beginner', 'Intermediate', 'Advanced'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2.5 rounded-full text-xs font-bold transition-all ${
                activeTab === tab 
                  ? 'bg-primary text-white shadow-md' 
                  : 'text-slate-500 dark:text-slate-400'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <section className="px-6 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold tracking-tight">{activeTab} Courses</h2>
          <button className="text-primary text-xs font-bold">View All</button>
        </div>

        {filteredCourses.map((course) => (
          <PremiumLock 
            key={course.id} 
            type="course" 
            requiredXP={(course as any).requiredXP} 
            isPremiumOnly={(course as any).isPremiumOnly}
          >
            <div className="bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-white/5 group active:scale-[0.98] transition-all">
              <div 
                className="h-44 w-full bg-slate-800 bg-center bg-cover relative" 
                style={{ backgroundImage: `url(${course.image})` }}
              >
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-stardy-blue text-white text-[10px] font-bold uppercase tracking-widest">
                  {course.tag}
                </div>
                {course.isNew && (
                  <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-primary text-white text-[10px] font-bold uppercase tracking-widest">
                    New
                  </div>
                )}
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-bold flex-1 leading-tight group-hover:text-primary transition-colors">{course.title}</h3>
                  <div className="flex items-center gap-1 text-primary">
                    <span className="material-symbols-outlined text-sm fill">star</span>
                    <span className="text-sm font-bold tabular-nums">{course.rating}</span>
                  </div>
                </div>
                
                {course.progress !== undefined ? (
                  <div className="mt-4 flex items-center justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex justify-between mb-1.5">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Progress</span>
                        <span className="text-[10px] font-bold text-slate-400 tabular-nums">{course.progress}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full transition-all duration-1000" style={{ width: `${course.progress}%` }}></div>
                      </div>
                    </div>
                    <button 
                      onClick={() => navigate('/quiz')}
                      className="bg-primary text-white font-bold px-6 h-10 rounded-full text-xs shadow-md shadow-primary/20 active:scale-90"
                    >
                      Resume
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center justify-between">
                    <p className="text-slate-500 text-xs font-medium">{course.lessons}</p>
                    <button 
                      onClick={() => navigate('/quiz')}
                      className="bg-primary/10 text-primary font-bold px-6 h-10 rounded-full text-xs active:scale-90"
                    >
                      Start
                    </button>
                  </div>
                )}
              </div>
            </div>
          </PremiumLock>
        ))}
      </section>

      <BottomNav />
    </div>
  );
};

export default LearningCenter;
