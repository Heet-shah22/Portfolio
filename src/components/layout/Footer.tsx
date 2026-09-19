import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Github, Linkedin, Mail, Phone, ArrowUpRight } from 'lucide-react';
import { profileData } from '../../data/profile';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-cyber-surface border-t border-cyber-border mt-24 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Col 1: Identity */}
          <div className="md:col-span-2 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-lg bg-cyber-card border border-cyber-cyan/30 flex items-center justify-center text-cyber-cyan">
                  <Shield className="w-4 h-4" />
                </div>
                <span className="font-mono font-bold tracking-wider text-slate-100 text-lg">
                  HEET SHAH
                </span>
              </div>
              <p className="text-sm text-slate-400 max-w-md leading-relaxed mb-4">
                {profileData.tagline}
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-cyber-card border border-cyber-border text-slate-300">
                <span className="w-2 h-2 rounded-full bg-cyber-emerald animate-pulse" />
                MIT-WPU 5th Sem • Systems Active
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h3 className="text-xs font-mono font-semibold text-slate-200 uppercase tracking-wider mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/about" className="hover:text-cyber-cyan transition-colors">
                  About Heet
                </Link>
              </li>
              <li>
                <Link to="/skills" className="hover:text-cyber-cyan transition-colors">
                  Technical Skills
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-cyber-cyan transition-colors">
                  Featured Projects
                </Link>
              </li>
              <li>
                <Link to="/journey" className="hover:text-cyber-cyan transition-colors">
                  Journey Timeline
                </Link>
              </li>
              <li>
                <Link to="/certifications" className="hover:text-cyber-cyan transition-colors">
                  Certifications
                </Link>
              </li>
              <li>
                <Link to="/resume" className="hover:text-cyber-cyan transition-colors">
                  Resume &amp; Academics
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Channels */}
          <div>
            <h3 className="text-xs font-mono font-semibold text-slate-200 uppercase tracking-wider mb-4">
              Connect
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={`mailto:${profileData.email}`}
                  className="flex items-center gap-2 hover:text-cyber-cyan transition-colors"
                >
                  <Mail className="w-4 h-4 text-cyber-cyan" />
                  <span className="truncate">{profileData.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${profileData.phone}`}
                  className="flex items-center gap-2 hover:text-cyber-cyan transition-colors"
                >
                  <Phone className="w-4 h-4 text-cyber-cyan" />
                  <span>+91 {profileData.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-cyber-cyan transition-colors"
                >
                  <Github className="w-4 h-4 text-cyber-cyan" />
                  <span>GitHub Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-cyber-cyan transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-cyber-cyan" />
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 mt-12 border-t border-cyber-border/70 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© {new Date().getFullYear()} Heet Shah. All rights reserved.</p>
          <p>B.Tech CSE (Cyber Security &amp; Forensics) • MIT World Peace University</p>
        </div>
      </div>
    </footer>
  );
};
