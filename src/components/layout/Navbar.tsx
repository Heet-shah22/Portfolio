import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Shield, Menu, Send } from 'lucide-react';
import { MobileMenu } from './MobileMenu';

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

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const lastNavClickRef = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent, targetPath: string) => {
    const now = Date.now();
    // Prevent re-navigating to the current page
    if (location.pathname === targetPath) {
      e.preventDefault();
      return;
    }
    // Debounce rapid continuous clicks (ignore clicks within 400ms of a navigation trigger)
    if (now - lastNavClickRef.current < 400) {
      e.preventDefault();
      return;
    }
    lastNavClickRef.current = now;
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-cyber-bg/90 backdrop-blur-md border-b border-cyber-border shadow-lg shadow-black/40'
            : 'py-5 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Wordmark */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-cyber-cyan rounded-lg p-1"
          >
            <div className="w-9 h-9 rounded-xl bg-cyber-card border border-cyber-border group-hover:border-cyber-cyan flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.4)]">
              <Shield className="w-5 h-5 text-cyber-cyan" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono font-bold tracking-wider text-slate-100 group-hover:text-cyber-cyan transition-colors text-base leading-tight">
                HEET SHAH
              </span>
              <span className="text-[10px] font-mono text-cyber-cyan/80 tracking-widest uppercase">
                CSE • CYBER SECURITY
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 px-3 py-1.5 rounded-full bg-cyber-surface/60 border border-cyber-border/60 backdrop-blur-md select-none">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={(e) => handleLinkClick(e, link.path)}
                className={({ isActive }) =>
                  `px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 select-none ${
                    isActive
                      ? 'bg-cyber-cyan/15 text-cyber-cyan font-semibold border border-cyber-cyan/30 shadow-[0_0_10px_rgba(6,182,212,0.2)]'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right CTA / Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-cyber-cyan/15 hover:bg-cyber-cyan/25 text-cyber-cyan border border-cyber-cyan/30 hover:border-cyber-cyan transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Let's Connect</span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile navigation menu"
              className="p-2 rounded-xl text-slate-300 hover:text-white bg-cyber-card border border-cyber-border hover:border-slate-700 lg:hidden focus:outline-none focus:ring-2 focus:ring-cyber-cyan"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
};
