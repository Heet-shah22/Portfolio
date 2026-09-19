import React, { useState, useMemo } from 'react';
import { Code2, Filter } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { ProjectCard } from '../components/projects/ProjectCard';
import { projectsData } from '../data/projects';
import { ProjectCategory } from '../types';

const filterCategories: ProjectCategory[] = ['All', 'Full Stack', 'AI/ML', 'NLP', 'Data Analysis'];

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<ProjectCategory>('All');

  const filteredProjects = useMemo(() => {
    if (selectedFilter === 'All') return projectsData;
    return projectsData.filter((p) => p.categories.includes(selectedFilter));
  }, [selectedFilter]);

  return (
    <div className="min-h-screen pt-28 pb-20">
      <SEO
        title="Software Projects & Case Studies | Heet Shah"
        description="Explore engineering projects by Heet Shah: EcoRevive sustainable thrift e-commerce platform, Apache Spark stock market analysis, and LSTM deep learning text predictor."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-cyber-card border border-cyber-border text-cyber-cyan mb-4">
            <Code2 className="w-3.5 h-3.5" />
            ENGINEERING WORK &amp; SYSTEM ARCHITECTURE
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
            Projects Showcase
          </h1>
          <p className="text-sm sm:text-base text-slate-400 mt-4 leading-relaxed">
            Real software architectures built across full-stack web platforms, distributed data processing, and sequence deep learning models. Each project includes an interactive pipeline diagram.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-cyber-border/80">
          <Filter className="w-4 h-4 text-slate-500 mr-2 flex-shrink-0" />
          {filterCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedFilter(category)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 whitespace-nowrap ${
                selectedFilter === category
                  ? 'bg-cyber-cyan text-slate-950 font-bold shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                  : 'bg-cyber-card border border-cyber-border text-slate-300 hover:border-slate-600 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};
