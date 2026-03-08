
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';

interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
}

const Onboarding: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<'pathway' | 'test' | 'results'>('pathway');
  const [pathway, setPathway] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const pathways = [
    { id: 'tech', name: 'Software Engineering', icon: 'code' },
    { id: 'design', name: 'UI/UX Design', icon: 'palette' },
    { id: 'business', name: 'Product Management', icon: 'business_center' },
    { id: 'data', name: 'Data Science', icon: 'analytics' },
  ];

  const questions: Question[] = [
    { id: 1, text: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyperlink and Text Management", "Home Tool Markup Language"], correctAnswer: 0 },
    { id: 2, text: "Which language is primarily used for styling web pages?", options: ["Python", "C++", "CSS", "Java"], correctAnswer: 2 },
    { id: 3, text: "What is the purpose of a 'git' system?", options: ["To compile code", "To manage version control", "To host websites", "To design graphics"], correctAnswer: 1 },
    { id: 4, text: "In JavaScript, how do you declare a constant variable?", options: ["var", "let", "const", "static"], correctAnswer: 2 },
    { id: 5, text: "What does API stand for?", options: ["Application Programming Interface", "Automated Program Integration", "Advanced Protocol Instruction", "Application Process Indicator"], correctAnswer: 0 },
    { id: 6, text: "Which of these is a backend framework?", options: ["React", "Vue", "Express", "Tailwind"], correctAnswer: 2 },
    { id: 7, text: "What is the main function of a database?", options: ["To render UI", "To store and manage data", "To style text", "To speed up internet"], correctAnswer: 1 },
    { id: 8, text: "What is 'Responsive Design'?", options: ["Fast loading speed", "Design that adapts to screen size", "High resolution images", "Interactive animations"], correctAnswer: 1 },
    { id: 9, text: "Which HTTP method is used to send data to a server to create a resource?", options: ["GET", "POST", "DELETE", "HEAD"], correctAnswer: 1 },
    { id: 10, text: "What is the 'Cloud' in computing?", options: ["A physical hard drive", "Servers accessed over the internet", "A weather simulation", "A type of local network"], correctAnswer: 1 },
  ];

  const handlePathwaySelect = (id: string) => {
    setPathway(id);
    setStep('test');
  };

  const handleNextQuestion = () => {
    if (selectedOption !== null) {
      const newAnswers = [...answers, selectedOption];
      setAnswers(newAnswers);
      setSelectedOption(null);
      
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setStep('results');
      }
    }
  };

  const calculateLevel = () => {
    const correctCount = answers.filter((ans, idx) => ans === questions[idx].correctAnswer).length;
    if (correctCount <= 3) return 'Beginner';
    if (correctCount <= 7) return 'Intermediate';
    return 'Advanced';
  };

  const getSuggestedCourses = (level: string) => {
    if (level === 'Beginner') return ['Web Development 101', 'Intro to Programming', 'Digital Literacy'];
    if (level === 'Intermediate') return ['Advanced React Patterns', 'System Design Basics', 'Database Optimization'];
    return ['Cloud Architecture', 'Machine Learning at Scale', 'Cybersecurity Expert'];
  };

  const level = calculateLevel();
  const suggestions = getSuggestedCourses(level);

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark flex flex-col p-8">
      <div className="flex items-center justify-between mb-12">
        <span className="text-slate-900 dark:text-white font-black tracking-tighter text-sm">STARDY.AI</span>
        <Logo className="size-8" />
      </div>

      {step === 'pathway' && (
        <div className="flex-1 flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h1 className="text-3xl font-black tracking-tight mb-2">Choose your <span className="text-primary">Pathway</span></h1>
          <p className="text-slate-500 dark:text-slate-400 mb-10">Select the career path you want to excel in.</p>
          
          <div className="grid grid-cols-1 gap-4">
            {pathways.map((p) => (
              <button
                key={p.id}
                onClick={() => handlePathwaySelect(p.id)}
                className="flex items-center gap-4 p-6 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 rounded-3xl shadow-sm hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all group active:scale-95 text-left"
              >
                <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-2xl">{p.icon}</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg">{p.name}</h3>
                  <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Start your journey</p>
                </div>
                <span className="material-symbols-outlined ml-auto text-slate-300 group-hover:text-primary transition-colors">arrow_forward</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 'test' && (
        <div className="flex-1 flex flex-col animate-in fade-in duration-500">
          <div className="flex justify-between items-center mb-6">
            <span className="text-[10px] font-black uppercase tracking-widest text-primary">Skill Assessment</span>
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{currentQuestion + 1} / {questions.length}</span>
          </div>
          
          <div className="h-1.5 w-full bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden mb-12">
            <div 
              className="h-full bg-primary transition-all duration-500" 
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>

          <h2 className="text-2xl font-black tracking-tight mb-10 leading-tight">
            {questions[currentQuestion].text}
          </h2>

          <div className="flex flex-col gap-3">
            {questions[currentQuestion].options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedOption(idx)}
                className={`w-full p-5 rounded-2xl border-2 text-left text-sm font-bold transition-all ${
                  selectedOption === idx
                    ? 'bg-primary/10 border-primary text-primary shadow-lg shadow-primary/10'
                    : 'bg-white dark:bg-zinc-900 border-slate-100 dark:border-white/5 text-slate-600 dark:text-slate-400 hover:border-slate-300'
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          <button
            disabled={selectedOption === null}
            onClick={handleNextQuestion}
            className="mt-auto w-full h-16 bg-stardy-navy text-white font-bold text-lg rounded-full shadow-xl active:scale-95 transition-transform disabled:opacity-50 disabled:scale-100"
          >
            {currentQuestion === questions.length - 1 ? 'Finish Test' : 'Next Question'}
          </button>
        </div>
      )}

      {step === 'results' && (
        <div className="flex-1 flex flex-col items-center justify-center text-center animate-in zoom-in duration-500">
          <div className="size-32 rounded-full bg-emerald-500/10 flex items-center justify-center mb-8 border border-emerald-500/20 relative">
            <span className="material-symbols-outlined text-emerald-500 text-6xl">verified</span>
            <div className="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-black px-3 py-1 rounded-full shadow-lg">
              {level}
            </div>
          </div>

          <h1 className="text-3xl font-black tracking-tight mb-2">You're a <span className="text-emerald-500">{level}</span>!</h1>
          <p className="text-slate-500 dark:text-slate-400 mb-12 max-w-xs mx-auto">
            Based on your assessment, we've tailored a custom learning path just for you.
          </p>

          <div className="w-full space-y-4 mb-12">
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 text-left px-2">Recommended for you</h3>
            {suggestions.map((course, idx) => (
              <div key={idx} className="flex items-center gap-4 p-4 bg-widget border border-slate-100 rounded-2xl text-left">
                <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-xl">auto_stories</span>
                </div>
                <span className="font-bold text-sm">{course}</span>
                <span className="material-symbols-outlined ml-auto text-slate-300 text-sm">chevron_right</span>
              </div>
            ))}
          </div>

          <button
            onClick={() => navigate('/dashboard')}
            className="w-full h-16 bg-primary text-white font-bold text-lg rounded-full shadow-xl shadow-primary/20 active:scale-95 transition-transform"
          >
            Go to Dashboard
          </button>
        </div>
      )}
    </div>
  );
};

export default Onboarding;
