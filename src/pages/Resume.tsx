import React from 'react';
import { 
  FileText, Download, ExternalLink, GraduationCap, Briefcase, 
  Award, Code2, Shield, Mail, Phone, Github, Linkedin, CheckCircle2 
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { profileData } from '../data/profile';
import { projectsData } from '../data/projects';
import { achievementsData } from '../data/achievements';
import { certificationsData } from '../data/certifications';

export const Resume: React.FC = () => {
  return (
    <div className="min-h-screen pt-28 pb-24">
      <SEO
        title="Resume &amp; Academic Curriculum Vitae | Heet Shah"
        description="Curriculum vitae and credentials of Heet Shah: B.Tech CSE (Cyber Security &amp; Forensics) at MIT-WPU. Projects, technical proficiencies, achievements, and downloadable resume."
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Bar with Action Buttons */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-cyber-border/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-cyber-card border border-cyber-border text-cyber-cyan mb-2">
              <FileText className="w-3.5 h-3.5" />
              CURRICULUM VITAE
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-100">
              Heet Shah — Resume
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={profileData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-cyber-card hover:bg-slate-800 text-slate-200 border border-cyber-border transition-colors"
            >
              <ExternalLink className="w-4 h-4 text-cyber-cyan" />
              <span>View PDF</span>
            </a>

            <a
              href={profileData.resumeUrl}
              download="Heet_Shah_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-cyber-cyan hover:bg-cyber-cyanLight text-slate-950 transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.3)]"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>

        {/* Digital Resume Document Container */}
        <div className="p-8 sm:p-12 rounded-3xl bg-cyber-card border border-cyber-border shadow-2xl space-y-12">
          {/* Header Block */}
          <div className="border-b border-cyber-border/80 pb-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-100 tracking-tight">
                {profileData.name}
              </h2>
              <p className="text-sm font-mono text-cyber-cyan mt-1">
                {profileData.heroTitle}
              </p>
              <p className="text-xs text-slate-400 mt-1">
                {profileData.degree} • {profileData.specialization}
              </p>
            </div>

            <div className="flex flex-col gap-1.5 text-xs font-mono text-slate-300">
              <a
                href={`mailto:${profileData.email}`}
                className="flex items-center gap-2 hover:text-cyber-cyan transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-cyber-cyan" />
                <span>{profileData.email}</span>
              </a>
              <a
                href={`tel:${profileData.phone}`}
                className="flex items-center gap-2 hover:text-cyber-cyan transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-cyber-cyan" />
                <span>+91 {profileData.phone}</span>
              </a>
              <div className="flex items-center gap-4 pt-1">
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-cyber-cyan transition-colors"
                >
                  <Github className="w-3.5 h-3.5 text-cyber-cyan" />
                  <span>GitHub</span>
                </a>
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-cyber-cyan transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-cyber-cyan" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* 1. Professional Summary */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-cyber-cyan mb-3 flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Professional Profile &amp; Positioning
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {profileData.positioning} {profileData.bio[0]} {profileData.bio[1]}
            </p>
          </div>

          {/* 2. Education */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-cyber-cyan mb-4 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              Education &amp; Academic Credentials
            </h3>

            <div className="space-y-6">
              {/* College */}
              <div className="p-5 rounded-2xl bg-cyber-surface border border-cyber-border">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h4 className="font-bold text-base text-slate-100">
                    {profileData.university}
                  </h4>
                  <span className="text-xs font-mono text-cyber-cyan">
                    {profileData.academicYear} (Present)
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  {profileData.degree} — Specialization in {profileData.specialization}
                </p>

                <div className="mt-3 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
                  <span>
                    CGPA: <strong className="text-cyber-cyan">{profileData.cgpa}</strong>
                  </span>
                  <span>•</span>
                  <span>
                    Elective: <strong className="text-slate-200">{profileData.professionalElective}</strong>
                  </span>
                </div>
              </div>

              {/* 12th */}
              <div className="p-4 rounded-xl bg-cyber-surface/60 border border-cyber-border/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h5 className="text-sm font-semibold text-slate-200">
                    Higher Secondary School Certificate (12th Grade)
                  </h5>
                  <span className="text-xs font-mono text-slate-400">Science Stream</span>
                </div>
                <span className="text-xs font-mono text-slate-300">
                  Score: <strong className="text-slate-100">{profileData.twelfthPercentage}</strong>
                </span>
              </div>
            </div>

            {/* Coursework */}
            <div className="mt-4 pt-4 border-t border-cyber-border/60">
              <span className="text-xs font-mono text-slate-400 block mb-2">
                Relevant Coursework:
              </span>
              <div className="flex flex-wrap gap-2">
                {profileData.coursework.map((course) => (
                  <span
                    key={course}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-cyber-surface border border-cyber-border text-slate-300"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 3. Technical Skills Summary */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-cyber-cyan mb-4 flex items-center gap-2">
              <Code2 className="w-4 h-4" />
              Technical Proficiencies
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
              <div className="p-4 rounded-xl bg-cyber-surface border border-cyber-border">
                <span className="text-slate-400 font-semibold block mb-1.5">Languages &amp; Core</span>
                <span className="text-slate-200">Python, C, C++, JavaScript (ES6+), HTML5, CSS3</span>
              </div>

              <div className="p-4 rounded-xl bg-cyber-surface border border-cyber-border">
                <span className="text-slate-400 font-semibold block mb-1.5">Frameworks &amp; Web</span>
                <span className="text-slate-200">React.js, Node.js, Express.js, Tailwind CSS</span>
              </div>

              <div className="p-4 rounded-xl bg-cyber-surface border border-cyber-border">
                <span className="text-slate-400 font-semibold block mb-1.5">AI/ML &amp; Data Analysis</span>
                <span className="text-slate-200">TensorFlow, Keras, Apache Spark, NumPy, Pandas, Scikit-learn, Matplotlib, Seaborn, NLP, TF-IDF</span>
              </div>

              <div className="p-4 rounded-xl bg-cyber-surface border border-cyber-border">
                <span className="text-slate-400 font-semibold block mb-1.5">Databases &amp; Cloud Tools</span>
                <span className="text-slate-200">MongoDB, MySQL, Vector Database, Git, GitHub, AWS, VS Code, Jira</span>
              </div>
            </div>
          </div>

          {/* 4. Projects */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-cyber-cyan mb-4 flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              Featured Technical Projects
            </h3>

            <div className="space-y-6">
              {projectsData.map((project) => (
                <div
                  key={project.id}
                  className="p-5 rounded-2xl bg-cyber-surface border border-cyber-border"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h4 className="font-bold text-base text-slate-100">{project.title}</h4>
                    <span className="text-xs font-mono text-cyber-cyan">{project.category}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 mb-3">{project.summary}</p>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-cyber-card border border-cyber-border text-slate-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {project.coreFeatures.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyber-emerald flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* 5. Achievements & Certifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Achievements */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-cyber-cyan mb-3 flex items-center gap-2">
                <Award className="w-4 h-4" />
                Honors &amp; Hackathons
              </h3>
              <div className="space-y-3">
                {achievementsData.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 rounded-xl bg-cyber-surface border border-cyber-border"
                  >
                    <div className="flex justify-between items-center text-xs font-mono">
                      <span className="text-cyber-cyan font-bold">{item.badge}</span>
                      <span className="text-slate-400">{item.year}</span>
                    </div>
                    <h5 className="font-semibold text-sm text-slate-100 mt-1">{item.title}</h5>
                    <p className="text-xs text-slate-400 mt-1">{item.issuer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-cyber-cyan mb-3 flex items-center gap-2">
                <Award className="w-4 h-4" />
                Certifications
              </h3>
              <div className="space-y-3">
                {certificationsData.map((cert) => (
                  <div
                    key={cert.id}
                    className="p-4 rounded-xl bg-cyber-surface border border-cyber-border"
                  >
                    <div className="flex justify-between items-center text-xs font-mono">
                      <span className="text-cyber-cyan">{cert.organization}</span>
                      <span className="text-slate-400">{cert.date}</span>
                    </div>
                    <h5 className="font-semibold text-sm text-slate-100 mt-1">{cert.name}</h5>
                    <p className="text-xs font-mono text-slate-400 mt-1">
                      Credential ID: {cert.credentialId}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
