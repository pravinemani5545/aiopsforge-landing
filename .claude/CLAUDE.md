# AIOpsForge Landing Site

## Project Overview
Static 3-page marketing site for AIOpsForge — an AI systems community selling $9.99/month memberships via Whop.

## Tech Stack
- Pure HTML/CSS — no frameworks, no build step
- Google Fonts: JetBrains Mono, Space Grotesk, IBM Plex Sans
- Vanilla JS (FAQ accordion only)
- Deployed on Vercel (auto-deploys from GitHub)

## Pages
- `index.html` — Landing/sales page (11 sections)
- `blogs.html` — Blog with prefilled template posts + category filter
- `tools.html` — 11 Systems build roadmap

## Design System
- Dark theme: #0a0a0a primary, #111111 secondary
- Accent: #00FF41 (terminal green)
- Zero border-radius everywhere — all sharp corners
- No emojis in the UI
- Font usage: JetBrains Mono (labels/code/CTAs), Space Grotesk (headlines), IBM Plex Sans (body)

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
