
import React from 'react';
import type { Question, UserAnswers, CorrectAnswers } from '../types';
import { CheckIcon, CrossIcon } from './icons';

interface QuestionnaireProps {
  questions: Question[];
  userAnswers: UserAnswers;
  isSubmitted: boolean;
  score: number;
  onAnswerChange: (id: string, answer: string) => void;
  onSubmit: () => void;
  correctAnswers: CorrectAnswers;
}

const getOptionLetter = (index: number) => String.fromCharCode(65 + index);

const renderFeedback = (isCorrect: boolean, correctAnswer: string | string[]) => {
  const answerText = Array.isArray(correctAnswer) ? correctAnswer.join(' / ') : correctAnswer;
  return (
    <div className="mt-2 flex items-center">
      {isCorrect ? (
        <CheckIcon className="h-5 w-5 text-green-600 mr-2" />
      ) : (
        <CrossIcon className="h-5 w-5 text-red-600 mr-2" />
      )}
      <span className={`text-sm font-semibold ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
        {isCorrect ? 'Correct' : `Correct answer: ${answerText}`}
      </span>
    </div>
  );
};


export const Questionnaire: React.FC<QuestionnaireProps> = ({
  questions,
  userAnswers,
  isSubmitted,
  score,
  onAnswerChange,
  onSubmit,
  correctAnswers
}) => {
  let lastInstructions = '';

  const isCorrect = (question: Question): boolean => {
    const userAnswer = userAnswers[question.id]?.trim().toLowerCase() || '';
    const correctAnswer = correctAnswers[question.id];
    if (Array.isArray(correctAnswer)) {
      return correctAnswer.map(a => a.toLowerCase()).includes(userAnswer);
    }
    return userAnswer === correctAnswer.toLowerCase();
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 border-b pb-2">Questions</h2>
      
      {isSubmitted && (
        <div className="mb-6 p-4 bg-blue-100 border border-blue-200 text-blue-800 rounded-lg">
          <h3 className="font-bold text-lg">Results</h3>
          <p>You scored <span className="font-bold">{score}</span> out of <span className="font-bold">{questions.length}</span>.</p>
        </div>
      )}

      <div className="space-y-6">
        {questions.map((q) => {
          const showInstructions = q.instructions && q.instructions !== lastInstructions;
          if (showInstructions) {
            lastInstructions = q.instructions;
          }
          return (
            <div key={q.id} className="border-t pt-4 first:border-t-0 first:pt-0">
              {showInstructions && (
                <p className="text-sm text-slate-600 font-semibold mb-3">{q.instructions}</p>
              )}

              {q.type === 'multiple-choice' && (
                <div>
                  <p className="font-medium mb-2">{q.id}. {q.question}</p>
                  <div className="space-y-2">
                    {q.options?.map((option, index) => {
                      const optionLetter = getOptionLetter(index);
                      return (
                        <label key={index} className="flex items-center p-2 rounded-md hover:bg-slate-50 cursor-pointer">
                          <input
                            type="radio"
                            name={q.id}
                            value={optionLetter}
                            checked={userAnswers[q.id] === optionLetter}
                            onChange={(e) => onAnswerChange(q.id, e.target.value)}
                            disabled={isSubmitted}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 disabled:opacity-50"
                          />
                          <span className="ml-3 text-slate-700"><span className="font-semibold">{optionLetter}</span> {option}</span>
                        </label>
                      );
                    })}
                  </div>
                  {isSubmitted && renderFeedback(isCorrect(q), correctAnswers[q.id])}
                </div>
              )}

              {q.type === 'sentence-completion' && (
                <div className="flex flex-wrap items-center gap-2">
                    <p className="font-medium">{q.id}. {q.question}</p>
                    <input
                        type="text"
                        value={userAnswers[q.id] || ''}
                        onChange={(e) => onAnswerChange(q.id, e.target.value)}
                        disabled={isSubmitted}
                        className="mt-1 block w-full sm:w-auto flex-grow px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200"
                        placeholder="Your answer..."
                    />
                    {isSubmitted && renderFeedback(isCorrect(q), correctAnswers[q.id])}
                </div>
              )}

              {q.type === 'true-false-not-given' && (
                <div>
                  <p className="font-medium mb-2">{q.id}. {q.question}</p>
                  <div className="flex flex-wrap gap-2">
                    {['TRUE', 'FALSE', 'NOT GIVEN'].map(option => (
                      <label key={option} className="flex items-center px-3 py-1 rounded-full border hover:bg-slate-50 cursor-pointer has-[:checked]:bg-blue-100 has-[:checked]:border-blue-400">
                        <input
                          type="radio"
                          name={q.id}
                          value={option}
                          checked={userAnswers[q.id] === option}
                          onChange={(e) => onAnswerChange(q.id, e.target.value)}
                          disabled={isSubmitted}
                          className="sr-only"
                        />
                        <span className="text-sm font-medium text-slate-700">{option}</span>
                      </label>
                    ))}
                  </div>
                  {isSubmitted && renderFeedback(isCorrect(q), correctAnswers[q.id])}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {!isSubmitted && (
        <button
          onClick={onSubmit}
          className="mt-8 w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
        >
          Check Answers
        </button>
      )}
    </div>
  );
};
