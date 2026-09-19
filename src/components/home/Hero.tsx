import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowRight, Github, Linkedin, FileText, ChevronDown } from 'lucide-react';
import { profileData } from '../../data/profile';
import { NetworkCanvas } from './NetworkCanvas';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Interactive Topology Visual */}
      <NetworkCanvas />

      {/* Radial Gradient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyber-cyan/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left Column (Intro & CTAs) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Cybersecurity Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cyber-surface/90 border border-cyber-border text-xs font-mono mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-cyber-emerald animate-pulse" />
              <span className="text-slate-300">B.Tech CSE • 5th Semester</span>
              <span className="text-slate-500">•</span>
              <span className="text-cyber-cyan font-medium">MIT-WPU Pune</span>
            </div>

            {/* Name & Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Hello, I'm <br className="hidden sm:inline" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyber-cyan via-sky-300 to-blue-400">
                {profileData.name}
              </span>
            </h1>

            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-200 mt-4 tracking-wide font-mono">
              {profileData.heroTitle}
            </h2>

            {/* Factually Accurate Narrative Positioning */}
            <p className="text-sm sm:text-base text-slate-400 mt-4 max-w-2xl leading-relaxed">
              {profileData.tagline}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 mt-8 w-full sm:w-auto">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-cyber-cyan hover:bg-cyber-cyanLight text-slate-950 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.4)]"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-cyber-surface hover:bg-cyber-card text-slate-200 border border-cyber-border hover:border-cyber-cyan/40 transition-all duration-300"
              >
                <span>Contact Me</span>
              </Link>

              <a
                href={profileData.resumeUrl}
                download="Heet_Shah_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-xs font-mono bg-cyber-surface/60 hover:bg-cyber-card text-slate-300 border border-cyber-border hover:text-white transition-colors"
                title="Download verified resume PDF"
              >
                <FileText className="w-4 h-4 text-cyber-cyan" />
                <span>Resume PDF</span>
              </a>
            </div>

            {/* Social Channels */}
            <div className="flex items-center gap-4 mt-8 pt-6 border-t border-cyber-border/80 w-full">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Verified Profiles:
              </span>

              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-cyber-cyan transition-colors"
              >
                <Github className="w-4 h-4 text-cyber-cyan" />
                <span>GitHub</span>
              </a>

              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-cyber-cyan transition-colors"
              >
                <Linkedin className="w-4 h-4 text-cyber-cyan" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Hero Right Column (Profile Avatar Card with Cyber Shield Ring) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group w-72 sm:w-80 md:w-96 aspect-square">
              {/* Outer Cyber Glow Border Ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-cyber-cyan/30 via-blue-500/20 to-emerald-500/30 blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Central Frame */}
              <div className="relative w-full h-full rounded-3xl bg-cyber-surface border border-cyber-border p-4 flex flex-col items-center justify-center shadow-2xl overflow-hidden">
                {/* Tech grid background */}
                <div className="absolute inset-0 cyber-grid-pattern opacity-40 pointer-events-none" />

                {/* Profile Image / Fallback Avatar */}
                <div className="relative w-48 sm:w-56 aspect-square rounded-2xl overflow-hidden border border-cyber-cyan/30 shadow-[0_0_20px_rgba(6,182,212,0.15)] bg-slate-950 flex items-center justify-center">
                  <img
                    src={profileData.profilePhoto}
                    alt={profileData.name}
                    className="w-full h-full object-cover object-[center_22%]"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/assets/profile-photo.svg';
                    }}
                  />
                </div>

                {/* Quick Credentials Strip */}
                <div className="mt-4 text-center z-10">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono bg-cyber-card border border-cyber-border text-slate-300">
                    <Shield className="w-3.5 h-3.5 text-cyber-cyan" />
                    Specialization: Cyber Security &amp; Forensics
                  </div>
                  <p className="text-xs text-slate-400 font-mono mt-1.5">
                    CGPA: <span className="text-cyber-cyan font-bold">{profileData.cgpa}</span> • 12th: <span className="text-slate-200">{profileData.twelfthPercentage}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center text-slate-500 hover:text-slate-300 transition-colors pointer-events-auto cursor-pointer" onClick={() => window.scrollTo({ top: window.innerHeight * 0.85, behavior: 'smooth' })}>
        <span className="text-[10px] font-mono uppercase tracking-widest mb-1">Scroll to explore</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-cyber-cyan" />
      </div>
    </section>
  );
};
