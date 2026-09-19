import React, { useEffect } from 'react';
import { X, ExternalLink, Award, CheckCircle2 } from 'lucide-react';
import { Certification } from '../../types';

interface CertificateModalProps {
  cert: Certification | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ cert, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (cert) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [cert, onClose]);

  if (!cert) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cert-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-cyber-card border border-cyber-border rounded-2xl overflow-hidden shadow-2xl shadow-cyan-950/40 p-6 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close certificate modal"
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg bg-slate-800/60 hover:bg-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 rounded-xl bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-cyber-cyan">
              {cert.organization} • {cert.date}
            </span>
            <h3 id="cert-title" className="text-xl font-bold text-slate-100">
              {cert.name}
            </h3>
          </div>
        </div>

        {/* Certificate Image Preview */}
        <div className="my-6 rounded-xl overflow-hidden border border-cyber-border/80 bg-slate-950 flex items-center justify-center">
          <img
            src={cert.image}
            alt={`${cert.name} preview`}
            className="w-full h-auto max-h-72 object-contain"
          />
        </div>

        {/* Description & Competencies */}
        <p className="text-sm text-slate-300 mb-4">{cert.description}</p>

        <div className="mb-6">
          <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
            Skills Demonstrated
          </h4>
          <div className="flex flex-wrap gap-2">
            {cert.skillsDemonstrated.map((skill, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono bg-cyber-surface border border-cyber-border text-slate-300"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-cyber-emerald" />
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Footer with Credential Verification */}
        <div className="pt-4 border-t border-cyber-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <span className="text-xs font-mono text-slate-400">
            Credential ID: <span className="text-slate-200">{cert.credentialId}</span>
          </span>

          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-cyber-cyan/15 hover:bg-cyber-cyan/25 text-cyber-cyan border border-cyber-cyan/30 transition-colors"
          >
            Verify Credential
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
