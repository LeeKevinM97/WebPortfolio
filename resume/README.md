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

## Clean
From repo root:

```bash
latexmk -cd -c resume/resume.tex
```
