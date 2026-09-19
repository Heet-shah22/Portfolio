import React from 'react';
import { BookOpen, CheckCircle2 } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { timelineData } from '../data/timeline';

export const Journey: React.FC = () => {
  return (
    <div className="min-h-screen pt-28 pb-24">
      <SEO
        title="Engineering Journey & Milestone Timeline | Heet Shah"
        description="Chronological journey of Heet Shah: B.Tech CSE at MIT World Peace University, programming mastery, cybersecurity specialization, AI/ML exploration, hackathons, and certifications."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-cyber-card border border-cyber-border text-cyber-cyan mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            MILESTONES &amp; PROGRESSION
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
            Academic &amp; Technical Journey
          </h1>
          <p className="text-sm sm:text-base text-slate-400 mt-4 leading-relaxed">
            The chronological progression of academic foundations, specialized learning in Cyber Security and Forensics, hackathon victories, software implementations, and future career objectives.
          </p>
        </div>

        {/* Timeline Path */}
        <div className="relative border-l-2 border-cyber-border ml-4 md:ml-36 space-y-12 pl-6 md:pl-12">
          {timelineData.map((milestone) => (
            <div key={milestone.id} className="relative group">
              {/* Node Dot */}
              <div
                className={`absolute -left-[31px] md:-left-[55px] top-1.5 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                  milestone.current
                    ? 'bg-emerald-500/20 border-cyber-emerald shadow-[0_0_12px_rgba(16,185,129,0.8)]'
                    : 'bg-cyber-card border-cyber-cyan group-hover:shadow-[0_0_12px_rgba(6,182,212,0.6)]'
                }`}
              >
                <div
                  className={`w-2 h-2 rounded-full ${
                    milestone.current ? 'bg-cyber-emerald' : 'bg-cyber-cyan'
                  }`}
                />
              </div>

              {/* Year indicator left of line (desktop) */}
              <div className="hidden md:block absolute -left-44 top-1.5 text-right w-28">
                <span className="text-xs font-mono font-bold text-cyber-cyan">
                  {milestone.year}
                </span>
                <span className="block text-[10px] font-mono text-slate-500 uppercase">
                  {milestone.category}
                </span>
              </div>

              {/* Milestone Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-cyber-card border border-cyber-border group-hover:border-cyber-cyan/40 transition-all duration-300 shadow-lg">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-cyber-cyan">
                      {milestone.stage}
                    </span>
                    <span className="text-slate-600 md:hidden">•</span>
                    <span className="text-xs font-mono text-slate-400 md:hidden">
                      {milestone.year}
                    </span>
                  </div>

                  {milestone.current && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono bg-emerald-500/15 text-cyber-emerald border border-emerald-500/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyber-emerald animate-pulse" />
                      Active Academic Phase
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-slate-100 mt-1">
                  {milestone.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
                  {milestone.description}
                </p>

                {/* Key Takeaways / Points */}
                <div className="mt-5 pt-4 border-t border-cyber-border/60">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                    Key Highlights &amp; Takeaways
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {milestone.details.map((detail, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 p-2 rounded-lg bg-cyber-surface border border-cyber-border/80 text-xs text-slate-300 font-mono"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyber-cyan flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
