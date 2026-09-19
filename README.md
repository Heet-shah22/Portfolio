# Heet Shah — Personal Portfolio Website

A modern, high-performance, cybersecurity-inspired personal portfolio website built for **Heet Shah** — B.Tech Computer Science and Engineering (Cyber Security and Forensics) student at MIT World Peace University (MIT-WPU), Pune.

---

## 🚀 Quick Start

### 1. Installation
```bash
npm install
```

### 2. Local Development
```bash
npm run dev
```
The application will launch at `http://localhost:3000/`.

### 3. Production Build & Typecheck
```bash
npm run build
```
Generates an optimized, tree-shaken static production bundle in the `dist/` directory.

### 4. Local Production Preview
```bash
npm run preview
```

---

## 🛠️ Technology Stack & Architecture

- **Core**: React 18 + TypeScript + Vite 6
- **Styling**: Tailwind CSS with custom cyber-minimalist design tokens (deep charcoal `#070a0f`, electric cyan `#06b6d4`, emerald `#10b981`) and glassmorphic cards
- **Icons**: Lucide React
- **Routing**: React Router v6 with `ScrollToTop` router listener
- **Visuals**: Canvas-based interactive network topology with live packet simulation
- **Architecture Visualizer**: Custom interactive component with step navigation, play/pause controls, and stage callouts

---

## 📂 Project Structure & Data Layer

All content is strictly separated from component code so you can update your portfolio without modifying UI components:

```
├── public/
│   ├── assets/
│   │   ├── resume.pdf               # Downloadable resume PDF
│   │   ├── profile-photo.svg        # Default profile avatar
│   │   ├── certificate-preview.svg  # Certificate preview image
│   │   ├── project-ecorevive.svg    # EcoRevive project illustration
│   │   ├── project-stock.svg        # Stock Market Analysis graphic
│   │   └── project-text.svg         # Text Predictor LSTM graphic
│   ├── robots.txt                   # Search crawler directives
│   └── sitemap.xml                  # SEO route sitemap
│
├── src/
│   ├── data/
│   │   ├── profile.ts               # Name, title, contact, bio, education, coursework
│   │   ├── projects.ts              # Projects, case studies, and architecture stages
│   │   ├── skills.ts                # Technical skill items & categories
│   │   ├── certifications.ts        # Certifications and verification links
│   │   ├── achievements.ts          # Hackathons and competition awards
│   │   └── timeline.ts              # Academic and career milestone journey
│   │
│   ├── components/
│   │   ├── common/                  # SEO, ScrollProgress, BackToTop, Toast, LoadingScreen, Modal, CustomCursor
│   │   ├── layout/                  # Navbar, MobileMenu, Footer
│   │   ├── home/                    # Hero, NetworkCanvas
│   │   ├── projects/                # ProjectCard, ArchitectureDiagram
│   │   ├── skills/                  # SkillCard
│   │   └── contact/                 # ContactForm
│   │
│   ├── pages/                       # Home, About, Skills, Projects, ProjectDetail, Journey, Certifications, Resume, Contact, NotFound
│   ├── types/                       # TypeScript interfaces
│   └── styles/                      # Tailwind directives and cyber design tokens
```

---

## ✏️ How to Update Content

### 1. Update Bio, Contact Details, or Education
Edit `src/data/profile.ts`:
- Change `email`, `phone`, `github`, or `linkedin`
- Update `cgpa` or `academicYear`
- Modify `coursework` or `bio`

### 2. Replace Profile Photo
- Place your photo (e.g. `profile-photo.jpg` or `profile-photo.png`) into `public/assets/`
- In `src/data/profile.ts`, change `profilePhoto: '/assets/profile-photo.png'`

### 3. Replace Resume PDF
- Replace `public/assets/resume.pdf` with your updated resume PDF file. The "Download Resume" buttons on the Hero, Resume page, and Mobile Drawer will immediately serve your new PDF.

### 4. Add or Modify Projects
Edit `src/data/projects.ts`:
- Add a new project object matching the `Project` interface in `src/types/index.ts`
- Include `slug`, `title`, `category`, `technologies`, `problem`, `solution`, `architectureStages`, and `githubUrl`
- The project detail page `/projects/:slug` is generated automatically!

### 5. Add New Skills
Edit `src/data/skills.ts`:
- Add items with name, category, and neutral proficiency level (`'Working Knowledge'`, `'Familiar'`, or `'Learning'`).

### 6. Add Certifications or Hackathon Awards
- Certifications: Edit `src/data/certifications.ts`
- Hackathons: Edit `src/data/achievements.ts`

---

## 🌐 Connecting a Live Contact Form Backend

In `src/components/contact/ContactForm.tsx`, replace the simulated async dispatch with one of these services:

### Option A: Formspree (Free & Simple)
1. Sign up at [formspree.io](https://formspree.io) and create a new form.
2. Update `handleSubmit` in `ContactForm.tsx`:
```ts
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});
```

### Option B: EmailJS
1. Install `@emailjs/browser`: `npm install @emailjs/browser`
2. Configure your Service ID, Template ID, and Public Key.

---

## 🚢 Deployment Guide

### Deploying to Vercel

1. Push your repository to GitHub:
```bash
git init
git add .
git commit -m "Initial commit: Heet Shah portfolio"
git remote add origin https://github.com/Heet-shah22/portfolio.git
git push -u origin main
```
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Framework Preset: **Vite**.
5. Build Command: `npm run build`.
6. Output Directory: `dist`.
7. Click **Deploy**.

To ensure client-side routing works on Vercel without 404s on page refresh, a `vercel.json` rewrite file is already configured.

### Deploying to Netlify

1. Create a `public/_redirects` file with:
```
/*    /index.html   200
```
2. Import repo in Netlify, set Build Command to `npm run build` and Publish Directory to `dist`.

---

## 🔒 Security & Code Quality

- No hardcoded secrets or API tokens.
- Factually accurate content aligned with official academic standing.
- WCAG AA color contrast ratios and keyboard accessible dialogs/menus.
- Full `prefers-reduced-motion` compliance.
