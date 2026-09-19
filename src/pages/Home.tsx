import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, Code2, Cpu, BarChart3, Award, GraduationCap, CheckCircle2, 
  ArrowRight, Copy, Check, Terminal, BookOpen
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Hero } from '../components/home/Hero';
import { ProjectCard } from '../components/projects/ProjectCard';
import { SkillCard } from '../components/skills/SkillCard';
import { ToastContainer, ToastMessage } from '../components/common/Toast';
import { CertificateModal } from '../components/common/CertificateModal';
import { profileData } from '../data/profile';
import { projectsData } from '../data/projects';
import { skillsData } from '../data/skills';
import { achievementsData } from '../data/achievements';
import { certificationsData } from '../data/certifications';
import { timelineData } from '../data/timeline';
import { Certification } from '../types';

export const Home: React.FC = () => {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  const addToast = (type: 'success' | 'error', text: string) => {
    const id = Date.now().toString();
    setToasts((prev) => [...prev, { id, type, text }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(profileData.email).then(() => {
      setCopiedEmail(true);
      addToast('success', `Copied ${profileData.email} to clipboard!`);
      setTimeout(() => setCopiedEmail(false), 3000);
    });
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Heet Shah | Cyber Security Student & Software Developer"
        description="Official portfolio of Heet Shah, B.Tech CSE (Cyber Security & Forensics) student at MIT-WPU. Projects, technical skills, achievements, and engineering case studies."
      />

      {/* Toast feedback */}
      <ToastContainer
        toasts={toasts}
        onClose={(id) => setToasts((prev) => prev.filter((t) => t.id !== id))}
      />

      {/* Hero Section */}
      <Hero />

      {/* 1. About Me Section */}
      <section id="about" className="py-20 border-t border-cyber-border/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="p-1 rounded-2xl bg-gradient-to-br from-cyber-cyan/30 via-slate-800 to-transparent">
                <div className="p-6 sm:p-8 rounded-2xl bg-cyber-card border border-cyber-border">
                  <span className="text-xs font-mono uppercase tracking-widest text-cyber-cyan">
                    Academic Identity
                  </span>
                  <h3 className="text-2xl font-bold text-slate-100 mt-2">
                    {profileData.degree}
                  </h3>
                  <p className="text-sm text-cyber-cyan font-mono mt-1">
                    Specialization: {profileData.specialization}
                  </p>

                  <div className="mt-6 pt-6 border-t border-cyber-border space-y-3 text-xs sm:text-sm text-slate-300">
                    <div className="flex justify-between py-1 border-b border-cyber-border/40">
                      <span className="text-slate-400">University</span>
                      <span className="font-semibold text-slate-200 text-right">{profileData.university}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-cyber-border/40">
                      <span className="text-slate-400">Current Standing</span>
                      <span className="font-mono text-cyber-cyan">{profileData.academicYear}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-cyber-border/40">
                      <span className="text-slate-400">Undergraduate CGPA</span>
                      <span className="font-mono text-cyber-emerald font-bold">{profileData.cgpa}</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-slate-400">12th Grade Score</span>
                      <span className="font-mono text-slate-200">{profileData.twelfthPercentage}</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <span className="text-xs font-mono text-slate-400 block mb-2">
                      Professional Elective:
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-cyber-surface border border-cyber-cyan/30 text-cyber-cyan">
                      <Shield className="w-3.5 h-3.5" />
                      {profileData.professionalElective}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-cyber-card border border-cyber-border text-cyber-cyan mb-4">
                <Shield className="w-3.5 h-3.5" />
                ABOUT HEET SHAH
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
                Building Secure, Scalable Software with an Analytical Mindset
              </h2>

              <div className="mt-6 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>{profileData.bio[0]}</p>
                <p>{profileData.bio[1]}</p>
                <p>{profileData.bio[2]}</p>
              </div>

              {/* Coursework pills */}
              <div className="mt-8">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                  Key Coursework &amp; Foundations
                </h4>
                <div className="flex flex-wrap gap-2">
                  {profileData.coursework.map((course) => (
                    <span
                      key={course}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-cyber-card border border-cyber-border text-slate-200"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyber-cyan" />
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cyber-cyan hover:text-cyber-cyanLight transition-colors"
                >
                  <span>Read Full Background &amp; Bio</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Technical Skills Highlights */}
      <section className="py-20 bg-cyber-surface/40 border-t border-cyber-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-cyber-card border border-cyber-border text-cyber-cyan mb-2">
                <Terminal className="w-3.5 h-3.5" />
                TECHNICAL COMPETENCIES
              </div>
              <h2 className="text-3xl font-extrabold text-slate-100">
                Core Engineering Skills
              </h2>
              <p className="text-sm text-slate-400 mt-2 max-w-xl">
                Hands-on practical toolsets organized with honest, neutral proficiency indicators — no fabricated percentages.
              </p>
            </div>

            <Link
              to="/skills"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-cyber-cyan hover:text-cyber-cyanLight transition-colors"
            >
              <span>Explore All {skillsData.length} Skills</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillsData.slice(0, 9).map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured Projects Showcase */}
      <section className="py-20 border-t border-cyber-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-cyber-card border border-cyber-border text-cyber-cyan mb-2">
                <Code2 className="w-3.5 h-3.5" />
                FEATURED WORK
              </div>
              <h2 className="text-3xl font-extrabold text-slate-100">
                Real Projects &amp; Architecture
              </h2>
              <p className="text-sm text-slate-400 mt-2 max-w-xl">
                Documented engineering projects across full-stack applications, distributed analytics, and sequence modeling.
              </p>
            </div>

            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-cyber-cyan hover:text-cyber-cyanLight transition-colors"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Technical Focus Matrix */}
      <section className="py-20 bg-cyber-surface/40 border-t border-cyber-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-cyber-cyan">
              Pillars of Exploration
            </span>
            <h2 className="text-3xl font-extrabold text-slate-100 mt-2">
              Technical Focus Areas
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              How academic coursework, practical projects, and competitive hackathons combine into cohesive engineering domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Focus 1: Cybersecurity */}
            <div className="p-6 rounded-2xl bg-cyber-card border border-cyber-border hover:border-cyber-cyan/40 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-cyber-surface border border-cyber-border flex items-center justify-center text-cyber-cyan mb-4">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-100">Cybersecurity &amp; Forensics</h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Enterprise Infrastructure Security, digital forensics analysis, secure authentication, threat surface reduction, and cryptographic principles.
              </p>
            </div>

            {/* Focus 2: Software Development */}
            <div className="p-6 rounded-2xl bg-cyber-card border border-cyber-border hover:border-cyber-cyan/40 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-cyber-surface border border-cyber-border flex items-center justify-center text-blue-400 mb-4">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-100">Full-Stack Development</h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Scalable React &amp; TypeScript SPAs, Node.js/Express REST APIs, MongoDB database optimization, and modular component architectures.
              </p>
            </div>

            {/* Focus 3: AI/ML & Deep Learning */}
            <div className="p-6 rounded-2xl bg-cyber-card border border-cyber-border hover:border-cyber-cyan/40 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-cyber-surface border border-cyber-border flex items-center justify-center text-purple-400 mb-4">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-100">AI / Machine Learning</h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                TensorFlow and Keras sequence architectures, stacked LSTM neural networks, word embeddings, regression modeling, and local LLM experimentation with Ollama.
              </p>
            </div>

            {/* Focus 4: Data & Analytics */}
            <div className="p-6 rounded-2xl bg-cyber-card border border-cyber-border hover:border-cyber-cyan/40 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-cyber-surface border border-cyber-border flex items-center justify-center text-emerald-400 mb-4">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-100">Data Analytics &amp; NLP</h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Distributed data processing with Apache Spark, TF-IDF natural language vectorization, sentiment scoring, and multi-variable statistical visualization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Achievements & Honors */}
      <section className="py-20 border-t border-cyber-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-cyber-card border border-cyber-border text-cyber-cyan mb-2">
                <Award className="w-3.5 h-3.5" />
                VERIFIED HONORS
              </div>
              <h2 className="text-3xl font-extrabold text-slate-100">
                Achievements &amp; Hackathons
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievementsData.map((item) => (
              <div
                key={item.id}
                className="p-6 rounded-2xl bg-cyber-card border border-cyber-border hover:border-cyber-cyan/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-cyber-cyan/15 text-cyber-cyan border border-cyber-cyan/30">
                      {item.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-500">{item.year}</span>
                  </div>

                  <h3 className="text-base font-bold text-slate-100">{item.title}</h3>
                  <p className="text-xs font-mono text-slate-400 mt-1">{item.event}</p>
                  <p className="text-xs text-slate-300 mt-3 leading-relaxed">{item.description}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-cyber-border/60 flex items-center gap-2 text-xs font-mono text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyber-emerald" />
                  <span>Issuer: {item.issuer}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Education & Certifications Strip */}
      <section className="py-20 bg-cyber-surface/40 border-t border-cyber-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Education Summary */}
            <div className="lg:col-span-6 p-8 rounded-2xl bg-cyber-card border border-cyber-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-cyber-surface text-cyber-cyan border border-cyber-border">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-cyber-cyan uppercase tracking-wider">
                    Undergraduate Education
                  </span>
                  <h3 className="text-xl font-bold text-slate-100">
                    MIT World Peace University (MIT-WPU)
                  </h3>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Pursuing B.Tech in Computer Science and Engineering with specialization in Cyber Security and Forensics. Current standing in 3rd Year (5th Semester) maintaining a 7.12 CGPA.
              </p>

              <div className="grid grid-cols-2 gap-3 text-xs font-mono text-slate-300">
                <div className="p-3 rounded-lg bg-cyber-surface border border-cyber-border">
                  <span className="text-slate-400 block text-[10px]">CURRENT CGPA</span>
                  <span className="text-cyber-cyan font-bold text-base">{profileData.cgpa}</span>
                </div>
                <div className="p-3 rounded-lg bg-cyber-surface border border-cyber-border">
                  <span className="text-slate-400 block text-[10px]">12TH BOARD</span>
                  <span className="text-slate-100 font-bold text-base">{profileData.twelfthPercentage}</span>
                </div>
              </div>
            </div>

            {/* Certifications Preview */}
            <div className="lg:col-span-6 p-8 rounded-2xl bg-cyber-card border border-cyber-border">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-cyber-surface text-cyber-cyan border border-cyber-border">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-cyber-cyan uppercase tracking-wider">
                      Verified Credentials
                    </span>
                    <h3 className="text-xl font-bold text-slate-100">
                      Certifications
                    </h3>
                  </div>
                </div>

                <Link
                  to="/certifications"
                  className="text-xs font-mono text-cyber-cyan hover:underline"
                >
                  View Details
                </Link>
              </div>

              {certificationsData.map((cert) => (
                <div
                  key={cert.id}
                  className="p-4 rounded-xl bg-cyber-surface border border-cyber-border hover:border-cyber-cyan/30 transition-colors flex items-center justify-between gap-4"
                >
                  <div>
                    <h4 className="font-bold text-sm text-slate-100">{cert.name}</h4>
                    <span className="text-xs font-mono text-slate-400">
                      {cert.organization} • {cert.date}
                    </span>
                  </div>

                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono bg-cyber-cyan/15 hover:bg-cyber-cyan/25 text-cyber-cyan border border-cyber-cyan/30 transition-colors"
                  >
                    View Credential
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Journey Timeline Preview */}
      <section className="py-20 border-t border-cyber-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-cyber-card border border-cyber-border text-cyber-cyan mb-2">
                <BookOpen className="w-3.5 h-3.5" />
                ACADEMIC &amp; ENGINEERING PATH
              </div>
              <h2 className="text-3xl font-extrabold text-slate-100">
                Milestones &amp; Journey
              </h2>
            </div>

            <Link
              to="/journey"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-cyber-cyan hover:text-cyber-cyanLight transition-colors"
            >
              <span>Explore Complete Timeline</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {timelineData.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="p-6 rounded-2xl bg-cyber-card border border-cyber-border relative"
              >
                <span className="text-[10px] font-mono text-cyber-cyan uppercase tracking-wider">
                  {item.stage} • {item.year}
                </span>
                <h3 className="text-base font-bold text-slate-100 mt-1">{item.title}</h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Contact CTA Section */}
      <section className="py-20 bg-gradient-to-b from-cyber-bg to-cyber-surface border-t border-cyber-border/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-cyber-card border border-cyber-border text-cyber-cyan mb-4">
            <Shield className="w-3.5 h-3.5" />
            LET'S COLLABORATE
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Interested in Software Development, AI/ML, or Cybersecurity?
          </h2>

          <p className="text-slate-400 text-sm sm:text-base mt-4 max-w-xl mx-auto leading-relaxed">
            I am actively open to discussing software projects, research, technical collaborations, and engineering opportunities.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-cyber-cyan hover:bg-cyber-cyanLight text-slate-950 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.3)]"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <button
              onClick={copyEmailToClipboard}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs font-mono bg-cyber-surface hover:bg-cyber-card text-slate-200 border border-cyber-border hover:border-cyber-cyan/40 transition-all duration-300"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-4 h-4 text-cyber-emerald" />
                  <span>Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-cyber-cyan" />
                  <span>Copy {profileData.email}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Certificate Modal */}
      <CertificateModal
        cert={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </div>
  );
};
