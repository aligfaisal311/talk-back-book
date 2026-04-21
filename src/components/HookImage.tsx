
import React, { useState, useEffect } from 'react';
import { generateSceneImage } from '../features/ai/tutorService';

interface HookImageProps {
  description: string;
}

const HookImage: React.FC<HookImageProps> = ({ description }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImage = async () => {
      setLoading(true);
      const url = await generateSceneImage(description);
      setImageUrl(url);
      setLoading(false);
    };
    fetchImage();
  }, [description]);

  if (loading) {
    return (
      <div className="w-full aspect-video bg-slate-100 rounded-3xl flex items-center justify-center animate-pulse border-4 border-white shadow-inner">
        <div className="text-slate-400 flex flex-col items-center gap-3">
          <svg className="animate-spin h-10 w-10 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Generating AI Context...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full aspect-video bg-white rounded-[40px] overflow-hidden shadow-2xl border-8 border-white group relative">
      {imageUrl ? (
        <img src={imageUrl} alt="Context Scene" className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000" />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-blue-50 text-blue-800 p-12 text-center font-bold text-lg">
          [Visualizing: {description}]
        </div>
      )}
      <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[40px]"></div>
    </div>
  );
};

export default HookImage;
