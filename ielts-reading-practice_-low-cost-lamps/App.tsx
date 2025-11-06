
import React, { useState, useCallback } from 'react';
import { ReadingPassage } from './components/ReadingPassage';
import { Questionnaire } from './components/Questionnaire';
import { passage, questions, correctAnswers } from './constants';
import type { UserAnswers } from './types';

const App: React.FC = () => {
  const [userAnswers, setUserAnswers] = useState<UserAnswers>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  const handleAnswerChange = useCallback((id: string, answer: string) => {
    setUserAnswers(prev => ({
      ...prev,
      [id]: answer,
    }));
  }, []);

  const handleSubmit = () => {
    let currentScore = 0;
    for (const question of questions) {
      const userAnswer = userAnswers[question.id]?.trim().toLowerCase() || '';
      const correctAnswer = correctAnswers[question.id];

      if (Array.isArray(correctAnswer)) {
         if (correctAnswer.map(ans => ans.toLowerCase()).includes(userAnswer)) {
            currentScore++;
         }
      } else {
        if (userAnswer === correctAnswer.toLowerCase()) {
          currentScore++;
        }
      }
    }
    setScore(currentScore);
    setIsSubmitted(true);
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-slate-100 min-h-screen font-sans text-slate-800">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900">IELTS Reading Practice</h1>
          <p className="text-md text-slate-600 mt-1">Passage: Low-Cost Lamps Light Rural India</p>
        </div>
      </header>

      <main className="container mx-auto p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8">
          <div className="lg:sticky lg:top-8 lg:self-start">
            <ReadingPassage passage={passage} />
          </div>
          
          <div className="mt-8 lg:mt-0">
            <Questionnaire
              questions={questions}
              userAnswers={userAnswers}
              isSubmitted={isSubmitted}
              score={score}
              onAnswerChange={handleAnswerChange}
              onSubmit={handleSubmit}
              correctAnswers={correctAnswers}
            />
          </div>
        </div>
      </main>
       <footer className="text-center py-4 text-slate-500 text-sm">
         <p>Built by a world-class senior frontend React engineer.</p>
       </footer>
    </div>
  );
};

export default App;
