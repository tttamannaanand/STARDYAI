
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Logo from '../components/Logo';

interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
}

const CourseAssessment: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isFinished, setIsFinished] = useState(false);

  const questions: Question[] = [
    { id: 1, text: "How familiar are you with this subject?", options: ["Complete Beginner", "Know some basics", "Quite experienced", "Expert level"], correctAnswer: 1 },
    { id: 2, text: "What is your primary goal for this course?", options: ["Career change", "Skill improvement", "Personal interest", "Academic requirement"], correctAnswer: 0 },
    { id: 3, text: "How much time can you dedicate weekly?", options: ["1-2 hours", "3-5 hours", "5-10 hours", "10+ hours"], correctAnswer: 2 },
    { id: 4, text: "What is the correct way to create a function in Python?", options: ["function myFunc():", "def myFunc():", "create myFunc():", "func myFunc():"], correctAnswer: 1 },
    { id: 5, text: "Which data type is immutable in Python?", options: ["List", "Dictionary", "Set", "Tuple"], correctAnswer: 3 },
    { id: 6, text: "How do you start a comment in Python?", options: ["//", "/*", "#", "--"], correctAnswer: 2 },
    { id: 7, text: "What is the output of print(2 ** 3)?", options: ["6", "8", "9", "5"], correctAnswer: 1 },
    { id: 8, text: "Which keyword is used for loops in Python?", options: ["for", "loop", "repeat", "each"], correctAnswer: 0 },
    { id: 9, text: "What does the len() function do?", options: ["Calculates length", "Clears a list", "Adds an item", "Sorts a list"], correctAnswer: 0 },
    { id: 10, text: "How do you import a module in Python?", options: ["using math", "include math", "import math", "require math"], correctAnswer: 2 },
  ];

  const handleNext = () => {
    if (selectedOption !== null) {
      const newAnswers = [...answers, selectedOption];
      setAnswers(newAnswers);
      setSelectedOption(null);
      
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setIsFinished(true);
      }
    }
  };

  const calculateLevel = () => {
    // Technical questions start from index 3 (id 4)
    const technicalAnswers = answers.slice(3);
    const correctCount = technicalAnswers.filter((ans, idx) => ans === questions[idx + 3].correctAnswer).length;
    
    if (correctCount <= 2) return 'Beginner';
    if (correctCount <= 5) return 'Intermediate';
    return 'Advanced';
  };

  if (isFinished) {
    const level = calculateLevel();
    return (
      <div className="min-h-screen bg-background-light dark:bg-background-dark flex flex-col items-center justify-center p-8 text-center animate-in zoom-in duration-500">
        <div className="size-24 rounded-3xl bg-primary/10 flex items-center justify-center mb-8 border border-primary/20">
          <span className="material-symbols-outlined text-primary text-5xl">analytics</span>
        </div>
        <h1 className="text-3xl font-black tracking-tight mb-2">Assessment <span className="text-primary">Complete</span></h1>
        <p className="text-slate-500 dark:text-slate-400 mb-10 max-w-xs mx-auto">
          We've analyzed your profile. You should start at the <span className="text-primary font-bold">{level}</span> level for this course.
        </p>
        
        <div className="w-full bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 p-6 rounded-3xl mb-10 text-left">
          <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">Your Learning Path</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="size-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                <span className="material-symbols-outlined text-sm">check</span>
              </div>
              <span className="text-sm font-bold">Custom Curriculum Generated</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="size-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                <span className="material-symbols-outlined text-sm">check</span>
              </div>
              <span className="text-sm font-bold">Difficulty Adjusted to {level}</span>
            </div>
          </div>
        </div>

        <button
          onClick={() => navigate(`/course/${id}`)}
          className="w-full h-16 bg-primary text-white font-bold text-lg rounded-full shadow-xl shadow-primary/20 active:scale-95 transition-transform"
        >
          Start Learning
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark flex flex-col">
      <header className="bg-black px-8 py-6 flex items-center justify-between border-b border-white/10 mb-8">
        <button onClick={() => navigate(-1)} className="text-slate-500 hover:text-white active:text-white">
          <span className="material-symbols-outlined">close</span>
        </button>
        <Logo className="size-8" />
      </header>

      <div className="flex-1 flex flex-col p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="flex justify-between items-center mb-6">
          <span className="text-[10px] font-black uppercase tracking-widest text-primary">Placement Check</span>
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
          onClick={handleNext}
          className="mt-auto w-full h-16 bg-stardy-navy text-white font-bold text-lg rounded-full shadow-xl active:scale-95 transition-transform disabled:opacity-50 disabled:scale-100"
        >
          {currentQuestion === questions.length - 1 ? 'See Results' : 'Next'}
        </button>
      </div>
    </div>
  );
};

export default CourseAssessment;
