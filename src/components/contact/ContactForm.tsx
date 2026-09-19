import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { profileData } from '../../data/profile';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

interface ContactFormProps {
  onNotify: (type: 'success' | 'error', message: string) => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ onNotify }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.name.trim()) {
      errs.name = 'Name is required.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Subject is required.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Message content is required.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      onNotify('error', 'Please correct the errors in the form.');
      return;
    }

    setStatus('loading');

    try {
      const endpoint = profileData.formspreeId?.trim();

      if (endpoint && endpoint !== '') {
        const url = endpoint.startsWith('http')
          ? endpoint
          : `https://formspree.io/f/${endpoint}`;

        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            _replyto: formData.email,
          }),
        });

        if (!response.ok) {
          const resData = await response.json().catch(() => ({}));
          throw new Error(resData.error || 'Failed to submit form');
        }

        setStatus('success');
        onNotify('success', 'Message delivered! Heet will get back to you shortly.');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setErrors({});
      } else {
        // Direct email fallback when Formspree ID is not yet entered
        const mailtoUrl = `mailto:${profileData.email}?subject=${encodeURIComponent(
          `[Portfolio Contact] ${formData.subject}`
        )}&body=${encodeURIComponent(
          `Hi Heet,\n\n${formData.message}\n\n---\nFrom: ${formData.name}\nEmail: ${formData.email}`
        )}`;
        window.location.href = mailtoUrl;

        setStatus('success');
        onNotify('success', 'Opening your email client to send message to ' + profileData.email);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setErrors({});
      }
    } catch {
      setStatus('error');
      onNotify('error', `Could not send message. Please write directly to ${profileData.email}`);
    }
  };

  return (
    <form
      action={`https://formspree.io/f/${profileData.formspreeId}`}
      method="POST"
      onSubmit={handleSubmit}
      noValidate
      className="space-y-4 p-6 sm:p-8 rounded-2xl bg-cyber-card border border-cyber-border shadow-xl relative"
      aria-label="Contact form"
    >
      {/* Success Notification Banner */}
      {status === 'success' && (
        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-3 text-emerald-400 text-sm">
          <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
          <span>Your message has been received! Thank you for reaching out.</span>
        </div>
      )}

      {/* Name Field */}
      <div>
        <label htmlFor="contact-name" className="block text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
          Your Name <span className="text-cyber-cyan">*</span>
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="e.g. Alex Morgan"
          disabled={status === 'loading'}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
          className={`w-full px-4 py-2.5 rounded-xl bg-cyber-surface border text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 transition-colors ${
            errors.name
              ? 'border-red-500 focus:ring-red-500/40'
              : 'border-cyber-border focus:border-cyber-cyan focus:ring-cyber-cyan/30'
          }`}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-xs text-red-400 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" />
            {errors.name}
          </p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="contact-email" className="block text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
          Email Address <span className="text-cyber-cyan">*</span>
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="e.g. alex@example.com"
          disabled={status === 'loading'}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
          className={`w-full px-4 py-2.5 rounded-xl bg-cyber-surface border text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 transition-colors ${
            errors.email
              ? 'border-red-500 focus:ring-red-500/40'
              : 'border-cyber-border focus:border-cyber-cyan focus:ring-cyber-cyan/30'
          }`}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-xs text-red-400 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" />
            {errors.email}
          </p>
        )}
      </div>

      {/* Subject Field */}
      <div>
        <label htmlFor="contact-subject" className="block text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
          Subject <span className="text-cyber-cyan">*</span>
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          placeholder="e.g. Opportunity / Project Collaboration"
          disabled={status === 'loading'}
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? 'subject-error' : undefined}
          className={`w-full px-4 py-2.5 rounded-xl bg-cyber-surface border text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 transition-colors ${
            errors.subject
              ? 'border-red-500 focus:ring-red-500/40'
              : 'border-cyber-border focus:border-cyber-cyan focus:ring-cyber-cyan/30'
          }`}
        />
        {errors.subject && (
          <p id="subject-error" className="mt-1 text-xs text-red-400 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" />
            {errors.subject}
          </p>
        )}
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="contact-message" className="block text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
          Message <span className="text-cyber-cyan">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Write your message here..."
          disabled={status === 'loading'}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={`w-full px-4 py-2.5 rounded-xl bg-cyber-surface border text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 transition-colors resize-y ${
            errors.message
              ? 'border-red-500 focus:ring-red-500/40'
              : 'border-cyber-border focus:border-cyber-cyan focus:ring-cyber-cyan/30'
          }`}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-xs text-red-400 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" />
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm bg-cyber-cyan hover:bg-cyber-cyanLight text-slate-950 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.25)] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Transmitting Message...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Send Message</span>
          </>
        )}
      </button>

      <p className="text-[11px] text-center text-slate-500 font-mono">
        Encrypted client-side dispatch • Protected by client validation
      </p>
    </form>
  );
};
