
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import { motion } from 'motion/react';

const Landing: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: 'AI Learning Buddy',
      desc: 'Meet StarBuddy, your personal AI mentor available 24/7 to help you master any skill.',
      icon: 'auto_awesome',
      color: 'text-stardy-blue',
      bg: 'bg-stardy-blue/10'
    },
    {
      title: 'Skill Assessments',
      desc: 'Take interactive tests to identify your level and get personalized course recommendations.',
      icon: 'analytics',
      color: 'text-primary',
      bg: 'bg-primary/10'
    },
    {
      title: 'Career Roadmaps',
      desc: 'Follow clear, step-by-step paths to your dream job, from beginner to expert.',
      icon: 'map',
      color: 'text-stardy-gray',
      bg: 'bg-stardy-gray/10'
    },
    {
      title: 'Internships',
      desc: 'Apply for real-world projects and internships directly through the platform.',
      icon: 'work',
      color: 'text-primary',
      bg: 'bg-primary/10'
    }
  ];

  return (
    <div className="min-h-screen bg-background-light flex flex-col overflow-x-hidden">
      {/* Navbar */}
      <nav className="px-6 py-6 flex items-center justify-between sticky top-0 z-50 bg-black border-b border-white/10">
        <div className="flex items-center gap-2">
          <Logo className="size-8" />
          <span className="font-black tracking-tighter text-xl text-slate-500">STARDY.AI</span>
        </div>
        <button 
          onClick={() => navigate('/login')}
          className="text-sm font-bold text-slate-500 px-5 py-2 rounded-full border border-white/10 hover:bg-white/10 hover:text-white active:text-white transition-colors"
        >
          Login
        </button>
      </nav>

      {/* Hero Section */}
      <header className="px-6 pt-12 pb-20 flex flex-col items-center text-center relative">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -z-10"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full border border-slate-200">
            <span className="size-2 bg-primary rounded-full animate-pulse"></span>
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">The Future of Learning is Here</span>
          </div>
          
          <h1 className="text-5xl font-black tracking-tight leading-[1.1] text-slate-900">
            Master Your Future <br />
            <span className="text-primary">With AI.</span>
          </h1>
          
          <p className="text-slate-500 text-lg max-w-sm mx-auto leading-relaxed">
            Personalized roadmaps, skill assessments, and real-world opportunities—all in one place.
          </p>

          <div className="flex flex-col gap-4 pt-4">
            <button 
              onClick={() => navigate('/signup')}
              className="h-16 bg-primary text-white font-black text-lg rounded-full shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              Get Started for Free
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">No credit card required</p>
          </div>
        </motion.div>

        {/* Floating Preview Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-16 w-full max-w-xs mx-auto bg-white dark:bg-zinc-900 rounded-[2.5rem] p-6 shadow-2xl border border-slate-100 dark:border-white/5 relative"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary">auto_awesome</span>
            </div>
            <div className="text-left">
              <h4 className="font-bold text-sm">StarBuddy AI</h4>
              <p className="text-[10px] text-slate-400 font-medium">Typing...</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="bg-slate-50 dark:bg-white/5 p-3 rounded-2xl rounded-tl-none text-[11px] text-left leading-relaxed">
              "Hello! I've analyzed your skills. Ready to start your Python roadmap?"
            </div>
            <div className="flex justify-end">
              <div className="bg-primary text-white p-3 rounded-2xl rounded-tr-none text-[11px] text-left">
                "Yes, let's do it!"
              </div>
            </div>
          </div>
        </motion.div>
      </header>

      {/* Features Grid */}
      <section className="px-6 py-20 bg-slate-50 rounded-t-[3rem]">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black tracking-tight mb-4 text-slate-900">Everything you need <br /> to <span className="text-primary">Level Up.</span></h2>
          <div className="h-1 w-12 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2rem] shadow-sm border border-slate-100 flex flex-col gap-4"
            >
              <div className={`size-14 rounded-2xl ${f.bg} flex items-center justify-center ${f.color}`}>
                <span className="material-symbols-outlined text-3xl">{f.icon}</span>
              </div>
              <h3 className="text-xl font-bold tracking-tight text-slate-900">{f.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Social Proof / Stats */}
      <section className="px-6 py-20 text-center bg-white">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-4xl font-black text-primary">50K+</h3>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-2">Active Learners</p>
          </div>
          <div>
            <h3 className="text-4xl font-black text-slate-900">100+</h3>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-2">Career Paths</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-20">
        <div className="bg-slate-100 rounded-[3rem] p-10 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px]"></div>
          <h2 className="text-3xl font-black text-slate-900 mb-6 relative z-10">Ready to start your journey?</h2>
          <button 
            onClick={() => navigate('/signup')}
            className="w-full h-16 bg-white text-slate-900 font-black text-lg rounded-full shadow-xl active:scale-95 transition-transform relative z-10"
          >
            Join STARDY.AI Now
          </button>
          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-6 relative z-10">Join 50,000+ others today</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-slate-100 dark:border-white/5 text-center">
        <div className="flex items-center justify-center gap-2 mb-6 opacity-50">
          <Logo className="size-6 grayscale" />
          <span className="font-black tracking-tighter text-sm">STARDY.AI</span>
        </div>
        <p className="text-xs text-slate-400">© 2026 Stardy AI. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Landing;
