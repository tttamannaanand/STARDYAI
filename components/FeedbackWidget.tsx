
import React, { useState } from 'react';

interface FeedbackWidgetProps {
  variant?: 'light' | 'dark' | 'primary';
}

const FeedbackWidget: React.FC<FeedbackWidgetProps> = ({ variant = 'light' }) => {
  const [rating, setRating] = useState<number | null>(null);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const isDark = variant === 'dark';
  const isPrimary = variant === 'primary';

  const handleSubmit = () => {
    if (rating === null) {
      alert('Please select a rating first!');
      return;
    }
    setSubmitted(true);
    // In a real app, you'd send this to your backend
    setTimeout(() => {
      setSubmitted(false);
      setRating(null);
      setComment('');
    }, 3000);
  };

  if (submitted) {
    return (
      <div className={`p-6 ${isPrimary ? 'bg-white/20' : isDark ? 'bg-green-500/20' : 'bg-green-500/10'} border ${isPrimary ? 'border-white/20' : 'border-green-500/20'} rounded-3xl text-center animate-in zoom-in duration-300`}>
        <span className={`material-symbols-outlined ${isPrimary ? 'text-white' : 'text-green-500'} text-4xl mb-2`}>check_circle</span>
        <p className={`text-sm font-bold ${isPrimary || isDark ? 'text-white' : 'text-green-500'}`}>Thanks for your feedback!</p>
      </div>
    );
  }

  return (
    <div className={`p-6 ${isPrimary ? 'bg-gradient-to-br from-primary to-[#7f1d1d]' : isDark ? 'bg-black' : 'bg-slate-50 dark:bg-[#1a1a1a]'} rounded-[2rem] border ${isPrimary ? 'border-white/20 shadow-xl shadow-primary/20' : isDark ? 'border-white/10' : 'border-slate-100 dark:border-white/5'} space-y-4`}>
      <div className="flex flex-col gap-1">
        <h3 className={`text-sm font-bold ${isPrimary || isDark ? 'text-white' : 'text-slate-900 dark:text-white'}`}>Rate your experience</h3>
        <p className={`text-[10px] ${isPrimary ? 'text-white/60' : isDark ? 'text-white/60' : 'text-slate-500'} font-medium`}>How are we doing today?</p>
      </div>

      <div className="flex justify-between px-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => setRating(star)}
            className={`size-10 rounded-full flex items-center justify-center transition-all ${
              rating && rating >= star 
                ? `${isPrimary ? 'bg-white text-primary' : 'bg-primary text-white'} scale-110 shadow-lg ${isPrimary ? '' : 'shadow-primary/20'}` 
                : `${isPrimary ? 'bg-white/10 text-white/40' : isDark ? 'bg-white/10 text-white/40' : 'bg-white dark:bg-white/5 text-slate-400'} hover:bg-slate-100 dark:hover:bg-white/10`
            }`}
          >
            <span className="material-symbols-outlined text-xl fill">star</span>
          </button>
        ))}
      </div>

      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Any suggestions? (Optional)"
        className={`w-full h-20 p-4 ${isPrimary ? 'bg-white/10 text-white placeholder:text-white/40' : isDark ? 'bg-white/10 text-white placeholder:text-white/30' : 'bg-white dark:bg-white/5 text-slate-900 dark:text-white'} border ${isPrimary ? 'border-white/10' : isDark ? 'border-white/10' : 'border-slate-100 dark:border-white/10'} rounded-2xl text-xs outline-none focus:border-primary transition-all resize-none`}
      />

      <button
        onClick={handleSubmit}
        className={`w-full h-12 ${isPrimary ? 'bg-white text-primary' : 'bg-primary text-white'} font-black rounded-full shadow-lg active:scale-95 transition-transform text-xs uppercase tracking-widest`}
      >
        Submit Feedback
      </button>
    </div>
  );
};

export default FeedbackWidget;
