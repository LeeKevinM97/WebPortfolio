# Website Modernization Plan

  ## Summary
  - Keep the site static on GoDaddy + GitHub Pages for now; do not move to a backend or server-rendered framework unless we later need it.
  - Do a real frontend refresh: migrate off Create React App, update the package/tooling stack, remove redundant Tailwind loading, and harden the contact form.
  - Current scan found no committed private keys or cloud access keys; the only exposed identifiers are public client-side values like EmailJS config and the Google Analytics tag.
  - Use the extra breathing room to make the website more verbose and case-study oriented instead of keeping the current compact card-heavy feel.

  ## Key Changes
  - Toolchain: migrate from `react-scripts` to `Vite`, bump Node to 20+, and update the app to React 19 and Tailwind CSS 4.
  - Public interface changes: rename EmailJS env vars so they read like public config, update build output from `build/` to `dist/`, and keep the current `HashRouter` behavior so GitHub Pages stays simple.
  - Deployment: replace the local `gh-pages` publish flow with a GitHub Actions build-and-deploy path once the Vite migration lands.
  - Security: remove the Tailwind CDN script from `public/index.html`, keep `.env` out of git, keep `.env.example` blank/safe, and add EmailJS origin allowlisting plus CAPTCHA.
  - Dependency cleanup: remove unused packages such as `dotenv`, audit the rest of the dependency tree, and decide whether to consolidate icon packages if they are redundant.
  - Content and UX: rewrite the homepage, About, and Projects copy to be more narrative and specific, with fuller explanations of impact, process, and outcomes.
  - Layout and interaction: move away from the current card/timeline feel toward stronger hero copy, denser case-study sections, better mobile flow, and more intentional typography.
  - Code hygiene: fix JSX issues like `class` to `className`, add `rel="noopener noreferrer"` to external links, and make clickable controls actual buttons for accessibility.
  - Performance and SEO: add proper title/description/Open Graph metadata, lazy-load heavy project media, compress images/video, and make the initial load lighter.

  ## Test Plan
  - Build the app locally after each major migration step and verify the production bundle works under the GitHub Pages deployment model.
  - Smoke-test the contact form with EmailJS protections enabled and confirm the public config still works from the deployed domain.
  - Run a secret/config scan before deploy to confirm no real secrets are tracked and no private values leaked into client code.
  - Manually verify desktop and mobile behavior for navigation, theme toggle, project modals/pages, 404 handling, and external links.
  - Keep at least one lightweight automated smoke test and migrate it with the toolchain so the new setup still has a basic regression check.

  ## Assumptions
  - The site remains a static portfolio site hosted through GitHub Pages with the GoDaddy custom domain.
  - We are optimizing for a modern portfolio and maintainable toolchain, not for SSR, a blog, or a full app rewrite.
  - `EmailJS` remains the contact mechanism for now, with origin restrictions and CAPTCHA handling abuse risk.
  - `GraphDB` and `Temporal` are future backend-architecture ideas for the workstream, but they do not belong in the public website until they are real and interview-ready.