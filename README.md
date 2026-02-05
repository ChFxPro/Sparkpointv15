updated 02/05/2026

 # SparkPoint V15

This repository contains the SparkPoint V15 website codebase. The original project is available at https://www.figma.com/design/eiECrQAtFNx2YuehI5swOs/SparkPoint-V15.

## Local development

Install dependencies:
```bash
npm ci
```

Start the dev server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

## Deployment (GitHub Pages)

Deploys automatically on every push to `main` via GitHub Actions.

Notes:
- Vite output directory is `/build` (see `vite.config.ts`).
- GitHub Pages base path is `/sparkpointv15/`.

## Warning

Figma Make should only write to design/output paths (e.g. `src/`, `src/assets/`) and must not touch infrastructure files like `.github/workflows/**`, `.gitignore`, `package.json`, `package-lock.json`, `vite.config.ts`, or `README.md`.
