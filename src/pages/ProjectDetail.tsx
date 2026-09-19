import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowLeft, Github, ExternalLink, ShieldAlert, CheckCircle2, 
  Lightbulb, AlertTriangle, Sparkles, Layers, ArrowRight 
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { ArchitectureDiagram } from '../components/projects/ArchitectureDiagram';
import { projectsData } from '../data/projects';

export const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const relatedProjects = projectsData.filter((p) => p.id !== project.id);

  return (
    <div className="min-h-screen pt-28 pb-24">
      <SEO
        title={`${project.title} | Case Study & Architecture`}
        description={project.summary}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back navigation */}
        <div className="mb-8">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyber-cyan transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to all projects</span>
          </Link>
        </div>

        {/* Project Hero Header */}
        <div className="max-w-4xl mb-12">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyber-card border border-cyber-cyan/30 text-cyber-cyan">
              {project.category}
            </span>
            {project.categories
              .filter((c) => c !== project.category && c !== 'All')
              .map((c) => (
                <span
                  key={c}
                  className="px-3 py-1 rounded-full text-xs font-mono bg-cyber-surface border border-cyber-border text-slate-400"
                >
                  {c}
                </span>
              ))}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
            {project.summary}
          </p>

          {/* External Links */}
          <div className="flex flex-wrap items-center gap-3 mt-6">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-cyber-card hover:bg-slate-800 text-slate-200 border border-cyber-border hover:border-cyber-cyan/40 transition-colors"
              >
                <Github className="w-4 h-4 text-cyber-cyan" />
                <span>View on GitHub</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              </a>
            )}

            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-cyber-cyan hover:bg-cyber-cyanLight text-slate-950 transition-colors shadow-[0_0_15px_rgba(6,182,212,0.3)]"
              >
                <span>Live Interactive Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 px-3 py-2 rounded-xl text-[11px] font-mono bg-cyber-surface border border-cyber-border text-slate-400">
                <span>[Academic / Local Architecture Prototype]</span>
              </span>
            )}
          </div>
        </div>

        {/* Academic Disclaimer Callout (if applicable) */}
        {project.academicDisclaimer && (
          <div className="p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs sm:text-sm flex items-start gap-3.5 mb-12">
            <ShieldAlert className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block mb-1">Academic &amp; Research Boundary</span>
              <p className="text-amber-300/90 leading-relaxed">
                {project.academicDisclaimer}
              </p>
            </div>
          </div>
        )}

        {/* Project Visual Display */}
        <div className="mb-14 rounded-2xl overflow-hidden border border-cyber-border/80 bg-slate-950 shadow-2xl">
          <img
            src={project.image}
            alt={`${project.title} technical illustration`}
            className="w-full h-auto max-h-[500px] object-contain mx-auto"
          />
        </div>

        {/* Interactive Architecture & Workflow Diagram */}
        <div className="mb-16">
          <ArchitectureDiagram
            stages={project.architectureStages}
            projectTitle={project.title}
          />
        </div>

        {/* Problem vs Solution Narrative Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="p-6 sm:p-8 rounded-2xl bg-cyber-card border border-cyber-border">
            <span className="text-xs font-mono uppercase tracking-wider text-red-400 block mb-2">
              Problem Statement
            </span>
            <h3 className="text-xl font-bold text-slate-100 mb-3">
              The Engineering Challenge
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-cyber-card border border-cyber-border">
            <span className="text-xs font-mono uppercase tracking-wider text-cyber-cyan block mb-2">
              Architectural Solution
            </span>
            <h3 className="text-xl font-bold text-slate-100 mb-3">
              Implemented Technical Approach
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Technology Stack Grid */}
        <div className="p-6 sm:p-8 rounded-2xl bg-cyber-card border border-cyber-border mb-16">
          <h3 className="text-lg font-bold text-slate-100 mb-4 flex items-center gap-2">
            <Layers className="w-5 h-5 text-cyber-cyan" />
            Technology Stack &amp; Dependencies
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 rounded-xl text-xs font-mono bg-cyber-surface border border-cyber-border text-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Features & Implementation Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {/* Core Features */}
          <div className="p-6 sm:p-8 rounded-2xl bg-cyber-card border border-cyber-border">
            <h3 className="text-lg font-bold text-slate-100 mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyber-cyan" />
              Core System Features
            </h3>
            <ul className="space-y-3">
              {project.coreFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyber-emerald flex-shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Implementation */}
          <div className="p-6 sm:p-8 rounded-2xl bg-cyber-card border border-cyber-border">
            <h3 className="text-lg font-bold text-slate-100 mb-6 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-blue-400" />
              Technical Implementation Specifics
            </h3>
            <ul className="space-y-3">
              {project.technicalImplementation.map((impl, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0 mt-2" />
                  <span>{impl}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Challenges & Learnings Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {/* Challenges */}
          <div className="p-6 rounded-2xl bg-cyber-card border border-cyber-border">
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              <h4 className="font-bold text-sm text-slate-100">Engineering Challenges</h4>
            </div>
            <ul className="space-y-2.5 text-xs text-slate-300">
              {project.challenges.map((c, idx) => (
                <li key={idx} className="pl-3 border-l-2 border-amber-500/40 leading-relaxed">
                  {c}
                </li>
              ))}
            </ul>
          </div>

          {/* Learnings */}
          <div className="p-6 rounded-2xl bg-cyber-card border border-cyber-border">
            <div className="flex items-center gap-2 mb-3">
              <Lightbulb className="w-4 h-4 text-cyber-cyan" />
              <h4 className="font-bold text-sm text-slate-100">Key Learnings</h4>
            </div>
            <ul className="space-y-2.5 text-xs text-slate-300">
              {project.learnings.map((l, idx) => (
                <li key={idx} className="pl-3 border-l-2 border-cyan-500/40 leading-relaxed">
                  {l}
                </li>
              ))}
            </ul>
          </div>

          {/* Future Improvements */}
          <div className="p-6 rounded-2xl bg-cyber-card border border-cyber-border">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <h4 className="font-bold text-sm text-slate-100">Future Iterations</h4>
            </div>
            <ul className="space-y-2.5 text-xs text-slate-300">
              {project.futureImprovements.map((f, idx) => (
                <li key={idx} className="pl-3 border-l-2 border-purple-500/40 leading-relaxed">
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Related Projects Strip */}
        <div className="pt-12 border-t border-cyber-border/80">
          <h3 className="text-lg font-bold text-slate-100 mb-6">
            Other Projects
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedProjects.map((rel) => (
              <Link
                key={rel.id}
                to={`/projects/${rel.slug}`}
                className="group p-5 rounded-xl bg-cyber-card border border-cyber-border hover:border-cyber-cyan/40 transition-all flex items-center justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono text-cyber-cyan uppercase">
                    {rel.category}
                  </span>
                  <h4 className="text-sm font-bold text-slate-100 group-hover:text-cyber-cyan transition-colors mt-0.5">
                    {rel.title}
                  </h4>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyber-cyan group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
