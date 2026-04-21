
import React from 'react';
import { Step } from '../utils/types';

interface NavigationProps {
  currentStep: Step;
  onNext: () => void;
  onBack: () => void;
  isNextLocked: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ currentStep, onNext, onBack }) => {
  const stepLabels: Record<number, string> = {
    [Step.HOOK]: "Hook",
    [Step.PREP_COMMITMENT]: "Predict",
    [Step.INTERACTION]: "Interaction",
    [Step.SOCRATIC]: "Socratic",
    [Step.THEORY]: "Theory",
    [Step.TRANSFER]: "Logic",
    [Step.REAL_WORLD]: "Context",
    [Step.REFLECTION]: "Reflection",
    [Step.CHALLENGE]: "Challenge",
    [Step.COMPLETION]: "Mastery"
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-2xl border-t border-slate-100 p-4 z-[50] flex items-center justify-center shadow-[0_-10px_40px_rgba(0,0,0,0.03)]">
      <div className="max-w-4xl w-full flex items-center justify-between gap-4">
        
        {/* Previous */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all bg-slate-50 text-slate-600 hover:bg-slate-100 active:scale-95 border border-slate-100"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          Back
        </button>

        {/* Progress Display */}
        <div className="hidden md:flex items-center gap-4">
           <div className="flex flex-col items-center">
             <span className="text-[8px] font-mono font-black text-slate-400 uppercase tracking-widest">SLIDE {currentStep + 1}</span>
             <div className="flex gap-1 mt-1">
               {Array.from({length: 10}).map((_, i) => (
                 <div key={i} className={`h-1 w-4 rounded-full ${i <= currentStep ? 'bg-blue-600' : 'bg-slate-100'}`} />
               ))}
             </div>
           </div>
           <span className="text-[10px] font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-lg border border-blue-100 uppercase">
             {stepLabels[currentStep]}
           </span>
        </div>

        {/* Next */}
        <button
          onClick={onNext}
          className="flex items-center gap-2 px-8 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all bg-slate-900 text-white hover:bg-blue-600 active:scale-95 shadow-xl shadow-slate-900/10"
        >
          Continue
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </button>

      </div>
    </div>
  );
};

export default Navigation;
