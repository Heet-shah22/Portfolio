import React from 'react';
import { Terminal, Check, BookOpen, Sparkles } from 'lucide-react';
import { SkillItem } from '../../types';

interface SkillCardProps {
  skill: SkillItem;
}

const getLevelBadge = (level: SkillItem['level']) => {
  switch (level) {
    case 'Working Knowledge':
      return {
        label: 'Working Knowledge',
        badgeClass: 'bg-cyan-500/10 text-cyber-cyan border-cyan-500/30',
        icon: <Check className="w-3 h-3 text-cyber-cyan" />
      };
    case 'Familiar':
      return {
        label: 'Familiar',
        badgeClass: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
        icon: <BookOpen className="w-3 h-3 text-blue-400" />
      };
    case 'Learning':
      return {
        label: 'Active Learning',
        badgeClass: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
        icon: <Sparkles className="w-3 h-3 text-emerald-400" />
      };
  }
};

export const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  const badgeInfo = getLevelBadge(skill.level);

  return (
    <div className="group p-4 rounded-xl bg-cyber-card border border-cyber-border hover:border-cyber-cyan/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-950/20 flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between gap-2 mb-2">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-cyber-surface text-slate-300 group-hover:text-cyber-cyan border border-cyber-border transition-colors">
              <Terminal className="w-4 h-4" />
            </div>
            <h4 className="font-semibold text-sm text-slate-100 group-hover:text-white transition-colors">
              {skill.name}
            </h4>
          </div>

          <span
            className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono border ${badgeInfo.badgeClass}`}
          >
            {badgeInfo.icon}
            {badgeInfo.label}
          </span>
        </div>

        <p className="text-xs text-slate-400 leading-relaxed mt-2">
          {skill.description}
        </p>
      </div>

      <div className="mt-3 pt-3 border-t border-cyber-border/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
        <span>{skill.category}</span>
        <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-cyber-cyan transition-colors" />
      </div>
    </div>
  );
};
