# Security Baseline

## Current Checks Run
- Secret-pattern scan across tracked source files.
- Review of env-variable usage in client code.
- Review of ignore rules for local secrets and generated files.

## Findings (Current)
- No committed private keys or obvious cloud access keys found.
- Frontend uses:
  - `REACT_APP_EMAILJS_TOKEN`
  - `REACT_APP_SERVICEID`
- Important: `REACT_APP_*` values are embedded in frontend builds and are public by design.

## Immediate Safeguards
- Keep `.env` out of git (already ignored).
- Use `.env.example` with blank placeholders only.
- Never store admin/API secrets in React client env vars.

## Risks to Manage
- Contact form abuse/spam if EmailJS endpoint is not constrained.
- Dependency aging in Create React App ecosystem.
- Possible outdated transitive packages over time.

## Recommended Hardening
1. Add EmailJS-side protections (origin restrictions, rate limits, CAPTCHA).
2. Run `npm audit` regularly and triage high/critical findings.
3. Add GitHub secret scanning + Dependabot alerts on the repo.
4. Add security headers at hosting layer:
   - `Content-Security-Policy`
   - `X-Content-Type-Options`
   - `Referrer-Policy`
   - `Strict-Transport-Security`
5. Plan migration off legacy CRA stack in portfolio modernization phase.

## Pre-Deploy Security Checklist
- No `.env*` with real values tracked.
- No hardcoded tokens in JS/TS.
- Contact form protections enabled.
- Dependencies audited.
- Build and deploy performed from clean git state.
