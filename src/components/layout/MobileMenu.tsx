import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { X, Shield, FileText, Send, Github, Linkedin } from 'lucide-react';
import { profileData } from '../../data/profile';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Journey', path: '/journey' },
  { name: 'Certifications', path: '/certifications' },
  { name: 'Resume', path: '/resume' },
  { name: 'Contact', path: '/contact' },
];

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 lg:hidden flex justify-end"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="relative w-full max-w-xs h-full bg-cyber-surface border-l border-cyber-border shadow-2xl flex flex-col justify-between p-6 z-10 overflow-y-auto">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-cyber-border">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-cyber-cyan/15 text-cyber-cyan border border-cyber-cyan/30">
                <Shield className="w-5 h-5" />
              </div>
              <span className="font-mono font-bold tracking-wider text-slate-100">
                HEET SHAH
              </span>
            </div>
            <button
              onClick={onClose}
              aria-label="Close mobile menu"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-col gap-1.5 py-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-cyber-cyan/15 text-cyber-cyan border border-cyber-cyan/30 font-semibold'
                      : 'text-slate-300 hover:bg-cyber-card hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan shadow-[0_0_8px_#06b6d4]" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Bottom CTAs */}
        <div className="pt-6 border-t border-cyber-border flex flex-col gap-3">
          <a
            href={profileData.resumeUrl}
            download="Heet_Shah_Resume.pdf"
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
          >
            <FileText className="w-4 h-4 text-cyber-cyan" />
            Download Resume
          </a>

          <NavLink
            to="/contact"
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-semibold bg-cyber-cyan text-slate-950 hover:bg-cyber-cyanLight transition-colors shadow-[0_0_15px_rgba(6,182,212,0.3)]"
          >
            <Send className="w-4 h-4" />
            Let's Connect
          </NavLink>

          <div className="flex items-center justify-center gap-4 pt-2">
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
