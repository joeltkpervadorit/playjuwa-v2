# PlayJuwa Landing Page (React + Vite)

This is the PlayJuwa landing page from the design canvas, ported to React 18 and Vite 5. It includes the desktop, tablet and mobile layouts, every animation, and all the images.

## Run it

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
npm run preview   # serve the production build
```

You need Node 18 or newer.

## What's included

The page has these parts:

- A desktop sidebar, a sticky header, and a slide-out menu with a mobile bottom tab bar (Casino, Platform, Deposit, Bonus, Chat).
- A hero image carousel, quick action tiles, and a Recent Big Wins ticker.
- Top Game Platforms, a 3D Slot Games coverflow, No Purchase Necessary, Hottest Casino Games, and Browse Games with category filters.
- A Daily Spin wheel that works: weighted prizes, a 24-hour cooldown, and pointer-tick physics.
- How to Play in 3 Easy Steps, Biggest Weekly Wins, Why Join Us, a player reviews rail, FAQ, the final call to action, and the footer.
- Login and Sign-up modals with validation, plus the "log in to continue" prompt.
- The Daily Bonus popup. It appears 3 seconds after the page loads, at most once per day (tracked in localStorage), and never while another modal is open. Claim Now scrolls to the Daily Spin wheel and spins it.
- Motion: tap and click sparkle effects, scroll reveals, carousels, and the seasonal Halloween layer. The Halloween layer has an on/off toggle and a cyclone button.
- Respect for `prefers-reduced-motion` throughout.

## Project structure

```
index.html                  fonts (Fredoka, Manrope), meta tags
public/assets/              all images (named by their original design-canvas id)
src/main.jsx                entry point, imports the CSS
src/App.jsx                 renders <Landing />
src/styles/tokens.css       PlayJuwa design tokens (colours, spacing, radii, type)
src/styles/ds.css           design-system component styles (.pj-btn, .pj-badge, …)
src/styles/landing.css      all landing page styles and keyframes (mobile-first)
src/components/ds.jsx       Button, Badge, CategoryTile, GameCard, SectionHeader
src/landing/Landing.jsx     state, data, event handlers and animation engines
src/landing/sections/*.jsx  page markup, one file per section
src/landing/routes.js       where nav links point (edit for your router)
src/landing/assets.js       image id → /assets/... lookup for images chosen in code
src/landing/css.js          helper that turns an inline CSS string into a style object
```

### How the page is wired

`Landing.jsx` is a single class component. `renderVals()` computes everything the markup needs and passes it to each section as the prop `v`. To change copy or markup, edit the section file. To change data (games, platforms, reviews, FAQ, wheel prizes), edit the arrays in `Landing.jsx`.

### Notes

- Navigation targets live in `src/landing/routes.js`. They point at on-page anchors for now. Swap them for real routes (or React Router paths) as you build the Casino, Buy and Wallet pages.
- `React.StrictMode` is left off on purpose. The page installs its animation layers once on mount, and StrictMode's double mount in development would install them twice.
- Login and Sign-up are front-end only. Hook the form submit handlers in `Landing.jsx` (`openAuth`, the `auth*` handlers) up to your API.
- The Halloween layer is seasonal. To turn it off by default, change its initial state in the `Landing` constructor, or remove the `Halloween*` sections.
