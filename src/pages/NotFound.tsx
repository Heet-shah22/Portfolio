import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, ArrowLeft, Home, Terminal } from 'lucide-react';
import { SEO } from '../components/common/SEO';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-[85vh] flex items-center justify-center pt-24 pb-16 px-4">
      <SEO
        title="404 — Route Not Found"
        description="The requested routing endpoint does not exist or has been relocated."
      />

      <div className="max-w-md w-full p-8 rounded-3xl bg-cyber-card border border-cyber-border text-center shadow-2xl relative overflow-hidden">
        {/* Subtle Cyber Grid Background */}
        <div className="absolute inset-0 cyber-grid-pattern opacity-25 pointer-events-none" />

        <div className="relative z-10">
          <div className="w-16 h-16 rounded-2xl bg-cyber-surface border border-cyber-cyan/40 text-cyber-cyan flex items-center justify-center mx-auto mb-6 shadow-[0_0_25px_rgba(6,182,212,0.2)]">
            <ShieldAlert className="w-8 h-8" />
          </div>

          <span className="text-xs font-mono uppercase tracking-widest text-cyber-cyan block mb-2">
            Status: 404 • Resource Unreachable
          </span>

          <h1 className="text-3xl font-extrabold text-slate-100 tracking-tight">
            Route Not Found
          </h1>

          <p className="text-xs sm:text-sm text-slate-400 mt-3 leading-relaxed">
            The destination URL or endpoint you requested is not indexed within this routing directory.
          </p>

          <div className="p-3.5 rounded-xl bg-cyber-surface border border-cyber-border/80 text-left font-mono text-[11px] text-slate-400 my-6">
            <div className="flex items-center gap-1.5 text-cyber-cyan mb-1">
              <Terminal className="w-3.5 h-3.5" />
              <span>DIAGNOSTIC_TRACE:</span>
            </div>
            <p className="text-slate-300">REQUEST_URI: [INVALID_ENDPOINT]</p>
            <p className="text-slate-500">RESOLUTION: REDIRECT_ROOT_NODE</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs font-semibold bg-cyber-cyan hover:bg-cyber-cyanLight text-slate-950 transition-colors w-full sm:w-auto shadow-[0_0_15px_rgba(6,182,212,0.25)]"
            >
              <Home className="w-4 h-4" />
              <span>Return Home</span>
            </Link>

            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-cyber-surface hover:bg-slate-800 text-slate-200 border border-cyber-border transition-colors w-full sm:w-auto"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>View Projects</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
