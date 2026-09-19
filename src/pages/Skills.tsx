import React, { useState, useMemo } from 'react';
import { Terminal, Filter, Search } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { SkillCard } from '../components/skills/SkillCard';
import { skillsData, skillCategories } from '../data/skills';
import { SkillCategoryName } from '../types';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategoryName | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSkills = useMemo(() => {
    return skillsData.filter((skill) => {
      const matchesCategory =
        selectedCategory === 'All' || skill.category === selectedCategory;
      const matchesSearch =
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen pt-28 pb-20">
      <SEO
        title="Technical Skills & Competencies | Heet Shah"
        description="Comprehensive inventory of technical competencies: Programming languages, web frameworks, database systems, data science libraries, and cybersecurity concepts."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-cyber-card border border-cyber-border text-cyber-cyan mb-4">
            <Terminal className="w-3.5 h-3.5" />
            PRACTICAL COMPETENCY MATRIX
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
            Technical Skills
          </h1>
          <p className="text-sm sm:text-base text-slate-400 mt-4 leading-relaxed">
            Technologies, frameworks, databases, and analytical tools actively utilized across coursework, hackathons, and software projects. Displayed with honest, neutral proficiency labels.
          </p>
        </div>

        {/* Filters & Search Toolbar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-cyber-border/80">
          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g. Python, React, Spark)..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-cyber-card border border-cyber-border text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyber-cyan focus:ring-1 focus:ring-cyber-cyan"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pb-1">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                selectedCategory === 'All'
                  ? 'bg-cyber-cyan text-slate-950 font-bold'
                  : 'bg-cyber-card border border-cyber-border text-slate-300 hover:border-slate-600'
              }`}
            >
              All ({skillsData.length})
            </button>

            {skillCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-cyber-cyan text-slate-950 font-bold'
                    : 'bg-cyber-card border border-cyber-border text-slate-300 hover:border-slate-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        {filteredSkills.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredSkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        ) : (
          <div className="p-12 text-center rounded-2xl bg-cyber-card border border-cyber-border my-12">
            <Filter className="w-8 h-8 text-slate-600 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-200">No matching skills found</h3>
            <p className="text-xs text-slate-400 mt-1">
              Try adjusting your search query or reset the category filter.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 rounded-xl text-xs font-mono bg-cyber-cyan/15 text-cyber-cyan border border-cyber-cyan/30 hover:bg-cyber-cyan/25 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
