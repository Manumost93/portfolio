# Manuel Honrado Vega — Personal Portfolio

> Personal portfolio website built with React, TypeScript, Vite and Tailwind CSS.  
> Designed as a dark technical dashboard to showcase my skills, projects and professional profile.

**Live:** _coming soon_  
**Author:** Manuel Honrado Vega  
**Email:** myjhonradov@gmail.com  
**LinkedIn:** [linkedin.com/in/manuel-honrado-desarrollador](https://www.linkedin.com/in/manuel-honrado-desarrollador)  
**GitHub:** [github.com/Manumost93](https://github.com/Manumost93)

---

## About

This portfolio presents my profile as a **Junior Fullstack Developer** with a hybrid background:

- Software development in React, TypeScript and ASP.NET Core / .NET
- Real technical experience in maintenance, installations, operations and facility environments

The visual design is inspired by industrial dashboards and SaaS dark interfaces — professional, clean and technical. Built as a single-page application with smooth animations, responsive layout and a sidebar navigation.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Language | TypeScript |
| Build tool | Vite |
| Styling | Tailwind CSS v3 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Package manager | npm |

---

## Features

- **Hero section** — Introduction, availability badge, CTA buttons and interactive terminal status block
- **Quick stats** — Animated metric cards showing experience, projects, technologies and commitment
- **Projects showcase** — 5 project cards with visual UI mockups, tech stack pills and direct GitHub links
- **Tech stack grid** — Technologies organized by category: Languages, Frontend, Backend & Data, Tools
- **Skill levels** — Animated progress bars with honest junior-level self-assessment
- **Interest areas** — 5 professional focus cards: Web Dev, Automation, Smart Buildings / BMS, Facility Tech, Cybersecurity
- **Experience timeline** — Work history, internship and personal projects with key highlights
- **Education** — DAM degree card with complementary learning tags
- **Contact section** — Email, LinkedIn, GitHub and CV download in a clean grid layout
- **Footer** — Minimal footer with external profile links
- **Responsive navigation** — Desktop: fixed left sidebar with status indicator. Mobile: collapsible top navigation bar
- **Smooth animations** — Framer Motion scroll-triggered entrance animations and hover micro-interactions
- **Dark dashboard aesthetic** — Navy / slate background, electric blue accents, emerald status indicators, translucent cards

---

## Project Structure

```
portfolio/
├── public/
│   └── CV_Manuel_Honrado.pdf        ← place your CV PDF file here
│
├── src/
│   ├── main.tsx                     ← application entry point
│   ├── App.tsx                      ← root component, assembles all sections in order
│   ├── index.css                    ← Tailwind directives + Inter font import
│   │
│   ├── data/                        ← all static content lives here
│   │   ├── profile.ts               ← name, bio, email, LinkedIn, GitHub, CV path, terminal lines
│   │   ├── stats.ts                 ← quick metric cards (value, label, icon, color)
│   │   ├── projects.ts              ← project cards (name, description, stack, GitHub URL, demo URL)
│   │   ├── skills.ts                ← tech categories, skill level percentages, interest areas
│   │   └── experience.ts            ← work experience items + education items
│   │
│   └── components/
│       ├── Layout.tsx               ← page wrapper, applies sidebar left offset on desktop
│       ├── Sidebar.tsx              ← fixed desktop sidebar + collapsible mobile top bar
│       ├── SectionHeader.tsx        ← reusable section title with label badge and divider line
│       ├── BrandIcons.tsx           ← custom SVG icons for GitHub and LinkedIn (not in lucide-react)
│       ├── Hero.tsx                 ← hero section: name, tagline, bio, buttons, terminal block
│       ├── Stats.tsx                ← 4 animated metric cards in a responsive grid
│       ├── Projects.tsx             ← project grid with per-type visual mockups built with divs
│       ├── Skills.tsx               ← tech stack grouped by category
│       ├── SkillLevels.tsx          ← skill progress bars with animated fill on scroll
│       ├── InterestAreas.tsx        ← 5 professional interest cards with icons
│       ├── Experience.tsx           ← timeline-style cards for work, internship and personal projects
│       ├── Education.tsx            ← education degree card with extras list
│       ├── Contact.tsx              ← contact grid: email, LinkedIn, GitHub, CV download
│       └── Footer.tsx               ← footer with copyright and profile links
│
├── tailwind.config.js               ← Tailwind content paths and theme extensions
├── vite.config.ts                   ← Vite build configuration
├── tsconfig.json                    ← TypeScript root config
├── tsconfig.app.json                ← TypeScript app config
└── package.json                     ← scripts and dependencies
```

---

## Getting Started

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/) — version **18 or higher**
- **npm** — included automatically with Node.js

Check your versions by running:

```bash
node --version
npm --version
```

---

### Step 1 — Navigate to the project folder

If you already have the project locally:

```bash
cd portfolio
```

If you are cloning from GitHub:

```bash
git clone https://github.com/Manumost93/YOUR_PORTFOLIO_REPO.git
cd YOUR_PORTFOLIO_REPO
```

---

### Step 2 — Install dependencies

```bash
npm install
```

This will download all required packages (React, Tailwind, Framer Motion, etc.) into `node_modules/`.  
It only needs to be run once, or again after pulling new changes.

---

### Step 3 — Start the development server

```bash
npm run dev
```

Open your browser and go to:

```
http://localhost:5173
```

The server **hot-reloads automatically** — any file you save will instantly update in the browser without refreshing.

---

### Step 4 — Build for production

When you are ready to deploy:

```bash
npm run build
```

The optimized output will be generated in the `dist/` folder.

---

### Step 5 — Preview the production build

To locally test the production build before deploying:

```bash
npm run preview
```

---

## Customization Guide

All site content is in `src/data/` — edit these files to update the site without touching any component.

| File | What to edit |
|---|---|
| `src/data/profile.ts` | Name, bio, email, LinkedIn URL, GitHub URL, CV path, terminal lines |
| `src/data/projects.ts` | Project name, description, tech stack, GitHub link, demo link |
| `src/data/skills.ts` | Tech categories, skill percentages, interest area cards |
| `src/data/experience.ts` | Work experience entries, education degree, extras |
| `src/data/stats.ts` | Metric card values and labels |

### Adding your CV PDF

Drop your PDF file into the `public/` folder:

```
public/CV_Manuel_Honrado.pdf
```

The "Download CV" buttons in the Hero and Contact sections will work automatically.

### Updating project demo URLs

Once a project is deployed online, open `src/data/projects.ts` and replace `demoUrl: '#'` with the real URL:

```ts
demoUrl: 'https://your-project.vercel.app',
```

---

## Deployment

This is a fully static site — it can be deployed to any static hosting platform.

**Recommended options:**

| Platform | How to deploy |
|---|---|
| [Vercel](https://vercel.com) | Connect your GitHub repo → auto-deploys on every push |
| [Netlify](https://netlify.com) | Drag & drop the `dist/` folder, or connect your repo |
| [GitHub Pages](https://pages.github.com) | Use the `gh-pages` npm package or a GitHub Actions workflow |

---

## License

This project and all its content are the intellectual property of **Manuel Honrado Vega**.  
The code architecture may be used as a reference, but the personal content — bio, projects, experience, identity — is not for reuse.

---

_Built by [Manuel Honrado Vega](https://github.com/Manumost93) · 2025_
