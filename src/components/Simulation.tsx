
import React, { useState, useEffect, useRef } from 'react';

interface SimulationProps {
  type?: 'shear_flow' | 'jar_shake';
}

const Simulation: React.FC<SimulationProps> = ({ type = 'shear_flow' }) => {
  const [viscosity, setViscosity] = useState(0.5);
  const [isShaking, setIsShaking] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shakeOffset = useRef(0);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const particles: { x: number; y: number; vx: number; vy: number }[] = [];
    
    // Init particles
    for (let i = 0; i < 200; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: 0,
        vy: 0
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (type === 'jar_shake') {
        const hWidth = canvas.width / 2;
        const hHeight = canvas.height;
        
        // Shake logic
        if (isShaking) {
          shakeOffset.current = Math.sin(Date.now() * 0.02) * 15;
        } else {
          shakeOffset.current *= 0.9;
        }

        // Draw Jars
        const drawJar = (x: number, title: string, fluidColor: string, currentVisc: number) => {
          ctx.save();
          ctx.translate(x + shakeOffset.current, 50);
          
          // Jar outline
          ctx.strokeStyle = '#94a3b8';
          ctx.lineWidth = 4;
          ctx.strokeRect(0, 0, 120, 180);
          
          // Fluid
          ctx.fillStyle = fluidColor;
          const fluidLevel = 140;
          // Fluid sloshing simulation
          const slosh = isShaking ? Math.sin(Date.now() * 0.015) * (20 / (currentVisc * 5 + 1)) : 0;
          
          ctx.beginPath();
          ctx.moveTo(0, 180);
          ctx.lineTo(120, 180);
          ctx.lineTo(120, 180 - fluidLevel + slosh);
          ctx.lineTo(0, 180 - fluidLevel - slosh);
          ctx.closePath();
          ctx.fill();

          ctx.fillStyle = '#1e293b';
          ctx.font = 'bold 12px sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText(title, 60, -15);
          ctx.restore();
        };

        drawJar(hWidth - 160, "Water (Low μ)", "rgba(59, 130, 246, 0.4)", 0.1);
        drawJar(hWidth + 40, "Honey (High μ)", "rgba(245, 158, 11, 0.7)", 1.0);

      } else {
        // Default Shear Flow
        ctx.fillStyle = '#1e293b';
        ctx.fillRect(0, canvas.height - 10, canvas.width, 10);
        ctx.fillStyle = '#3b82f6';
        ctx.fillRect(0, 0, canvas.width, 5);

        ctx.fillStyle = '#64748b';
        particles.forEach(p => {
          const flowSpeed = 50 * (1 - p.y / canvas.height);
          const effectiveSpeed = flowSpeed / (viscosity * 5 + 1);
          p.x += effectiveSpeed * 0.5;
          if (p.x > canvas.width) p.x = 0;
          ctx.beginPath();
          ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
          ctx.fill();
        });
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animationFrameId);
  }, [viscosity, type, isShaking]);

  return (
    <div className="bg-white p-8 rounded-[40px] border border-slate-200 shadow-2xl">
      <div className="mb-6 flex justify-between items-end">
        <div>
          <h3 className="text-xl font-black text-slate-800 uppercase tracking-tight">
            {type === 'jar_shake' ? 'Virtual Lab: The Shake Test' : 'Shear Flow Visualization'}
          </h3>
          <p className="text-sm text-slate-500 font-medium">Observe how viscosity damps internal motion.</p>
        </div>
        {type === 'jar_shake' && (
          <button 
            onMouseDown={() => setIsShaking(true)}
            onMouseUp={() => setIsShaking(false)}
            onMouseLeave={() => setIsShaking(false)}
            className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 transition-colors shadow-xl"
          >
            {isShaking ? 'Shaking...' : 'Hold to Shake'}
          </button>
        )}
      </div>

      <div className="relative">
        <canvas 
          ref={canvasRef} 
          width={700} 
          height={300} 
          className="w-full h-auto bg-slate-50 rounded-[32px] border border-slate-100 shadow-inner"
        />
      </div>

      {type === 'shear_flow' && (
        <div className="mt-8 p-6 bg-blue-50 rounded-3xl border border-blue-100 flex items-center gap-6">
          <div className="flex-grow">
            <label className="block text-xs font-black text-blue-800 uppercase tracking-widest mb-3">
              Viscosity (&mu;): {viscosity.toFixed(2)}
            </label>
            <input 
              type="range" 
              min="0.1" max="2.0" step="0.05"
              value={viscosity}
              onChange={(e) => setViscosity(parseFloat(e.target.value))}
              className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Simulation;
