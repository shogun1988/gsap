# Mojito Bar (React + Vite)

Interactive cocktail themed site built with React 19, Vite, Tailwind CSS v4, and GSAP animations (ScrollTrigger + SplitText + video scroll scrub).

## Features
- Scroll‑scrubbed hero video using GSAP ScrollTrigger
- SplitText intro animations
- Responsive layout (mobile & desktop)
- Tailwind CSS v4 utility classes

## Prerequisites
- Node.js 18+ (recommend latest LTS)
- Git (for cloning)

Check versions:
```pwsh
node -v
npm -v
```

## Installation
```pwsh
# Clone
git clone https://github.com/shogun1988/gsap.git mojito-bar
cd mojito-bar

# Install dependencies
npm install
```

## Development
```pwsh
npm run dev
```
Open the URL printed by Vite (usually http://localhost:5173).

## Lint
```pwsh
npm run lint
```

## Build
```pwsh
npm run build
```
Output is generated in `dist/`.

## Preview Production Build
```pwsh
npm run preview
```

## GSAP Notes
- ScrollTrigger & SplitText registered in `src/App.jsx`.
- Hero video scrub implemented in `src/components/Hero.jsx` (waits for `loadedmetadata` to map scroll to `currentTime`).

## Tailwind v4 Notes
This project uses the new Tailwind v4 syntax (`@import "tailwindcss";`). If editor tooling flags custom `@utility` or `@apply` blocks, ensure you are on the latest Tailwind & PostCSS plugin versions.

## Future Ideas
- Pinning hero section during video scrub
- Accessibility pass (focus states, reduced motion)
- Dark overlay fade synced with video progress

## License
Private / internal project. Do not redistribute without permission.
