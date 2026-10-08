# NULLWAVE — Brutalist Studio / Label Landing

Demo landing page for **NULLWAVE**, a fictional creative studio and electronic music label. Brutalist-cyberpunk aesthetic: dark mode, high contrast, visible grid, giant display type and neon.

> **Frontend-only demo.** There is no backend, real player, store or form submission. Releases, artists and contact details are fictional. The form simulates the transmission and sends nothing. The goal is to show visual and interaction skills.

## Stack

- **Vite** + **vanilla TypeScript** (no framework)
- **GSAP** + **ScrollTrigger** for horizontal scroll and reveals
- **Canvas 2D** for the hero's particle field
- Vanilla CSS (no utility library)

## Design

- **Palette:** black (`#0B0B0F`) + neon cyan (`#00F0FF`) and magenta (`#FF2BD6`), lime (`#C6FF3A`) as a third accent. Dark mode.
- **Typography:** Space Mono (monospace) for data/telemetry + Archivo Black for the giant display type.
- **Layout:** breaks convention — visible grid, 90° corners, ASCII markers, a **horizontal scroll** section.

## Animations

- **Custom cursor** with a ring, action label and `mix-blend-mode`.
- **Magnetic buttons** (they follow the cursor with elastic physics).
- **Glitch** on headlines (cyan/magenta layers with clip-path).
- **Horizontal scroll** of releases with ScrollTrigger (pin + scrub).
- **Canvas particles** that react to the mouse in the hero.
- Scanlines, noise and grid as fixed overlays.
- Staggered reveals, marquee and a fallback for `prefers-reduced-motion`.

## Sections

Animated hero · Releases (horizontal scroll) · Manifesto · Artists / team · Contact · Footer.

## Development

```sh
npm install
npm run dev      # http://localhost:5173
npm run build    # tsc + vite build -> dist/
```
