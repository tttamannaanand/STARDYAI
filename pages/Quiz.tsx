
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';

const Quiz: React.FC = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    {
      id: 1,
      question: "What is the primary function of a 'Promise' in JavaScript?",
      options: [
        { id: 0, text: "To handle asynchronous operations effectively", letter: "A", isCorrect: true },
        { id: 1, text: "To declare a constant variable", letter: "B", isCorrect: false },
        { id: 2, text: "To create a loop that never ends", letter: "C", isCorrect: false },
        { id: 3, text: "To style elements directly", letter: "D", isCorrect: false },
      ],
      description: "A Promise is an object representing the eventual completion or failure of an asynchronous operation. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason."
    },
    {
      id: 2,
      question: "Which hook is used to manage side effects in React?",
      options: [
        { id: 0, text: "useState", letter: "A", isCorrect: false },
        { id: 1, text: "useEffect", letter: "B", isCorrect: true },
        { id: 2, text: "useContext", letter: "C", isCorrect: false },
        { id: 3, text: "useReducer", letter: "D", isCorrect: false },
      ],
      description: "The useEffect hook lets you perform side effects in functional components. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes."
    },
    {
      id: 3,
      question: "What does CSS stand for?",
      options: [
        { id: 0, text: "Creative Style Sheets", letter: "A", isCorrect: false },
        { id: 1, text: "Cascading Style Sheets", letter: "B", isCorrect: true },
        { id: 2, text: "Computer Style Sheets", letter: "C", isCorrect: false },
        { id: 3, text: "Colorful Style Sheets", letter: "D", isCorrect: false },
      ],
      description: "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML."
    }
  ];

  const handleCheck = () => {
    if (selected !== null) {
      setIsAnswered(true);
      if (questions[currentQuestion].options[selected].isCorrect) {
        setScore(prev => prev + 500);
      }
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelected(null);
      setIsAnswered(false);
    } else {
      navigate('/dashboard');
    }
  };

  const q = questions[currentQuestion];
  const currentSelectedOption = selected !== null ? q.options[selected] : null;
  const isCorrect = currentSelectedOption?.isCorrect;

  return (
    <div className="min-h-screen bg-white dark:bg-[#0c0c0c] text-slate-900 dark:text-white flex flex-col p-6 pt-12 transition-colors duration-500">
      <header className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <span className="text-slate-900 dark:text-white font-black tracking-tighter text-sm">STARDY.AI</span>
          <Logo className="size-8" />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate('/learn')} className="size-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Tech Quiz</span>
            <h1 className="text-sm font-extrabold tracking-tight">Question {currentQuestion + 1} of {questions.length}</h1>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 bg-primary/10 text-primary px-3 py-2 rounded-full border border-primary/20 backdrop-blur-sm">
              <span className="material-symbols-outlined text-sm font-bold">timer</span>
              <span className="text-xs font-bold tabular-nums">00:45</span>
            </div>
          </div>
        </div>
      </header>

      <div className="mt-8">
        <div className="relative h-3 w-full bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
          <div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary/60 to-primary shadow-[0_0_10px_rgba(248,151,32,0.4)] rounded-full transition-all duration-500" 
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
        <div className="flex justify-between mt-3 items-center">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-primary fill text-xl">stars</span>
            <span className="text-[10px] font-extrabold text-primary/80 uppercase tracking-widest">{score} XP Earned</span>
          </div>
          <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Goal: 1500 XP</span>
        </div>
      </div>

      <main className="flex-1 mt-10">
        <h2 className="text-2xl font-extrabold leading-tight tracking-tight mb-10">
          {q.question}
        </h2>

        <div className={`flex flex-col gap-4 ${isAnswered ? 'pointer-events-none' : ''}`}>
          {q.options.map((opt) => {
            const isThisSelected = selected === opt.id;
            let buttonClass = "border-slate-100 dark:border-white/5 bg-white dark:bg-white/5 hover:border-slate-300 dark:hover:border-white/10";
            let iconClass = "border-slate-200 dark:border-zinc-700 text-slate-500";

            if (isAnswered) {
              if (opt.isCorrect) {
                buttonClass = "border-green-500 bg-green-500/10 shadow-lg shadow-green-500/10";
                iconClass = "border-green-500 bg-green-500 text-white";
              } else if (isThisSelected && !opt.isCorrect) {
                buttonClass = "border-red-500 bg-red-500/10 shadow-lg shadow-red-500/10";
                iconClass = "border-red-500 bg-red-500 text-white";
              }
            } else if (isThisSelected) {
              buttonClass = "border-stardy-blue bg-stardy-blue/10 ring-2 ring-stardy-blue/30 shadow-lg shadow-stardy-blue/10";
              iconClass = "border-stardy-blue bg-stardy-blue text-white";
            }

            return (
              <button
                key={opt.id}
                onClick={() => setSelected(opt.id)}
                className={`flex items-center gap-4 w-full p-5 rounded-2xl border-2 transition-all text-left group ${buttonClass}`}
              >
                <div className={`size-7 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors font-bold text-[10px] ${iconClass}`}>
                  {isAnswered && opt.isCorrect ? (
                    <span className="material-symbols-outlined text-sm font-bold">check</span>
                  ) : isAnswered && isThisSelected && !opt.isCorrect ? (
                    <span className="material-symbols-outlined text-sm font-bold">close</span>
                  ) : (
                    opt.letter
                  )}
                </div>
                <span className={`text-sm font-bold leading-relaxed transition-colors ${
                  isThisSelected ? 'text-stardy-blue dark:text-white' : 'text-slate-600 dark:text-slate-400'
                }`}>
                  {opt.text}
                </span>
              </button>
            );
          })}
        </div>
      </main>

      <footer className="mt-10 pb-8 space-y-5">
        {!isAnswered ? (
          <>
            <div className="flex items-center justify-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest opacity-60">
              <span className="material-symbols-outlined text-sm">lightbulb</span>
              <span>Tip: Read carefully!</span>
            </div>
            <button 
              onClick={handleCheck}
              disabled={selected === null}
              className={`w-full h-16 text-white font-extrabold text-lg rounded-full shadow-xl flex items-center justify-center gap-2 transition-all ${
                selected !== null 
                  ? 'bg-primary shadow-primary/20 active:scale-95' 
                  : 'bg-slate-300 dark:bg-zinc-800 cursor-not-allowed opacity-50'
              }`}
            >
              Check Answer
              <span className="material-symbols-outlined font-bold">done_all</span>
            </button>
          </>
        ) : (
          <div className="h-20"></div> // Spacer when drawer is up
        )}
        <div className="h-1.5 w-32 bg-slate-200 dark:bg-white/20 rounded-full mx-auto"></div>
      </footer>

      {/* Answer Feedback Bottom Sheet */}
      <div 
        className={`fixed inset-x-0 bottom-0 z-[60] transform transition-transform duration-500 ease-out p-6 rounded-t-[2.5rem] shadow-[0_-20px_50px_rgba(0,0,0,0.15)] ${
          isAnswered ? 'translate-y-0' : 'translate-y-full'
        } ${isCorrect ? 'bg-green-500 dark:bg-green-600' : 'bg-red-500 dark:bg-red-600'}`}
      >
        <div className="max-w-[480px] mx-auto flex flex-col gap-6">
          <div className="flex items-start gap-4">
            <div className="size-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0 shadow-inner">
              <span className="material-symbols-outlined text-white text-3xl fill">
                {isCorrect ? 'sentiment_very_satisfied' : 'error'}
              </span>
            </div>
            <div className="flex-1 text-white">
              <h3 className="text-xl font-black uppercase tracking-tight">
                {isCorrect ? 'Excellent!' : 'Not quite right'}
              </h3>
              <p className="text-sm font-medium opacity-90 leading-tight mt-1">
                {q.description}
              </p>
            </div>
          </div>
          
          <div className="flex gap-3">
            <button 
              onClick={handleNext}
              className="flex-1 h-14 bg-white text-slate-900 font-black rounded-full shadow-lg active:scale-95 transition-transform flex items-center justify-center gap-2"
            >
              {currentQuestion < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
              <span className="material-symbols-outlined font-bold">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>

      {/* Overlay to dim background when sheet is active */}
      {isAnswered && (
        <div 
          className="fixed inset-0 bg-black/10 backdrop-blur-[2px] z-[55] animate-in fade-in duration-500"
          onClick={handleNext}
        ></div>
      )}
    </div>
  );
};

export default Quiz;
