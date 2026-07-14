# Omar Fahmy — Perception Engineer Portfolio

A single-page portfolio built with React + Vite + Tailwind CSS. Design language: a
bird's-eye-view (BEV) grid backdrop and detection-box "corner bracket" hover states on
project cards — both drawn directly from perception-engineering visual conventions
(RViz/point-cloud viewers, YOLO-style bounding boxes).

## Editing content (do this, not the components)

**Everything you'll want to change lives in one file: `src/data/content.js`.**

- Your name, tagline, email, GitHub/LinkedIn links → `profile`
- Featured (top 4) projects → `featuredProjects`
- Smaller supporting projects → `secondaryProjects`
- Work history → `experience` / `internships`
- Skills → `skills`
- Education, certifications, awards → `education`, `certifications`, `awards`

Add a new project by copying an existing object in the array and editing the fields.
No other file needs to change for content updates — components just render whatever is
in this file.

## Run it locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Build for production

```bash
npm run build
```

Outputs static files to `dist/`.

## Deploy

See `DEPLOY.md` for step-by-step GitHub Pages and Vercel instructions.
