# Resume Workflow (VSCode + LaTeX)

## One-Time Setup
1. Install MacTeX or TeX Live (already present if `latexmk` works in terminal).
2. Open this repo in VSCode.
3. Install recommended extension: `James-Yu.latex-workshop`.

## Repo Config Added
- `.vscode/extensions.json`: recommends LaTeX extension.
- `.vscode/settings.json`: sets `latexmk` recipe and PDF tab preview.
- `.vscode/tasks.json`:
  - `Resume: Build PDF`
  - `Resume: Clean Artifacts`

## File Locations
- Source: `resume/resume.tex`
- Headshot image: `resume/assets/Picture.jpeg`
- Output: `resume/resume.pdf`

## Build Commands
- Build once:
  - `latexmk -cd -pdf -interaction=nonstopmode -file-line-error resume/resume.tex`
- Clean aux files:
  - `latexmk -cd -c resume/resume.tex`

## Quality Bar (EM + HR Lens)
- Bullet quality:
  - Start with strong action verb.
  - Include technical scope + business impact.
  - Prefer quantified outcomes (`%`, `$`, latency, throughput, time saved).
- Structure:
  - Reverse chronological.
  - Consistent tense and formatting.
  - Most relevant experience in first half page.
- ATS:
  - Include role-relevant keywords from target job postings.
  - Avoid graphics-heavy structure that breaks text extraction.
  - Keep section names standard (`Experience`, `Projects`, `Education`, `Skills`).
- Terminology rules from recent review:
  - List experience in reverse chronological order.
  - Keep education specialization/certificate on the same line as the degree, but not bolded.
  - Prefer `cloud infrastructure` or `cloud services` over generic `cloud security` unless the vendor is actually security-specific.
  - Prefer exact casing for tools, such as `npm`.
  - Avoid vague stack labels like `Big Data` unless it is an official internal name the user can defend.
  - It is fine to mention observability tools like `Graylog`, `Prometheus`, `Grafana`, and `PostHog` when they reflect real usage.
