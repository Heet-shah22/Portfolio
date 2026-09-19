import React, { useState } from 'react';
import { Award, ExternalLink, Eye, CheckCircle2 } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { CertificateModal } from '../components/common/CertificateModal';
import { certificationsData } from '../data/certifications';
import { Certification } from '../types';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <div className="min-h-screen pt-28 pb-24">
      <SEO
        title="Certifications & Verified Credentials | Heet Shah"
        description="Verified technical certifications: Full-Stack Web Development (MERN Stack) certification from Udemy, credentials, and verification badges."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-cyber-card border border-cyber-border text-cyber-cyan mb-4">
            <Award className="w-3.5 h-3.5" />
            PROFESSIONAL CREDENTIALS
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
            Certifications &amp; Credentials
          </h1>
          <p className="text-sm sm:text-base text-slate-400 mt-4 leading-relaxed">
            Verified qualifications demonstrating hands-on technical competencies, architectures, and development standards. Built to scale dynamically as new industry credentials are acquired.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="group rounded-2xl bg-cyber-card border border-cyber-border hover:border-cyber-cyan/40 transition-all duration-300 overflow-hidden shadow-xl flex flex-col justify-between"
            >
              {/* Image Preview Area */}
              <div
                onClick={() => setSelectedCert(cert)}
                className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950 border-b border-cyber-border/80 cursor-pointer flex items-center justify-center group"
              >
                <img
                  src={cert.image}
                  alt={`${cert.name} certificate`}
                  className="w-full h-full object-contain p-4 group-hover:scale-102 transition-transform duration-300"
                />

                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2 text-cyber-cyan font-mono text-xs">
                  <Eye className="w-4 h-4" />
                  <span>Click to expand certificate</span>
                </div>
              </div>

              {/* Content Details */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono text-cyber-cyan uppercase tracking-wider">
                      {cert.organization}
                    </span>
                    <span className="text-xs font-mono text-slate-400">{cert.date}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-100">{cert.name}</h3>

                  <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
                    {cert.description}
                  </p>

                  <div className="mt-5">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2">
                      Verified Competencies:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skillsDemonstrated.map((skill, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono bg-cyber-surface border border-cyber-border text-slate-300"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyber-emerald" />
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="mt-8 pt-5 border-t border-cyber-border/80 flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs font-mono text-slate-400">
                    ID: <span className="text-slate-200">{cert.credentialId}</span>
                  </span>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedCert(cert)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-cyber-surface hover:bg-slate-800 text-slate-200 border border-cyber-border transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5 text-cyber-cyan" />
                      <span>Preview</span>
                    </button>

                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-cyber-cyan/15 hover:bg-cyber-cyan/25 text-cyber-cyan border border-cyber-cyan/30 transition-colors"
                    >
                      <span>Verify</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <CertificateModal
        cert={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </div>
  );
};
