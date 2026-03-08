
import React, { useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import Logo from '../components/Logo';

const OpportunityDetail: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const [isApplied, setIsApplied] = useState(false);
  const [showForm, setShowForm] = useState(false);

  // In a real app, we'd fetch the data based on ID. 
  // For now, we'll use mock data or state passed through location.
  const item = location.state?.item || {
    id: id,
    title: 'Junior Frontend Intern',
    company: 'Stardy Tech',
    location: 'Remote',
    type: 'Paid Internship',
    logo: 'https://picsum.photos/seed/tech1/100/100',
    description: 'We are looking for a passionate Junior Frontend Intern to join our growing team. You will work closely with our senior developers to build and maintain user-facing features using React and Tailwind CSS.',
    requirements: [
      'Basic understanding of HTML, CSS, and JavaScript',
      'Familiarity with React is a plus',
      'Strong problem-solving skills',
      'Eagerness to learn and grow'
    ],
    benefits: [
      'Competitive stipend',
      'Mentorship from senior developers',
      'Flexible working hours',
      'Opportunity for full-time conversion'
    ]
  };

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setIsApplied(true);
    setShowForm(false);
    // In a real app, send data to backend
  };

  if (isApplied) {
    return (
      <div className="min-h-screen bg-background-light dark:bg-background-dark flex flex-col items-center justify-center p-8 text-center animate-in zoom-in duration-500">
        <div className="size-24 rounded-full bg-emerald-500/10 flex items-center justify-center mb-8 border border-emerald-500/20">
          <span className="material-symbols-outlined text-emerald-500 text-5xl">check_circle</span>
        </div>
        <h1 className="text-3xl font-black tracking-tight mb-2">Application <span className="text-emerald-500">Sent!</span></h1>
        <p className="text-slate-500 dark:text-slate-400 mb-10 max-w-xs mx-auto">
          Your application for <span className="font-bold text-slate-900 dark:text-white">{item.title}</span> at <span className="font-bold text-slate-900 dark:text-white">{item.company}</span> has been successfully submitted.
        </p>
        <button
          onClick={() => navigate('/opportunities')}
          className="w-full h-16 bg-primary text-white font-bold text-lg rounded-full shadow-xl shadow-primary/20 active:scale-95 transition-transform"
        >
          Back to Opportunities
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark flex flex-col pb-10">
      {/* Header Image & Back Button */}
      <div className="relative h-64 w-full bg-stardy-navy overflow-hidden">
        <img 
          src={`https://picsum.photos/seed/${id}/800/400`} 
          alt="Cover" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-light dark:from-background-dark to-transparent"></div>
        
        <div className="absolute top-12 left-6 right-6 flex items-center justify-between">
          <button 
            onClick={() => navigate(-1)} 
            className="size-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <Logo className="size-8" />
        </div>

        <div className="absolute -bottom-8 left-6">
          <div className="size-20 rounded-3xl bg-white dark:bg-zinc-900 p-3 shadow-xl border border-slate-100 dark:border-white/5">
            <img src={item.logo} alt="Logo" className="w-full h-full object-contain rounded-xl grayscale" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 pt-12 space-y-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest rounded-full">
              {item.type}
            </span>
            {item.tag && (
              <span className="px-3 py-1 bg-slate-100 text-slate-900 text-[10px] font-black uppercase tracking-widest rounded-full border border-slate-200">
                {item.tag}
              </span>
            )}
          </div>
          <h1 className="text-3xl font-black tracking-tight leading-tight">{item.title}</h1>
          <p className="text-slate-500 dark:text-slate-400 font-bold mt-1">{item.company} • {item.location}</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white dark:bg-zinc-900 p-4 rounded-2xl border border-slate-100 dark:border-white/5">
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Duration</p>
            <p className="font-bold text-sm">3-6 Months</p>
          </div>
          <div className="bg-white dark:bg-zinc-900 p-4 rounded-2xl border border-slate-100 dark:border-white/5">
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Experience</p>
            <p className="font-bold text-sm">Beginner Friendly</p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-bold tracking-tight">About the Role</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            {item.description}
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-bold tracking-tight">Requirements</h3>
          <ul className="space-y-3">
            {(item.requirements || []).map((req: string, idx: number) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                <span className="material-symbols-outlined text-emerald-500 text-sm mt-0.5">check_circle</span>
                {req}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-bold tracking-tight">Benefits</h3>
          <div className="flex flex-wrap gap-2">
            {(item.benefits || []).map((benefit: string, idx: number) => (
              <span key={idx} className="px-4 py-2 bg-slate-100 dark:bg-white/5 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-400">
                {benefit}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="fixed bottom-0 inset-x-0 p-6 bg-black border-t border-white/10 z-50">
        <div className="max-w-[480px] mx-auto flex gap-4">
          <button className="size-14 rounded-2xl bg-white/10 flex items-center justify-center text-slate-500 hover:text-white active:text-white border border-white/10 transition-colors">
            <span className="material-symbols-outlined">bookmark</span>
          </button>
          <button 
            onClick={() => setShowForm(true)}
            className="flex-1 h-14 bg-primary text-white font-black rounded-2xl shadow-lg shadow-primary/20 active:scale-95 transition-transform"
          >
            Apply Now
          </button>
        </div>
      </div>

      {/* Application Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-300">
          <div className="w-full max-w-[480px] bg-white dark:bg-zinc-900 rounded-[2.5rem] p-8 space-y-6 animate-in slide-in-from-bottom-10 duration-500">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-black tracking-tight text-slate-900">Apply for <span className="text-primary">Role</span></h2>
              <button onClick={() => setShowForm(false)} className="size-10 rounded-full bg-slate-100 flex items-center justify-center">
                <span className="material-symbols-outlined text-slate-900">close</span>
              </button>
            </div>

            <form onSubmit={handleApply} className="space-y-5">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-1">Why are you a good fit?</label>
                <textarea 
                  required
                  className="w-full p-4 rounded-2xl border border-slate-200 bg-slate-50 text-sm focus:border-primary focus:ring-0 outline-none transition-all min-h-[120px] text-slate-900 placeholder:text-slate-300"
                  placeholder="Tell us about your skills and motivation..."
                ></textarea>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-1">Portfolio Link (Optional)</label>
                <input 
                  type="url"
                  className="w-full h-14 px-4 rounded-2xl border border-slate-200 bg-slate-50 text-sm focus:border-primary focus:ring-0 outline-none transition-all text-slate-900 placeholder:text-slate-300"
                  placeholder="https://yourportfolio.com"
                />
              </div>

              <div className="p-4 bg-primary/5 border border-primary/20 rounded-2xl flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">info</span>
                <p className="text-[10px] font-bold text-primary leading-tight">
                  Your profile information (Resume, Skills, XP) will be automatically shared with the recruiter.
                </p>
              </div>

              <button 
                type="submit"
                className="w-full h-16 bg-primary text-white font-black text-lg rounded-full shadow-xl shadow-primary/20 active:scale-95 transition-transform"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default OpportunityDetail;
