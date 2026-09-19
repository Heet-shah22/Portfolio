import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative rounded-2xl bg-cyber-card border border-cyber-border hover:border-cyber-cyan/50 transition-all duration-300 flex flex-col overflow-hidden shadow-lg hover:shadow-[0_8px_30px_rgba(6,182,212,0.12)]">
      {/* Visual / Image Banner */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-950 border-b border-cyber-border/80">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/assets/project-ecorevive.svg';
          }}
        />

        {/* Category Pill Tag */}
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyber-bg/85 backdrop-blur-md border border-cyber-border text-cyber-cyan">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-slate-100 group-hover:text-cyber-cyan transition-colors line-clamp-1">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-2 line-clamp-3 leading-relaxed">
            {project.summary}
          </p>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-1.5 mt-4">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-cyber-surface border border-cyber-border text-slate-300"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-cyber-surface text-slate-400">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>
        </div>

        {/* Card Footer Actions */}
        <div className="pt-6 mt-6 border-t border-cyber-border/80 flex items-center justify-between">
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyber-cyan hover:text-cyber-cyanLight transition-colors"
          >
            <span>View Architecture &amp; Case Study</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`GitHub repository for ${project.title}`}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Live demo for ${project.title}`}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
