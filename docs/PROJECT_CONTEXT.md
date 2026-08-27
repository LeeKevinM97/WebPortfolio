# Project Context

## Purpose
- Personal website + resume workflow for `https://leekevinm.com`.
- Current immediate priority: resume quality and hiring outcomes.
- Secondary phase: modernize web portfolio stack and security hardening.

## Deployment Notes
- Repo hosted on GitHub.
- Webhook deploys the site to `leekevinm.com`.
- Domain registrar: GoDaddy.

## Current Stack
- Frontend: React (Create React App), TailwindCSS.
- Resume source: LaTeX file at `resume/resume.tex`.
- Resume PDF output: `resume/resume.pdf` (generated locally).

## Editing Conventions
- Keep secrets out of git (`.env` only, never commit populated env files).
- Use `.env.example` as a template for required variables.
- Keep resume edits under the `resume/` folder and rebuild with `latexmk`.

## Resume Workstream (Active)
- Audience lens:
  - Senior Engineering Manager: impact, ownership, system complexity, execution.
  - Senior HR: clarity, progression, consistency, role alignment, keyword coverage.
- Goal: one-page resume with quantified outcomes and strong scannability.

## Next Steps Queue
1. Resume content rewrite by target role family (Software/Data/Platform).
2. ATS-focused wording pass and keyword tuning per job description.
3. Portfolio modernization and dependency/security updates.
