
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Logo from '../components/Logo';

interface RoadmapStep {
  title: string;
  description: string;
  status: 'completed' | 'current' | 'locked';
  xp: number;
}

interface Roadmap {
  career: string;
  description: string;
  steps: RoadmapStep[];
}

const CareerRoadmap: React.FC = () => {
  const navigate = useNavigate();
  const { careerName } = useParams<{ careerName: string }>();

  const roadmaps: Record<string, Roadmap> = {
    'Full-Stack Developer': {
      career: 'Full-Stack Developer',
      description: 'Master both frontend and backend technologies to build complete web applications.',
      steps: [
        { title: 'HTML & CSS Mastery', description: 'Learn the building blocks of the web.', status: 'completed', xp: 500 },
        { title: 'JavaScript Fundamentals', description: 'Core logic and DOM manipulation.', status: 'completed', xp: 800 },
        { title: 'React Framework', description: 'Build component-based user interfaces.', status: 'current', xp: 1200 },
        { title: 'Node.js & Express', description: 'Server-side development and APIs.', status: 'locked', xp: 1500 },
        { title: 'Database Design', description: 'SQL and NoSQL database management.', status: 'locked', xp: 2000 },
      ]
    },
    'Product Manager': {
      career: 'Product Manager',
      description: 'Bridge the gap between business, design, and technology.',
      steps: [
        { title: 'Market Research', description: 'Understand user needs and market trends.', status: 'completed', xp: 600 },
        { title: 'Product Strategy', description: 'Define the vision and roadmap.', status: 'current', xp: 1000 },
        { title: 'Agile Methodologies', description: 'Scrum, Kanban, and iterative development.', status: 'locked', xp: 1200 },
        { title: 'Data Analytics', description: 'Make data-driven product decisions.', status: 'locked', xp: 1500 },
      ]
    },
    'Data Scientist': {
      career: 'Data Scientist',
      description: 'Extract insights and knowledge from structured and unstructured data.',
      steps: [
        { title: 'Python for Data Science', description: 'Pandas, NumPy, and Matplotlib.', status: 'completed', xp: 700 },
        { title: 'Statistics & Probability', description: 'The mathematical foundation of data science.', status: 'current', xp: 1100 },
        { title: 'Machine Learning Basics', description: 'Supervised and unsupervised learning.', status: 'locked', xp: 1800 },
        { title: 'Deep Learning', description: 'Neural networks and AI models.', status: 'locked', xp: 2500 },
      ]
    }
  };

  const roadmap = roadmaps[careerName || ''] || {
    career: careerName || 'Career Path',
    description: 'Custom roadmap for your selected career path.',
    steps: [
      { title: 'Foundations', description: 'Start with the basics of this field.', status: 'current', xp: 500 },
      { title: 'Advanced Concepts', description: 'Deep dive into specialized topics.', status: 'locked', xp: 1500 },
    ]
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark flex flex-col pb-20">
      {/* Header */}
      <header className="bg-black px-6 py-8 flex flex-col gap-6 border-b border-white/10 shadow-lg rounded-b-[2.5rem]">
        <div className="flex items-center justify-between">
          <button onClick={() => navigate(-1)} className="text-slate-500 hover:text-white active:text-white transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <Logo className="size-8" />
        </div>
        <div className="space-y-2">
          <h1 className="text-slate-500 text-3xl font-black tracking-tight">{roadmap.career}</h1>
          <p className="text-slate-400 text-sm font-medium leading-relaxed">{roadmap.description}</p>
        </div>
      </header>

      {/* Roadmap Content */}
      <div className="px-6 py-10 relative">
        {/* Vertical Line */}
        <div className="absolute left-10 top-10 bottom-10 w-0.5 bg-slate-200"></div>

        <div className="space-y-12">
          {roadmap.steps.map((step, index) => (
            <div key={index} className="flex gap-6 relative group">
              {/* Node */}
              <div className={`size-8 rounded-full flex items-center justify-center shrink-0 z-10 transition-all duration-500 ${
                step.status === 'completed' 
                  ? 'bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.4)]' 
                  : step.status === 'current'
                    ? 'bg-primary shadow-[0_0_15px_rgba(185,28,28,0.4)] animate-pulse'
                    : 'bg-slate-200'
              }`}>
                {step.status === 'completed' ? (
                  <span className="material-symbols-outlined text-white text-sm font-bold">check</span>
                ) : step.status === 'current' ? (
                  <div className="size-2 bg-white rounded-full"></div>
                ) : (
                  <span className="material-symbols-outlined text-slate-400 text-sm">lock</span>
                )}
              </div>

              {/* Content Card */}
              <div className={`flex-1 p-5 rounded-2xl border transition-all duration-300 ${
                step.status === 'current'
                  ? 'bg-white border-primary/30 shadow-xl scale-[1.02]'
                  : 'bg-widget border-slate-100 opacity-80'
              }`}>
                <div className="flex justify-between items-start mb-2">
                  <h3 className={`font-bold ${step.status === 'locked' ? 'text-slate-400' : 'text-slate-900 dark:text-white'}`}>
                    {step.title}
                  </h3>
                  <div className="flex items-center gap-1 bg-primary/10 px-2 py-1 rounded-lg">
                    <span className="material-symbols-outlined text-primary text-[10px] fill">stars</span>
                    <span className="text-primary text-[10px] font-black">{step.xp} XP</span>
                  </div>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {step.description}
                </p>
                
                {step.status === 'current' && (
                  <button className="mt-4 w-full bg-primary text-white text-[10px] font-black uppercase tracking-widest py-2.5 rounded-xl shadow-lg shadow-primary/20 active:scale-95 transition-all">
                    Start Learning
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="px-6 mt-4">
        <div className="bg-widget border border-slate-200 p-6 rounded-3xl flex flex-col items-center text-center gap-4">
          <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center">
            <span className="material-symbols-outlined text-primary text-2xl">auto_awesome</span>
          </div>
          <div>
            <h4 className="text-primary font-bold">Personalized for You</h4>
            <p className="text-slate-500 text-[10px] font-medium mt-1">This roadmap is generated based on your current skills and career goals.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerRoadmap;
