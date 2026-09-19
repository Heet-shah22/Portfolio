import React, { useState } from 'react';
import { 
  Mail, Phone, Github, Linkedin, Copy, Check, Send, 
  Shield, ArrowUpRight 
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { ContactForm } from '../components/contact/ContactForm';
import { ToastContainer, ToastMessage } from '../components/common/Toast';
import { profileData } from '../data/profile';

export const Contact: React.FC = () => {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const addToast = (type: 'success' | 'error', text: string) => {
    const id = Date.now().toString();
    setToasts((prev) => [...prev, { id, type, text }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(profileData.email).then(() => {
      setCopiedEmail(true);
      addToast('success', `Copied ${profileData.email} to clipboard!`);
      setTimeout(() => setCopiedEmail(false), 3000);
    });
  };

  return (
    <div className="min-h-screen pt-28 pb-24">
      <SEO
        title="Contact & Connect | Heet Shah"
        description="Get in touch with Heet Shah. Open to software engineering discussions, machine learning projects, and cybersecurity collaborations."
      />

      <ToastContainer
        toasts={toasts}
        onClose={(id) => setToasts((prev) => prev.filter((t) => t.id !== id))}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-cyber-card border border-cyber-border text-cyber-cyan mb-4">
            <Send className="w-3.5 h-3.5" />
            COMMUNICATION CHANNELS
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
            Let's Connect
          </h1>
          <p className="text-sm sm:text-base text-slate-400 mt-4 leading-relaxed">
            Whether you are interested in discussing software architectures, collaborating on innovative technical projects, or reaching out for academic inquiries, I would love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Channels & Verified Profiles */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-cyber-card border border-cyber-border shadow-xl">
              <h3 className="text-lg font-bold text-slate-100 mb-6 flex items-center gap-2">
                <Shield className="w-5 h-5 text-cyber-cyan" />
                Direct Contact Information
              </h3>

              <div className="space-y-6">
                {/* Email Channel */}
                <div className="p-4 rounded-xl bg-cyber-surface border border-cyber-border/80">
                  <div className="flex items-center gap-2 mb-1">
                    <Mail className="w-3.5 h-3.5 text-cyber-cyan" />
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                      Direct Email
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <a
                      href={`mailto:${profileData.email}`}
                      className="text-sm font-mono font-medium text-cyber-cyan hover:underline truncate"
                    >
                      {profileData.email}
                    </a>
                    <button
                      onClick={copyEmail}
                      aria-label="Copy email address"
                      className="p-2 rounded-lg bg-cyber-card hover:bg-slate-800 text-slate-300 hover:text-white transition-colors flex-shrink-0"
                      title="Copy email to clipboard"
                    >
                      {copiedEmail ? (
                        <Check className="w-4 h-4 text-cyber-emerald" />
                      ) : (
                        <Copy className="w-4 h-4 text-cyber-cyan" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Phone Channel */}
                <div className="p-4 rounded-xl bg-cyber-surface border border-cyber-border/80">
                  <div className="flex items-center gap-2 mb-1">
                    <Phone className="w-3.5 h-3.5 text-cyber-cyan" />
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                      Phone Number
                    </span>
                  </div>
                  <a
                    href={`tel:${profileData.phone}`}
                    className="text-sm font-mono font-medium text-slate-200 hover:text-cyber-cyan transition-colors"
                  >
                    +91 {profileData.phone}
                  </a>
                </div>

                {/* GitHub */}
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-cyber-surface border border-cyber-border/80 hover:border-cyber-cyan/40 transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-5 h-5 text-cyber-cyan" />
                    <div>
                      <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                        GitHub
                      </span>
                      <span className="text-sm font-mono text-slate-200 group-hover:text-cyber-cyan">
                        Heet-shah22
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyber-cyan" />
                </a>

                {/* LinkedIn */}
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-cyber-surface border border-cyber-border/80 hover:border-cyber-cyan/40 transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-5 h-5 text-cyber-cyan" />
                    <div>
                      <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                        LinkedIn
                      </span>
                      <span className="text-sm font-mono text-slate-200 group-hover:text-cyber-cyan">
                        {profileData.linkedin.split('/').filter(Boolean).pop() || 'LinkedIn'}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyber-cyan" />
                </a>
              </div>
            </div>

            {/* Quick Status Note */}
            <div className="p-4 rounded-xl bg-cyber-surface border border-cyber-border text-xs text-slate-400 font-mono">
              <span className="text-cyber-emerald font-semibold">● Active Response Window:</span> Generally replies within 24–48 hours. Academic location: Pune, India (IST).
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm onNotify={addToast} />
          </div>
        </div>
      </div>
    </div>
  );
};
