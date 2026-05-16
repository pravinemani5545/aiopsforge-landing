# AIOpsForge Landing Site

## Project Overview
Static 3-page marketing site for AIOpsForge — an AI systems community selling $9.99/month memberships via Whop.

## Tech Stack
- Pure HTML/CSS — no frameworks, no build step
- Google Fonts: JetBrains Mono, Space Grotesk, IBM Plex Sans
- Vanilla JS (FAQ accordion only)
- Deployed on Vercel (auto-deploys from GitHub)

## Pages
- `index.html` — Landing/sales page (Terminal DS hero split + stats strip + 9 feature cards)
- `blogs.html` — Blog with prefilled template posts + category filter
- `tools.html` — 11 Systems build roadmap
- `pricing.html` · `newsletter.html` · `custom-solutions.html`
- `aifounder/index.html` — Sibling product landing (credit-based AI tools platform)
- `community/*` — Auth-gated subpages (skills, prompts, workflows, landscape, tools, etc.)
- `sandbox/*` — Public preview mirrors of community pages

## Design System (Terminal DS)
- Built on Anthropic's `terminal-design` skill at `~/.claude/skills/terminal-design/`
- Full pattern library + tokens + voice rules: `~/Desktop/Terminal-DS-Implementation-Guide.md`
- Tokens at `/design-system/tokens.css` — import BEFORE any inline `<style>` block
- Project-agnostic re-apply via `/design-system` skill (guided interview: accent, vibe, theme, motion, exclusions)
- **Non-negotiables:** dark-first, one accent (#00FF41), zero border-radius, 1 px #2a2a2a borders, three fonts in strict roles (Space Grotesk display / IBM Plex Sans body / JetBrains Mono UPPERCASE chrome with 0.08–0.12em tracking), animate only transform/opacity/border-color, no shadows in dark mode, no emojis, no gradients (except subtle white→grey on H1 text)
- **Glow palette:** green, red, dark blue (#1e40af), purple, light blue (#4488ff). **No cyan/teal.** **No amber.** Distribute so no two adjacent cards share color/family (algorithm in §7 of Implementation Guide).
- **Terminal mock chrome:** neutral `--border` squares, NOT macOS-colored circles. LIVE indicator + pulse dot + blinking $ cursor at bottom.
- **Card preview patterns:** 8 unique treatments (notification feed, curriculum tracker, terminal ls, comparison grid, Claude UI mock, agent dashboard, app launcher, profile picker) — never repeat the same pattern across cards in one grid.

## Links
- All CTAs point to: https://whop.com/ai-ops-forge/
- GitHub: https://github.com/pravinemani5545/aiopsforge-landing
- Vercel: https://aiopsforge-landing.vercel.app

## Deployment
Push to `main` branch auto-deploys to Vercel. No build command needed — static files served directly.

## Rules
- Keep everything in single HTML files with inline `<style>` blocks
- No external CSS frameworks
- No JavaScript frameworks
- Maintain consistent nav bar across all pages
- Brand name is "AIOpsForge" (exact casing)
