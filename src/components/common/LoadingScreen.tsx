import React, { useEffect, useState } from 'react';
import { Shield } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFading(true);
      const exitTimer = setTimeout(() => {
        onComplete();
      }, 400);
      return () => clearTimeout(exitTimer);
    }, 700);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-cyber-bg transition-opacity duration-400 ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-hidden="true"
    >
      <div className="relative flex items-center justify-center">
        {/* Glowing pulse rings */}
        <div className="absolute w-24 h-24 rounded-full bg-cyber-cyan/20 blur-xl animate-pulse" />
        <div className="w-16 h-16 rounded-2xl bg-cyber-surface border border-cyber-cyan/40 flex items-center justify-center shadow-[0_0_25px_rgba(6,182,212,0.3)]">
          <Shield className="w-8 h-8 text-cyber-cyan animate-pulse" />
        </div>
      </div>

      <div className="mt-6 text-center">
        <h2 className="text-lg font-bold tracking-wider text-slate-100 font-mono">HEET SHAH</h2>
        <p className="text-xs text-cyber-cyan mt-1 font-mono tracking-widest">INITIALIZING INTERFACE...</p>
      </div>

      <div className="w-40 h-[2px] bg-slate-800 rounded-full mt-4 overflow-hidden">
        <div className="h-full bg-gradient-to-r from-cyber-cyan to-blue-500 animate-pulse w-full" />
      </div>
    </div>
  );
};
