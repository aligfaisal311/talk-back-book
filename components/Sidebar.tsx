
import React, { useState } from 'react';
import { CURRICULUM } from '../curriculum';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (lessonPath: string) => void;
  activePath: string;
  completedPaths: string[];
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, onNavigate, activePath, completedPaths }) => {
  const [expandedChapters, setExpandedChapters] = useState<Record<string, boolean>>({ "01_properties_of_fluids": true });
  const [expandedSubchapters, setExpandedSubchapters] = useState<Record<string, boolean>>({});

  const toggleChapter = (id: string) => {
    setExpandedChapters(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleSubchapter = (id: string) => {
    setExpandedSubchapters(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <>
      <div 
        className={`fixed inset-0 bg-slate-900/60 backdrop-blur-md z-[60] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      <div className={`fixed top-0 left-0 h-full w-80 bg-white shadow-2xl z-[70] transform transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-slate-50">
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 block mb-1">Editor View</span>
            <h2 className="text-2xl font-black text-slate-900 tracking-tighter">DIRECTORY:</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white hover:shadow-md rounded-xl transition-all active:scale-90">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>

        <div className="overflow-y-auto h-[calc(100%-100px)] p-4 space-y-4">
          <div className="bg-amber-50 p-4 rounded-xl border border-amber-100 mb-2">
            <p className="text-[10px] font-black uppercase text-amber-700 leading-tight">Dev Override</p>
            <p className="text-[11px] text-amber-600 font-bold leading-tight mt-1 italic">All lessons unlocked for verification.</p>
          </div>

          {CURRICULUM.chapters.map(chapter => (
            <div key={chapter.id} className="bg-slate-50/50 rounded-2xl border border-slate-100 overflow-hidden transition-all">
              <button 
                onClick={() => toggleChapter(chapter.id)}
                className={`w-full flex items-center justify-between p-4 transition-colors text-left group ${expandedChapters[chapter.id] ? 'bg-slate-900 text-white' : 'hover:bg-slate-100'}`}
              >
                <span className="font-black text-sm uppercase tracking-tight">{chapter.title}</span>
                <svg 
                  className={`transition-transform duration-300 ${expandedChapters[chapter.id] ? 'rotate-180 text-blue-400' : 'text-slate-400'}`}
                  xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
              </button>

              {expandedChapters[chapter.id] && (
                <div className="p-2 space-y-1 animate-in slide-in-from-top-2 duration-300">
                  {chapter.subchapters.map(sub => (
                    <div key={sub.id} className="rounded-xl overflow-hidden">
                      <button 
                        onClick={() => toggleSubchapter(sub.id)}
                        className={`w-full flex items-center justify-between p-3 transition-colors text-left ${expandedSubchapters[sub.id] ? 'bg-blue-50 text-blue-700' : 'hover:bg-blue-50/30'}`}
                      >
                        <span className="text-xs font-bold uppercase tracking-wide">{sub.title}</span>
                        <svg 
                          className={`transition-transform duration-200 ${expandedSubchapters[sub.id] ? 'rotate-90' : ''}`}
                          xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                      </button>

                      {expandedSubchapters[sub.id] && (
                        <div className="ml-2 pl-2 border-l-2 border-blue-100 my-1 space-y-3 py-2">
                          {sub.topics.map(topic => (
                            <div key={topic.id} className="space-y-1">
                              <div className="flex items-center gap-2 px-2 mb-1">
                                <div className="w-1 h-1 rounded-full bg-slate-300" />
                                <span className="text-[10px] font-black uppercase text-slate-400 tracking-tighter">{topic.title}</span>
                              </div>
                              <div className="space-y-1">
                                {topic.microLessons.map((micro) => {
                                  // DEV OVERRIDE: locked is always false
                                  const completed = completedPaths.includes(micro.path);
                                  
                                  return (
                                    <button
                                      key={micro.path}
                                      onClick={() => {
                                        onNavigate(micro.path);
                                        onClose();
                                      }}
                                      className={`w-full flex items-center gap-3 p-2.5 rounded-lg transition-all text-left group relative ${
                                        activePath === micro.path 
                                          ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 scale-[1.02]' 
                                          : 'hover:bg-white hover:shadow-sm text-slate-600'
                                      }`}
                                    >
                                      {completed ? (
                                        <svg className="shrink-0 text-green-500" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                      ) : (
                                        <div className={`w-1.5 h-1.5 shrink-0 rounded-full ${activePath === micro.path ? 'bg-white' : 'bg-blue-400'}`} />
                                      )}
                                      <span className="text-[11px] font-bold leading-tight">{micro.title}</span>
                                    </button>
                                  );
                                })}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
