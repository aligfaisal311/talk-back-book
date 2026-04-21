
import React, { useState } from 'react';
import { analyzeResponse } from '../features/ai/tutorService';
import { AttemptState } from '../utils/types';

interface QuestionBlockProps {
  id: string;
  topic: string;
  question: string;
  onSuccess: (isCorrect: boolean, attempts: number) => void;
}

const QuestionBlock: React.FC<QuestionBlockProps> = ({ id, topic, question, onSuccess }) => {
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [attempts, setAttempts] = useState<AttemptState>({
    count: 0,
    lastFeedback: '',
    isUnlocked: false
  });

  const handleSubmit = async () => {
    if (!answer.trim() || attempts.isUnlocked) return;

    setLoading(true);
    const result = await analyzeResponse(topic, question, answer, attempts.count + 1);
    
    const newCount = attempts.count + 1;
    const isUnlocked = result.isCorrect || newCount >= 3;

    setAttempts({
      count: newCount,
      lastFeedback: result.message,
      lastScaffold: result.scaffoldingQuestion,
      isUnlocked: isUnlocked,
      masteryStatus: result.isCorrect ? 'independent' : 'assisted'
    });

    if (isUnlocked) {
      onSuccess(result.isCorrect, newCount);
    }
    setLoading(false);
  };

  return (
    <div className={`p-6 rounded-2xl border-2 transition-all duration-500 shadow-sm ${
      attempts.isUnlocked ? 'border-green-200 bg-green-50' : 'border-blue-100 bg-white'
    }`}>
      <div className="flex justify-between items-start mb-4">
        <h4 className="font-bold text-slate-800 flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          </div>
          Talk-Back Question
        </h4>
        <div className="flex gap-1">
          {[1, 2, 3].map(i => (
            <div key={i} className={`w-6 h-1 rounded-full ${i <= attempts.count ? 'bg-blue-500' : 'bg-slate-200'}`} />
          ))}
        </div>
      </div>

      <p className="text-slate-700 mb-6 font-medium italic text-lg leading-snug">"{question}"</p>
      
      <textarea
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        disabled={attempts.isUnlocked || loading}
        placeholder="Type your intuition here..."
        className="w-full p-5 border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 min-h-[120px] mb-4 bg-slate-50 transition-all disabled:opacity-50 text-slate-800"
      />

      <div className="flex items-center justify-end">
        <button
          onClick={handleSubmit}
          disabled={loading || attempts.isUnlocked || !answer.trim()}
          className="px-8 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 disabled:opacity-50 transition-all flex items-center gap-2 shadow-lg shadow-blue-500/20 active:scale-95"
        >
          {loading ? "Analyzing..." : "Submit Prediction"}
        </button>
      </div>

      {attempts.lastFeedback && (
        <div className="mt-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-500">
          <div className={`p-4 rounded-xl text-sm border ${
            attempts.isUnlocked && attempts.masteryStatus === 'independent' 
              ? 'bg-green-100 border-green-200 text-green-800' 
              : 'bg-white border-slate-100 text-slate-700 shadow-sm'
          }`}>
             <span className="font-bold block mb-1">Feedback:</span>
             {attempts.lastFeedback}
          </div>

          {!attempts.isUnlocked && attempts.lastScaffold && (
            <div className="p-5 bg-amber-50 border border-amber-100 rounded-xl text-amber-900 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center text-[10px] font-black">?</div>
                <span className="font-black uppercase tracking-wider text-[11px] text-amber-600">Thinking Prompt</span>
              </div>
              <p className="font-bold text-base italic leading-relaxed">"{attempts.lastScaffold}"</p>
            </div>
          )}

          {attempts.isUnlocked && attempts.count >= 3 && (
             <div className="text-xs text-slate-400 text-center italic">
               Concept unlocked via assisted reveal.
             </div>
          )}
        </div>
      )}
    </div>
  );
};

export default QuestionBlock;
