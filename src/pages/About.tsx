import React from 'react';
import { Shield, GraduationCap, Code2, Cpu, CheckCircle2, BookOpen, Sparkles } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { profileData } from '../data/profile';
import { timelineData } from '../data/timeline';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <SEO
        title="About Heet Shah | Background, Education & Technical Interests"
        description="Learn about Heet Shah — 3rd-year B.Tech CSE (Cyber Security & Forensics) student at MIT-WPU, Pune. Technical interests in software development, AI/ML, and secure systems."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-cyber-card border border-cyber-border text-cyber-cyan mb-4">
            <Shield className="w-3.5 h-3.5" />
            BACKGROUND &amp; IDENTITY
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
            About Heet Shah
          </h1>
          <p className="text-base sm:text-lg text-slate-400 mt-4 leading-relaxed font-mono">
            {profileData.heroTitle}
          </p>
        </div>

        {/* Top Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Photo & Identity Sidebar */}
          <div className="lg:col-span-4">
            <div className="p-4 rounded-3xl bg-cyber-card border border-cyber-border sticky top-28 shadow-xl">
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-slate-950 border border-cyber-cyan/30 flex items-center justify-center">
                <img
                  src={profileData.profilePhoto}
                  alt={profileData.name}
                  className="w-full h-full object-cover object-[center_22%]"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/assets/profile-photo.svg';
                  }}
                />
              </div>

              <div className="mt-5 text-center">
                <h3 className="text-xl font-bold text-slate-100">{profileData.name}</h3>
                <p className="text-xs font-mono text-cyber-cyan mt-1">
                  B.Tech CSE • 3rd Year (5th Sem)
                </p>
                <p className="text-xs text-slate-400 mt-0.5">{profileData.university}</p>
              </div>

              <div className="mt-6 pt-6 border-t border-cyber-border/80 space-y-2.5 text-xs font-mono text-slate-300">
                <div className="flex justify-between py-1 border-b border-cyber-border/40">
                  <span className="text-slate-400">Specialization</span>
                  <span className="text-right text-slate-200">{profileData.specialization}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-cyber-border/40">
                  <span className="text-slate-400">CGPA</span>
                  <span className="text-cyber-cyan font-bold">{profileData.cgpa}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-cyber-border/40">
                  <span className="text-slate-400">12th Grade</span>
                  <span className="text-slate-200">{profileData.twelfthPercentage}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Languages</span>
                  <span className="text-slate-200">{profileData.languages.join(', ')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Narrative Overview */}
          <div className="lg:col-span-8 space-y-10">
            {/* Bio */}
            <div>
              <h2 className="text-2xl font-bold text-slate-100 mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-cyber-cyan" />
                Introduction &amp; Positioning
              </h2>
              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>{profileData.bio[0]}</p>
                <p>{profileData.bio[1]}</p>
                <p>{profileData.bio[2]}</p>
              </div>
            </div>

            {/* Academic Curriculum & Coursework */}
            <div className="p-6 sm:p-8 rounded-2xl bg-cyber-card border border-cyber-border">
              <h3 className="text-lg font-bold text-slate-100 mb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-cyber-cyan" />
                Relevant Academic Coursework &amp; Electives
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {profileData.coursework.map((course) => (
                  <div
                    key={course}
                    className="p-3 rounded-xl bg-cyber-surface border border-cyber-border flex items-center gap-2.5 text-xs sm:text-sm text-slate-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyber-cyan flex-shrink-0" />
                    <span>{course}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-cyber-surface border border-cyber-cyan/30 flex items-start gap-3">
                <Shield className="w-5 h-5 text-cyber-cyan flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] font-mono text-cyber-cyan uppercase tracking-wider block">
                    Professional Elective
                  </span>
                  <span className="text-sm font-semibold text-slate-100">
                    {profileData.professionalElective}
                  </span>
                  <p className="text-xs text-slate-400 mt-1">
                    Focused study on securing corporate infrastructure, enterprise networks, server perimeters, and incident triage.
                  </p>
                </div>
              </div>
            </div>

            {/* Technical Interests */}
            <div>
              <h2 className="text-2xl font-bold text-slate-100 mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyber-cyan" />
                Technical Interests &amp; Direction
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-5 rounded-xl bg-cyber-card border border-cyber-border">
                  <div className="w-10 h-10 rounded-lg bg-cyber-surface text-cyber-cyan border border-cyber-border flex items-center justify-center mb-3">
                    <Shield className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-sm text-slate-100">Cybersecurity</h4>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                    Infrastructure defense, secure SDLC, vulnerability mitigation, and forensics data integrity.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-cyber-card border border-cyber-border">
                  <div className="w-10 h-10 rounded-lg bg-cyber-surface text-blue-400 border border-cyber-border flex items-center justify-center mb-3">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-sm text-slate-100">Software Engineering</h4>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                    Full-stack web applications, clean API contracts, state management, and reliable data storage.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-cyber-card border border-cyber-border">
                  <div className="w-10 h-10 rounded-lg bg-cyber-surface text-purple-400 border border-cyber-border flex items-center justify-center mb-3">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-sm text-slate-100">AI / Machine Learning</h4>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                    Distributed data pipelines, exploratory analytics, NLP text models, and recurrent sequence learning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Visually Engaging Factual Timeline */}
        <div className="mt-16 pt-16 border-t border-cyber-border/60">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-cyber-cyan">
              Chronological Path
            </span>
            <h2 className="text-3xl font-extrabold text-slate-100 mt-2">
              Academic &amp; Technical Timeline
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              Verified sequence of academic milestones, hackathons, skill development, and ongoing learning.
            </p>
          </div>

          <div className="relative border-l-2 border-cyber-border/80 ml-4 md:ml-32 space-y-12 pl-6 md:pl-10">
            {timelineData.map((item) => (
              <div key={item.id} className="relative group">
                {/* Timeline node icon */}
                <div className="absolute -left-[31px] md:-left-[47px] top-1 w-5 h-5 rounded-full bg-cyber-card border-2 border-cyber-cyan flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-cyber-cyan" />
                </div>

                {/* Left Year Badge for Desktop */}
                <div className="hidden md:block absolute -left-36 top-1 text-right w-24">
                  <span className="text-xs font-mono font-bold text-cyber-cyan">
                    {item.year}
                  </span>
                </div>

                <div className="p-6 rounded-2xl bg-cyber-card border border-cyber-border group-hover:border-cyber-cyan/40 transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono text-cyber-cyan uppercase tracking-wider">
                      {item.stage} • <span className="md:hidden">{item.year}</span>
                    </span>
                    {item.current && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-cyber-emerald border border-emerald-500/30">
                        Current Semester
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-slate-100">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-cyber-border/60 flex flex-wrap gap-2">
                    {item.details.map((detail, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono bg-cyber-surface text-slate-300 border border-cyber-border"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyber-cyan" />
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
