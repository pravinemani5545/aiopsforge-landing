# AIOpsForge Design System

Adapted from a Terminal Design System handoff (Claude Design, April 2026). This is not a copy-paste of the original — it's been critically reviewed against the existing AIOpsForge codebase and only the genuine improvements were integrated.

## What's here

```
design-system/
├── README.md         ← you are here
├── tokens.css        ← shared CSS custom properties (DROP-IN)
├── rules.md          ← non-negotiables quick reference
└── preview/          ← visual specimen cards (open in browser)
```

## What was taken (improvements)

| Token/Feature | Why |
|---|---|
| Type scale variables (`--text-xs` → `--text-5xl`) | Eliminates hardcoded px values across pages |
| Spacing scale (`--space-1` → `--space-9`) | Enforces 4px grid, replaces ad-hoc values |
| Motion tokens (`--ease`, `--dur-*`) | Productive easing `cubic-bezier(0.2,0,0,1)` is smoother than `ease-out` |
| Font variables (`--font-display/body/mono`) | DRYs up repeated font-family strings |
| Line-height + tracking vars | Consistency across pages |
| `--accent-soft`, `--accent-glow` | Missing opacity tiers for hover fills and focus glow |
| `--warn: #ffb020` | Warning/pending status color was missing |
| `--border-strong: #3a3a3a` | Emphasized border tier was missing |
| `--text-muted: #444444` | Fourth text tier for rare divider-as-text use |
| `--selection-bg` | Green text selection highlight |
| `::selection` styling | Polished detail |
| `prefers-reduced-motion` | Accessibility requirement |
| `--btn-h`, `--input-h` sizing | Component height consistency |
| `--radius: 0` | Explicit enforcement of zero border-radius |
| Preview HTML specimens | Visual reference for components |

## What was rejected

| Item | Why |
|---|---|
| Variable renaming (`--fg-1` vs `--text-primary`) | Current names are more readable and already established |
| SVG logos | Wrong brand — these are for a generic "Terminal" product |
| React JSX components | Wrong stack — AIOpsForge is vanilla HTML/CSS |
| `--danger: #ff3b30` replacing `--red` | Current `#ff4444` is fine, no reason to change |
| Semantic CSS classes (`.h1`, `.h2`, `.body`) | Would cascade-conflict with existing inline styles |
| `--content-max: 1200px` | Site uses 1100px deliberately |
| Lucide icon system | Adds CDN dependency for marginal gain |
| Base `html, body` styles | Would conflict with page-specific inline styles |
| `kit_demo.html` | React demo for a different product |

## How to use `tokens.css`

**Option A — Import in new pages:**
```html
<link rel="stylesheet" href="/design-system/tokens.css">
<style>
  /* Your page-specific styles here — they override tokens.css */
</style>
```

**Option B — Reference only:**
Copy specific variables into your inline `<style>` block as needed. The file documents every token available.

**Important:** If imported, `tokens.css` must come BEFORE inline `<style>` blocks. CSS source order means inline definitions override anything in the tokens file — no conflicts.

## Token quick reference

```css
/* Backgrounds */     --bg-primary · --bg-secondary · --bg-tertiary · --bg-card · --bg-card-hover
/* Text */            --text-primary · --text-secondary · --text-dim · --text-muted
/* Border */          --border · --border-strong · --border-green
/* Accent */          --green · --green-dim · --green-glow · --green-glow-strong · --accent-soft · --accent-glow
/* Status */          --red · --red-dim · --warn · --blue
/* Selection */       --selection-bg

/* Type scale */      --text-xs(11) · --text-sm(13) · --text-base(15) · --text-md(17) · --text-lg(20) · --text-xl(24) · --text-2xl(32) · --text-3xl(44) · --text-4xl(60) · --text-5xl(80)
/* Line height */     --lh-tight(1.1) · --lh-snug(1.25) · --lh-body(1.55)
/* Tracking */        --track-tight(-0.02em) · --track-wide(0.08em)
/* Weight */          --w-regular(400) · --w-medium(500) · --w-semibold(600) · --w-bold(700)

/* Spacing (4px) */   --space-1(4) · 2(8) · 3(12) · 4(16) · 5(24) · 6(32) · 7(48) · 8(64) · 9(96)
/* Sizing */          --btn-h(40) · --btn-h-compact(32) · --btn-h-prominent(48) · --input-h(40)
/* Motion */          --ease · --dur-micro(150ms) · --dur-base(200ms) · --dur-entrance(350ms) · --stagger(60ms)
/* Radius */          --radius: 0 (NEVER CHANGE)
```

## Design rules

See `rules.md` for the full non-negotiables list. The short version:

1. Dark-first. `#0a0a0a` → `#1a1a1a` backgrounds.
2. One accent: `#00FF41`. Never decorative. Never as background fill.
3. Zero border-radius. Everywhere.
4. Three fonts, strict roles. JetBrains Mono UPPERCASE for UI chrome.
5. Only animate `transform`, `opacity`, `border-color`. 150-350ms productive easing.
6. No shadows in dark mode. Elevation = brightness + border.
7. No emoji. No gradients. No glassmorphism.

## Origin

Source: Claude Design handoff (`design_handoff_terminal_ds/`), generated from the AIOpsForge design brief. The handoff used a fictional "Terminal" product name — all references have been adapted for AIOpsForge.
