# SparkPoint V15

This repository contains the SparkPoint V15 website codebase, built with **Vite + React + TypeScript** and deployed via **GitHub Pages**.

The original design source lives in Figma:  
https://www.figma.com/design/eiECrQAtFNx2YuehI5swOs/SparkPoint-V15

---

## Live Site

Production site (GitHub Pages):  
👉 https://chfxpro.github.io/sparkpointv15/

> ⚠️ Important: This site is served from a **subdirectory**, not the domain root.  
> This affects build configuration (see Deployment section).

---

## Tech Stack

- Vite
- React (SWC)
- TypeScript
- GitHub Pages (via GitHub Actions)
- Figma Make–generated assets & aliases

---

## Local Development

### Install dependencies
```bash
npm install
Run the dev server
npm run dev
This starts the site locally at:
http://localhost:3000
Production Build (Local Check)
Before deploying, you can sanity-check the production build locally:
npm run build
npm run preview
This simulates the GitHub Pages output and helps catch asset-path issues early.
Deployment (GitHub Pages)
Deployment is fully automated via GitHub Actions.
How it works
On push to main, GitHub Actions:
Installs dependencies using package-lock.json
Runs the Vite build
Uploads the build output as a Pages artifact
Deploys to GitHub Pages
Critical Configuration (Do Not Remove)
Because GitHub Pages serves this site from /sparkpointv15/, the following must exist in vite.config.ts:
base: '/sparkpointv15/',
If this is missing or changed:
The site will deploy successfully
The page will load blank
JS and CSS files will 404
This is expected behavior for Vite + GitHub Pages subpaths.
Build Output
Vite outputs production files to:
/build
The GitHub Actions workflow uploads this directory directly.
build/, dist/, and node_modules/ are intentionally ignored by git.
Git Hygiene
This repo intentionally ignores:
node_modules/
build/
dist/
.DS_Store
These files should never be committed.
If you see Codespaces prompting to track node_modules, always choose No.

Accessibility & Structure Notes
Designed with WCAG 2.1 AA considerations in mind
Semantic HTML and consistent heading structure
Reduced-motion preferences respected via CSS/JS
Structured data is embedded via React components
Common Gotchas
Blank page after deploy → check base in vite.config.ts
404 JS/CSS assets → confirm repo name + lowercase path
Deploy succeeds but site looks old → hard refresh + confirm latest Action ran
Push rejected → run git pull --rebase origin main
Maintainers
SparkPoint
Built & maintained by North Bend Consulting
