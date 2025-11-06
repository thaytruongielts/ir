
import React from 'react';

interface ReadingPassageProps {
  passage: string[];
}

export const ReadingPassage: React.FC<ReadingPassageProps> = ({ passage }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-h-[80vh] overflow-y-auto">
      <h2 className="text-xl font-bold mb-4 border-b pb-2">Reading Passage</h2>
      <div className="space-y-4 text-slate-700 leading-relaxed">
        {passage.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};
