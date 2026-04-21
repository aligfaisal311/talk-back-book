
import React, { useState, useMemo, useEffect } from 'react';
import { Step, LessonContent, DifficultyLevel } from './utils/types';
import Navigation from './components/Navigation';
import Simulation from './components/Simulation';
import QuestionBlock from './components/QuestionBlock';
import HookImage from './components/HookImage';
import Sidebar from './components/Sidebar';
import { CURRICULUM } from './content/chapters/nav';
import { AuthProvider, useAuth } from './features/auth/authContext';
import { saveProgress, subscribeToProgress } from './features/progress/progressService';
import { trackEvent } from './features/analytics/analyticsService';

const lessons = (import.meta as any).glob('./content/chapters/**/{content,metadata}.ts', { eager: true });

const AppContent: React.FC = () => {
  const { user, loading: authLoading, login, logout } = useAuth();
  const [currentStep, setCurrentStep] = useState<Step>(Step.HOOK);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeLessonPath, setActiveLessonPath] = useState("01_introduction_and_properties/1_1_what_is_a_fluid/01_solid_vs_fluid");
  const [socraticIndex, setSocraticIndex] = useState(0);
  const [studentLevel, setStudentLevel] = useState<DifficultyLevel>('medium');
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);

  useEffect(() => {
    if (user) {
      trackEvent(user.uid, 'lesson_start', { path: activeLessonPath });
    }
  }, [user, activeLessonPath]);

  useEffect(() => {
    if (user) {
      const unsubscribe = subscribeToProgress(user.uid, (progress) => {
        if (progress.currentLevel) setStudentLevel(progress.currentLevel);
        if (progress.completedLessons) setCompletedLessons(progress.completedLessons);
      });
      return unsubscribe;
    }
  }, [user]);

  const updateLevel = (isCorrect: boolean, attempts: number) => {
    let newLevel = studentLevel;
    if (isCorrect && attempts === 1) {
      if (studentLevel === 'easy') newLevel = 'medium';
      else if (studentLevel === 'medium') newLevel = 'hard';
    } else if (!isCorrect || attempts >= 3) {
      if (studentLevel === 'hard') newLevel = 'medium';
      else if (studentLevel === 'medium') newLevel = 'easy';
    }
    
    if (newLevel !== studentLevel) {
      setStudentLevel(newLevel);
      if (user) {
        saveProgress(user.uid, {
          completedLessons,
          currentLevel: newLevel,
          lastAccessed: Date.now()
        });
      }
    }
  };

  const allMicroLessons = useMemo(() => {
    return CURRICULUM.chapters.flatMap(c => 
      c.subchapters.flatMap(s => 
        s.topics.flatMap(t => t.microLessons)
      )
    );
  }, []);

  const currentLessonIndex = allMicroLessons.findIndex(m => m.path === activeLessonPath);
  const isLesson01 = activeLessonPath === allMicroLessons[0]?.path;

  const lessonData: LessonContent | null = useMemo(() => {
    const lessonEntry = Object.entries(lessons).find(([path]) => path.includes(activeLessonPath));
    if (lessonEntry) {
      const module = lessonEntry[1] as any;
      return (module.CONTENT || module.MICRO_CONTENT || module.MICRO_01_DATA || module.MICRO_02_DATA || module.MICRO_03_DATA || module.MICRO_04_DATA || module.MICRO_05_DATA) as LessonContent;
    }
    return null;
  }, [activeLessonPath]);

  const handleNext = () => {
    if (currentStep < Step.COMPLETION) {
      setCurrentStep(currentStep + 1);
    } else if (currentLessonIndex < allMicroLessons.length - 1) {
      const nextLesson = allMicroLessons[currentLessonIndex + 1];
      const newCompleted = [...new Set([...completedLessons, activeLessonPath])];
      setCompletedLessons(newCompleted);
      if (user) {
        trackEvent(user.uid, 'lesson_complete', { path: activeLessonPath });
        saveProgress(user.uid, {
          completedLessons: newCompleted,
          currentLevel: studentLevel,
          lastAccessed: Date.now()
        });
      }
      setActiveLessonPath(nextLesson.path);
      setCurrentStep(Step.HOOK);
      setSocraticIndex(0);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    if (currentStep > Step.HOOK) {
      setCurrentStep(currentStep - 1);
    } else if (currentLessonIndex > 0) {
      const prevLesson = allMicroLessons[currentLessonIndex - 1];
      setActiveLessonPath(prevLesson.path);
      setCurrentStep(Step.COMPLETION);
      setSocraticIndex(0);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (path: string) => {
    setActiveLessonPath(path);
    setCurrentStep(Step.HOOK);
    setSocraticIndex(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (authLoading) return <div className="p-20 text-center font-black">Connecting to SaaS...</div>;

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900 p-6">
        <div className="max-w-md w-full bg-white rounded-[40px] p-12 shadow-2xl text-center space-y-8">
          <div className="w-20 h-20 bg-blue-600 rounded-3xl mx-auto flex items-center justify-center text-white shadow-xl shadow-blue-500/20">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M8 7h6"/><path d="M8 11h8"/></svg>
          </div>
          <div>
            <h1 className="text-4xl font-black tracking-tighter text-slate-900">Talk-Back Book</h1>
            <p className="text-slate-500 font-bold mt-2 italic">Master Fluid Mechanics through Socratic Inquiry.</p>
          </div>
          <button 
            onClick={login}
            className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl active:scale-95"
          >
            Sign in with Google
          </button>
          <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Secure SaaS Architecture v1.0</p>
        </div>
      </div>
    );
  }

  if (!lessonData) return <div className="p-20 text-center font-black">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto px-6 py-8 min-h-screen flex flex-col bg-white relative pb-40">
      {/* Sidebar Trigger */}
      <div className="fixed top-6 left-6 z-50 flex gap-2">
        <button 
          onClick={() => setIsSidebarOpen(true)}
          className="bg-slate-900 text-white p-3 rounded-xl shadow-xl hover:scale-105 active:scale-95 transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </button>
        <button 
          onClick={logout}
          className="bg-white text-slate-400 p-3 rounded-xl shadow-md hover:text-red-500 transition-all border border-slate-100"
          title="Logout"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
        </button>
      </div>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} onNavigate={handleNavigate} activePath={activeLessonPath} completedPaths={completedLessons} />

      {/* COMPACT TOP HEADER */}
      <header className="mb-8 border-b border-slate-100 pb-4 pt-4">
        <div className="flex justify-between items-start">
          <div className="space-y-0.5">
            <span className="text-[10px] font-mono font-black text-slate-400 uppercase tracking-tighter block leading-none">
              Chapter: {CURRICULUM.chapters[0].title}
            </span>
            <h1 className="text-4xl font-black text-slate-900 leading-none tracking-tighter">
              {currentStep === Step.HOOK ? lessonData.metadata.title : lessonData.theory.title}
            </h1>
          </div>
          <div className="text-right">
            <span className="text-[10px] font-mono font-bold bg-slate-100 px-2 py-1 rounded text-slate-500">
              SLIDE: {currentStep + 1} / 10
            </span>
            <div className="text-[9px] font-mono text-blue-500 mt-1 uppercase font-black">
              LEVEL: {studentLevel}
            </div>
            <div className="text-[9px] font-mono text-blue-500 mt-1 uppercase font-black">
              INDEX: {allMicroLessons[currentLessonIndex]?.title.split(' ')[0]}
            </div>
          </div>
        </div>

        {/* Learning Outcomes Only on First Slide of Lesson */}
        {currentStep === Step.HOOK && lessonData.metadata.outcomes && (
          <div className="mt-6 p-4 bg-blue-50/50 border border-blue-100 rounded-2xl animate-in fade-in slide-in-from-top-2 duration-500">
             <h4 className="text-[9px] font-black uppercase tracking-widest text-blue-600 mb-2">Target Learning Outcomes</h4>
             <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {lessonData.metadata.outcomes.slice(0, 2).map((o: string, i: number) => (
                  <li key={i} className="flex gap-2 text-[11px] font-bold text-slate-700 leading-tight">
                    <div className="w-1 h-1 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                    {o}
                  </li>
                ))}
             </ul>
          </div>
        )}
      </header>

      <main className="flex-grow space-y-12">
        {currentStep === Step.HOOK && (
          <section className="space-y-8 animate-in slide-in-from-bottom-4 duration-700">
            <HookImage description={lessonData.hook.imageDescription || ""} />
            <div className="bg-slate-900 text-white p-10 rounded-[32px] shadow-2xl">
               <h2 className="text-3xl font-black mb-4 leading-tight italic">"{lessonData.levels[studentLevel].hook_prompt}"</h2>
               <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Step {currentStep + 1}: Cognitive Hook</p>
            </div>
          </section>
        )}

        {currentStep === Step.PREP_COMMITMENT && (
          <section className="space-y-8 animate-in fade-in duration-500">
            <QuestionBlock 
              id="prep" 
              topic="Initial Prediction" 
              question={lessonData.levels[studentLevel].hook_commitment} 
              onSuccess={(isCorrect, attempts) => {
                updateLevel(isCorrect, attempts);
                handleNext();
              }} 
            />
          </section>
        )}

        {currentStep === Step.INTERACTION && (
          <section className="space-y-8 animate-in slide-in-from-right-8 duration-700">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-black text-slate-800 uppercase tracking-tighter">Interaction Lab</h2>
              <div className="h-px flex-grow bg-slate-100" />
            </div>
            <Simulation type={isLesson01 ? 'jar_shake' : 'shear_flow'} />
            <div className="bg-blue-600 p-8 rounded-[32px] shadow-xl">
              <h4 className="font-black text-blue-100 text-[9px] uppercase tracking-widest mb-2">Observation Task</h4>
              <p className="text-2xl text-white font-bold italic leading-tight">
                "{lessonData.interaction.probing_question || lessonData.interaction.probingQuestion}"
              </p>
            </div>
          </section>
        )}

        {currentStep === Step.SOCRATIC && (
          <section className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
            <div className="flex justify-between items-center border-b border-slate-100 pb-2">
              <h2 className="text-2xl font-black text-slate-800 uppercase tracking-tighter">Socratic Inquiry</h2>
              <span className="text-[10px] font-mono font-black text-blue-500">Thought Case {socraticIndex + 1} / {lessonData.levels[studentLevel].socratic.length}</span>
            </div>
            <QuestionBlock 
              key={socraticIndex}
              id={`socratic_${socraticIndex}`}
              topic="Socratic Discovery"
              question={lessonData.levels[studentLevel].socratic[socraticIndex]?.question}
              onSuccess={(isCorrect, attempts) => {
                updateLevel(isCorrect, attempts);
                if (socraticIndex < lessonData.levels[studentLevel].socratic.length - 1) setSocraticIndex(socraticIndex + 1);
                else handleNext();
              }}
            />
          </section>
        )}

        {currentStep === Step.THEORY && (
          <section className="space-y-8 animate-in zoom-in-95 duration-500">
             <div className="bg-white p-10 rounded-[40px] border border-slate-200 shadow-2xl relative">
                <h2 className="text-3xl font-black mb-4">{lessonData.theory.title}</h2>
                <p className="text-xl text-slate-700 leading-relaxed mb-6">{lessonData.theory.content}</p>
                {lessonData.theory.formula && (
                  <div className="bg-slate-900 p-10 rounded-[24px] flex items-center justify-center text-4xl font-black text-blue-400 mb-6 font-mono tracking-tighter">
                    {`$${lessonData.theory.formula}$`}
                  </div>
                )}
                {lessonData.levels[studentLevel].theory_analogy && (
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 border-l-4 border-l-blue-500">
                    <h4 className="text-[9px] font-black uppercase text-blue-600 tracking-widest mb-1">Conceptual Analogy</h4>
                    <p className="text-lg font-bold italic text-slate-700 leading-snug">"{lessonData.levels[studentLevel].theory_analogy}"</p>
                  </div>
                )}
             </div>
          </section>
        )}

        {currentStep === Step.TRANSFER && (
          <section className="space-y-8 animate-in fade-in duration-500">
            <QuestionBlock 
              id="transfer" 
              topic="Logic Test" 
              question={lessonData.levels[studentLevel].transfer_prompt} 
              onSuccess={(isCorrect, attempts) => {
                updateLevel(isCorrect, attempts);
                handleNext();
              }} 
            />
          </section>
        )}

        {currentStep === Step.REAL_WORLD && (
          <section className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
            <div className="bg-amber-600 text-white p-10 rounded-[40px] shadow-2xl">
               <h4 className="font-black uppercase tracking-[0.3em] text-[9px] mb-4 text-amber-200 flex items-center gap-2">
                 <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
                 The Engineering Reality
               </h4>
               <p className="text-2xl font-black leading-tight italic">"{lessonData.levels[studentLevel].transfer_real_world}"</p>
            </div>
          </section>
        )}

        {currentStep === Step.CHALLENGE && (
          <section className="space-y-8 animate-in slide-in-from-right-8 duration-700">
            <h2 className="text-2xl font-black text-slate-800 uppercase tracking-tighter">Conceptual Challenge</h2>
            {lessonData.levels[studentLevel].challenges.map((c: any, i: number) => (
              <QuestionBlock 
                key={i} 
                id={`challenge_${i}`} 
                topic={c.level} 
                question={c.question} 
                onSuccess={(isCorrect, attempts) => {
                  updateLevel(isCorrect, attempts);
                  handleNext();
                }} 
              />
            ))}
          </section>
        )}

        {currentStep === Step.COMPLETION && (
          <section className="text-center py-20 space-y-8 animate-in slide-in-from-bottom-10 duration-1000">
            <div className="w-32 h-32 bg-green-100 text-green-600 rounded-[32px] mx-auto flex items-center justify-center shadow-2xl">
               <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <h2 className="text-6xl font-black tracking-tighter">Topic Mastered</h2>
            <p className="text-xl text-slate-500 font-bold max-w-sm mx-auto italic">Validation successful. Move to the next section to continue building your fluid mechanical intuition.</p>
          </section>
        )}
      </main>

      <Navigation 
        currentStep={currentStep} 
        onNext={handleNext} 
        onBack={handleBack} 
        isNextLocked={false} 
      />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

export default App;
