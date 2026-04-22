# AIOpsForge Design Rules

Non-negotiables. Enforce in every page, every component, every commit.

## Visual

1. **Dark-first.** `#0a0a0a` → `#1a1a1a` backgrounds. Light theme is a swap, not a parallel design.
2. **One accent: `#00FF41` (terminal green).** Primary action, focus, active state, inline emphasis on numbers/keywords. Never decorative. Never as a background fill for large areas.
3. **Zero border-radius.** Cards, buttons, inputs, images, modals — all sharp corners. `--radius: 0`.
4. **1px `#2a2a2a` borders.** Hover: `#00FF41`. That's the only border-color change.
5. **No shadows in dark mode.** Elevation comes from background brightness (`#0a0a0a` → `#121212` → `#1a1a1a`).
6. **No emoji. No gradients. No glassmorphism. No rounded typefaces.**

## Typography

7. **Three fonts, strict roles:**
   - **Space Grotesk** — display (H1-H3), tight tracking `-0.02em`
   - **IBM Plex Sans** — body, `1.55` leading
   - **JetBrains Mono** — labels, buttons, code, meta, status. **UPPERCASE with `0.08em` tracking for UI chrome.**
8. **Sentence case** for body/buttons/UI labels. ("Run deployment", not "Run Deployment".)
9. **UPPERCASE** for system labels, meta, status — anything in JetBrains Mono.
10. **Numbers always numeric.** "3 agents", not "three agents".

## Motion

11. **Only animate `transform`, `opacity`, `border-color`.** Never `width`, `height`, `margin`, `padding`.
12. **Durations:** 150ms micro, 200ms default, 350ms entrance. Never longer.
13. **Easing:** `cubic-bezier(0.2, 0, 0, 1)`. No bounce, no springs.
14. **Respect `prefers-reduced-motion`.** Disable transform, keep opacity at 100ms max.

## Interaction

15. **Card hover:** border → `#00FF41`, `translateY(-2px)`, 200ms. No shadow change. No background change.
16. **Button hover (primary):** `#33ff66`. Pressed: `#00cc34`.
17. **Button hover (secondary):** border → `#00FF41`.
18. **Disabled:** `opacity: 0.4`, `cursor: not-allowed`.
19. **Focus ring:** `1px solid #00FF41` + `0 0 0 3px rgba(0,255,65,0.15)`.

## Layout

20. **Max content width:** 1100px.
21. **Spacing:** 4px base grid. Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96.
22. **Card padding:** 24px. Inline controls: 8-12px.

## Voice

23. **Operator-to-operator.** Short, declarative, present-tense. No hedging, no pleasantries.
24. **No exclamation marks.** No `:)`. No playful capitalization.
25. **Em dashes for asides** — no spaces around them.
