
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import LearningCenter from './pages/LearningCenter';
import Opportunities from './pages/Opportunities';
import Profile from './pages/Profile';
import Quiz from './pages/Quiz';
import ErrorPage from './pages/ErrorPage';
import Loading from './pages/Loading';
import Settings from './pages/Settings';
import Help from './pages/Help';
import Privacy from './pages/Privacy';
import AccountInfo from './pages/AccountInfo';
import Premium from './pages/Premium';
import { ThemeProvider } from './components/ThemeContext';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Artificial delay to show off the beautiful loading screen
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="mx-auto max-w-[480px] min-h-screen relative shadow-2xl bg-white dark:bg-background-dark overflow-hidden">
        <Loading />
      </div>
    );
  }

  return (
    <ThemeProvider>
      <Router>
        <div className="mx-auto max-w-[480px] min-h-screen relative shadow-2xl bg-white dark:bg-background-dark overflow-hidden text-slate-900 dark:text-white">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/learn" element={<LearningCenter />} />
            <Route path="/opportunities" element={<Opportunities />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/help" element={<Help />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/account-info" element={<AccountInfo />} />
            <Route path="/premium" element={<Premium />} />
            <Route path="/error" element={<ErrorPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
