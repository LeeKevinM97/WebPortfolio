# Resume Workspace

This folder is compartmentalized for LaTeX resume work only.

## Files
- `resume.tex`: main resume source
- `assets/Picture.jpeg`: resume headshot
- `resume.pdf`: generated output

## Build
From repo root:

```bash
latexmk -cd -pdf -interaction=nonstopmode -file-line-error resume/resume.tex
```

## Resume Notes
- Keep the resume reverse chronological.
- Keep education specialization/certificate on the same line as the degree, but not bolded.
- Prefer conservative terminology for technologies and platform names.
- Use `cloud infrastructure` or `cloud services` instead of generic `cloud security` unless the security-specific meaning is explicit.
- Avoid adding emerging tools like `Temporal` until the system role can be explained clearly in interviews.

## Clean
From repo root:

```bash
latexmk -cd -c resume/resume.tex
```
