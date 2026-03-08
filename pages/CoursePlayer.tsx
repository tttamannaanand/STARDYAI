
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Logo from '../components/Logo';

interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  hint?: string;
}

interface Module {
  id: number;
  title: string;
  duration: string;
  videoUrl: string;
  quiz?: QuizQuestion[];
}

interface Course {
  id: number;
  title: string;
  modules: Module[];
}

const CoursePlayer: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [activeModuleIndex, setActiveModuleIndex] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showHint, setShowHint] = useState(false);

  // Mock data for a specific course
  const courseData: Course = {
    id: Number(id),
    title: 'Mastering Python',
    modules: [
      {
        id: 1,
        title: 'Introduction to Python',
        duration: '10:25',
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
        quiz: [
          {
            question: 'What is Python?',
            options: ['A snake', 'A programming language', 'A car', 'A food'],
            correctAnswer: 1,
            hint: 'It is named after a British comedy group, not a reptile.'
          },
          {
            question: 'Who created Python?',
            options: ['Guido van Rossum', 'Elon Musk', 'Bill Gates', 'Mark Zuckerberg'],
            correctAnswer: 0,
            hint: 'He is a Dutch programmer.'
          }
        ]
      },
      {
        id: 2,
        title: 'Variables and Data Types',
        duration: '15:40',
        videoUrl: 'https://www.w3schools.com/html/movie.mp4',
        quiz: [
          {
            question: 'Which of these is a valid variable name in Python?',
            options: ['2myvar', 'my-var', 'my_var', 'my var'],
            correctAnswer: 2,
            hint: 'Variable names cannot start with numbers and cannot contain hyphens or spaces.'
          }
        ]
      },
      {
        id: 3,
        title: 'Control Flow: If Statements',
        duration: '12:15',
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      }
    ]
  };

  const activeModule = courseData.modules[activeModuleIndex];

  const handleNextQuestion = () => {
    if (activeModule.quiz && currentQuestionIndex < activeModule.quiz.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setQuizSubmitted(false);
      setShowHint(false);
    } else {
      setShowQuiz(false);
      setShowHint(false);
      if (activeModuleIndex < courseData.modules.length - 1) {
        setActiveModuleIndex(activeModuleIndex + 1);
        setCurrentQuestionIndex(0);
      } else {
        alert('Course Completed!');
        navigate('/learn');
      }
    }
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark flex flex-col">
      {/* Header */}
      <header className="bg-black px-6 py-4 flex items-center justify-between border-b border-white/10 shadow-lg">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate('/learn')} className="text-slate-500 hover:text-white active:text-white transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <div className="flex flex-col">
            <h1 className="text-slate-500 font-bold text-sm truncate max-w-[200px]">{courseData.title}</h1>
            <p className="text-primary text-[10px] font-bold uppercase tracking-wider">Module {activeModuleIndex + 1} of {courseData.modules.length}</p>
          </div>
        </div>
        <Logo className="size-8" />
      </header>

      {/* Video Player Area */}
      <div className="w-full aspect-video bg-black relative group">
        {!showQuiz ? (
          <video 
            key={activeModule.videoUrl}
            className="w-full h-full" 
            controls 
            autoPlay
            onEnded={() => activeModule.quiz ? setShowQuiz(true) : null}
          >
            <source src={activeModule.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div className="absolute inset-0 bg-stardy-navy/95 flex flex-col items-center justify-center p-8 text-center animate-in fade-in duration-500">
            <div className="size-16 rounded-full bg-primary/20 flex items-center justify-center mb-6 border border-primary/30">
              <span className="material-symbols-outlined text-primary text-3xl">quiz</span>
            </div>
            <h2 className="text-white text-xl font-bold mb-2">Knowledge Check</h2>
            <p className="text-white/60 text-xs mb-8">Let's see what you've learned in this module!</p>
            <button 
              onClick={() => setShowQuiz(true)}
              className="bg-primary text-white font-bold px-8 py-3 rounded-full shadow-lg shadow-primary/20 active:scale-95 transition-all"
            >
              Start Quiz
            </button>
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-8 no-scrollbar">
        {/* Tabs */}
        <div className="flex bg-slate-100 dark:bg-white/5 p-1 rounded-xl mb-6">
          <button 
            onClick={() => setShowQuiz(false)}
            className={`flex-1 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${!showQuiz ? 'bg-white dark:bg-zinc-800 text-primary shadow-sm' : 'text-slate-400'}`}
          >
            Modules
          </button>
          <button 
            onClick={() => {
              if (activeModule.quiz) setShowQuiz(true);
              else alert('No quiz available for this module.');
            }}
            className={`flex-1 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${showQuiz ? 'bg-white dark:bg-zinc-800 text-primary shadow-sm' : 'text-slate-400'}`}
          >
            Quiz
          </button>
        </div>

        {showQuiz && activeModule.quiz ? (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold">Question {currentQuestionIndex + 1}</h3>
              <span className="text-xs font-bold text-slate-400">{currentQuestionIndex + 1}/{activeModule.quiz.length}</span>
            </div>
            
            <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
              {activeModule.quiz[currentQuestionIndex].question}
            </p>

            {activeModule.quiz[currentQuestionIndex].hint && (
              <div className="space-y-2">
                {showHint && (
                  <div className="p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/30 rounded-xl animate-in fade-in slide-in-from-top-2 duration-300">
                    <p className="text-[10px] font-bold text-amber-700 dark:text-amber-400 leading-relaxed">
                      <span className="font-black uppercase tracking-widest mr-2">Hint:</span>
                      {activeModule.quiz[currentQuestionIndex].hint}
                    </p>
                  </div>
                )}
                <button 
                  onClick={() => setShowHint(!showHint)}
                  className="flex items-center gap-1.5 text-[10px] font-black text-primary uppercase tracking-widest hover:opacity-80 transition-opacity"
                >
                  <span className="material-symbols-outlined text-xs">{showHint ? 'visibility_off' : 'lightbulb'}</span>
                  {showHint ? 'Hide Hint' : 'Need a Hint?'}
                </button>
              </div>
            )}

            <div className="space-y-3">
              {activeModule.quiz[currentQuestionIndex].options.map((option, idx) => (
                <button
                  key={idx}
                  disabled={quizSubmitted}
                  onClick={() => setSelectedOption(idx)}
                  className={`w-full p-4 rounded-2xl border text-left text-sm font-bold transition-all flex items-center justify-between ${
                    selectedOption === idx
                      ? quizSubmitted
                        ? idx === activeModule.quiz![currentQuestionIndex].correctAnswer
                          ? 'bg-emerald-500/10 border-emerald-500 text-emerald-500'
                          : 'bg-rose-500/10 border-rose-500 text-rose-500'
                        : 'bg-primary/10 border-primary text-primary'
                      : 'bg-white dark:bg-zinc-900 border-slate-100 dark:border-white/5 text-slate-600 dark:text-slate-400'
                  }`}
                >
                  {option}
                  {quizSubmitted && idx === activeModule.quiz![currentQuestionIndex].correctAnswer && (
                    <span className="material-symbols-outlined text-emerald-500">check_circle</span>
                  )}
                  {quizSubmitted && selectedOption === idx && idx !== activeModule.quiz![currentQuestionIndex].correctAnswer && (
                    <span className="material-symbols-outlined text-rose-500">cancel</span>
                  )}
                </button>
              ))}
            </div>

            {!quizSubmitted ? (
              <button
                disabled={selectedOption === null}
                onClick={() => setQuizSubmitted(true)}
                className="w-full bg-primary text-white font-bold py-4 rounded-2xl shadow-lg shadow-primary/20 disabled:opacity-50 disabled:shadow-none transition-all active:scale-95"
              >
                Submit Answer
              </button>
            ) : (
              <button
                onClick={handleNextQuestion}
                className="w-full bg-stardy-navy text-white font-bold py-4 rounded-2xl shadow-lg active:scale-95 transition-all"
              >
                {currentQuestionIndex < activeModule.quiz!.length - 1 ? 'Next Question' : 'Complete Module'}
              </button>
            )}
          </div>
        ) : (
          <>
            <div className="space-y-2">
              <h2 className="text-2xl font-black tracking-tight">{activeModule.title}</h2>
              <div className="flex items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">schedule</span>
                  {activeModule.duration}
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">play_circle</span>
                  Video Lesson
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-black uppercase tracking-widest text-slate-500">Course Modules</h3>
              <div className="space-y-3">
                {courseData.modules.map((mod, idx) => (
                  <button
                    key={mod.id}
                    onClick={() => {
                      setActiveModuleIndex(idx);
                      setShowQuiz(false);
                      setQuizSubmitted(false);
                      setSelectedOption(null);
                    }}
                    className={`w-full p-4 rounded-2xl border flex items-center gap-4 transition-all ${
                      activeModuleIndex === idx
                        ? 'bg-primary/5 border-primary/30'
                        : 'bg-white dark:bg-zinc-900 border-slate-100 dark:border-white/5'
                    }`}
                  >
                    <div className={`size-10 rounded-xl flex items-center justify-center font-black text-sm ${
                      activeModuleIndex === idx ? 'bg-primary text-white' : 'bg-slate-100 dark:bg-white/5 text-slate-400'
                    }`}>
                      {idx + 1}
                    </div>
                    <div className="flex-1 text-left">
                      <p className={`text-sm font-bold ${activeModuleIndex === idx ? 'text-slate-900 dark:text-white' : 'text-slate-500'}`}>
                        {mod.title}
                      </p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{mod.duration}</p>
                    </div>
                    {activeModuleIndex > idx && (
                      <span className="material-symbols-outlined text-emerald-500">check_circle</span>
                    )}
                    {activeModuleIndex === idx && (
                      <div className="size-2 bg-primary rounded-full animate-pulse"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CoursePlayer;
