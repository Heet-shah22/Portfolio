import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, ChevronRight, Activity, Cpu, Database, Layout, Server, Sparkles, LineChart } from 'lucide-react';
import { ArchitectureStage } from '../../types';

interface ArchitectureDiagramProps {
  stages: ArchitectureStage[];
  projectTitle: string;
}

const getCategoryIcon = (category: ArchitectureStage['category']) => {
  switch (category) {
    case 'frontend':
      return <Layout className="w-4 h-4" />;
    case 'api':
    case 'backend':
      return <Server className="w-4 h-4" />;
    case 'database':
      return <Database className="w-4 h-4" />;
    case 'model':
      return <Cpu className="w-4 h-4" />;
    case 'analytics':
      return <Activity className="w-4 h-4" />;
    case 'visualization':
      return <LineChart className="w-4 h-4" />;
    default:
      return <Sparkles className="w-4 h-4" />;
  }
};

export const ArchitectureDiagram: React.FC<ArchitectureDiagramProps> = ({ stages, projectTitle }) => {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-play pulse through stages
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setActiveStageIndex((prev) => (prev + 1) % stages.length);
    }, 2800);

    return () => clearInterval(interval);
  }, [isPlaying, stages.length]);

  const activeStage = stages[activeStageIndex];

  return (
    <div className="w-full bg-cyber-card border border-cyber-border rounded-2xl p-6 md:p-8 shadow-xl overflow-hidden">
      {/* Diagram Controls & Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-cyber-border">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyber-cyan animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-cyber-cyan">
              Interactive System Architecture
            </span>
          </div>
          <h3 className="text-lg font-bold text-slate-100 mt-1">
            {projectTitle} Pipeline Flow
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? 'Pause flow animation' : 'Play flow animation'}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-cyber-surface border border-cyber-border hover:border-cyber-cyan text-slate-200 transition-colors"
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5 text-cyber-cyan" /> Pause
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 text-cyber-emerald" /> Play
              </>
            )}
          </button>

          <button
            onClick={() => {
              setActiveStageIndex(0);
              setIsPlaying(false);
            }}
            aria-label="Reset flow animation to step 1"
            className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-cyber-surface border border-cyber-border transition-colors"
            title="Reset to stage 1"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Horizontal Pipeline Steps Strip (Scrollable on small devices) */}
      <div className="py-8 overflow-x-auto">
        <div className="flex items-center min-w-max px-2 py-4">
          {stages.map((stage, idx) => {
            const isActive = idx === activeStageIndex;
            const isCompleted = idx < activeStageIndex;

            return (
              <React.Fragment key={stage.step}>
                {/* Node Pill */}
                <button
                  onClick={() => {
                    setActiveStageIndex(idx);
                    setIsPlaying(false);
                  }}
                  className={`group relative flex flex-col items-center text-left p-3 rounded-xl border transition-all duration-300 ${
                    isActive
                      ? 'bg-cyber-surface border-cyber-cyan shadow-[0_0_20px_rgba(6,182,212,0.3)] scale-105 z-10'
                      : isCompleted
                      ? 'bg-cyber-surface/40 border-cyber-emerald/40 text-slate-300'
                      : 'bg-cyber-surface/20 border-cyber-border text-slate-400 hover:border-slate-600'
                  }`}
                  style={{ width: '135px' }}
                >
                  {/* Step counter */}
                  <div className="flex items-center justify-between w-full mb-1.5">
                    <span className="text-[10px] font-mono text-slate-400">
                      #{stage.step < 10 ? `0${stage.step}` : stage.step}
                    </span>
                    <span
                      className={`p-1 rounded-md ${
                        isActive
                          ? 'text-cyber-cyan bg-cyber-cyan/15'
                          : 'text-slate-400 bg-slate-800/60'
                      }`}
                    >
                      {getCategoryIcon(stage.category)}
                    </span>
                  </div>

                  <span className="text-xs font-semibold text-slate-100 truncate w-full group-hover:text-cyber-cyan">
                    {stage.name}
                  </span>
                  <span className="text-[10px] text-slate-400 truncate w-full mt-0.5">
                    {stage.description}
                  </span>
                </button>

                {/* Connection Arrow with Animated Packet Pulse */}
                {idx < stages.length - 1 && (
                  <div className="relative w-8 sm:w-10 flex items-center justify-center">
                    <div className="w-full h-[2px] bg-cyber-border relative overflow-hidden">
                      {isActive && (
                        <div className="absolute inset-0 bg-gradient-to-r from-cyber-cyan to-transparent animate-pulse" />
                      )}
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 -ml-1 transition-colors ${
                        isActive ? 'text-cyber-cyan' : 'text-slate-600'
                      }`}
                    />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Stage Detail Card Callout */}
      {activeStage && (
        <div className="mt-4 p-5 rounded-xl bg-cyber-surface/90 border border-cyber-cyan/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-cyber-cyan/15 text-cyber-cyan border border-cyber-cyan/30 mt-0.5">
              {getCategoryIcon(activeStage.category)}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase text-cyber-cyan">
                  Stage {activeStage.step} of {stages.length} • {activeStage.category.toUpperCase()}
                </span>
              </div>
              <h4 className="text-base font-bold text-slate-100 mt-0.5">
                {activeStage.name} — {activeStage.description}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
                {activeStage.detail}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-end md:self-center">
            <button
              onClick={() => {
                setActiveStageIndex((prev) => (prev > 0 ? prev - 1 : stages.length - 1));
                setIsPlaying(false);
              }}
              className="px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
            >
              Prev
            </button>
            <button
              onClick={() => {
                setActiveStageIndex((prev) => (prev + 1) % stages.length);
                setIsPlaying(false);
              }}
              className="px-3 py-1.5 rounded-lg text-xs font-mono bg-cyber-cyan/20 hover:bg-cyber-cyan/30 text-cyber-cyan border border-cyber-cyan/30 transition-colors"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
