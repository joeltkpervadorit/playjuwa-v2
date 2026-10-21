# PlayJuwa Pages (React + Vite)

This React 18 and Vite 5 app integrates the PlayJuwa page package while preserving the existing project setup and shared catalog data.

## Run it

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
npm run preview   # serve the production build
```

You need Node 18 or newer.

## Routes

| Page | Path |
| --- | --- |
| Home | `/` |
| Casino | `/casino` |
| Platforms | `/platforms` |
| Bonus | `/bonus` |
| Deposit | `/deposit` |
| Buy | `/buy` |
| Chat | `/chat` |
| Wallet | `/wallet` |
| Withdraw | `/withdraw` |
| Link2Play | `/link2play` |
| Blog | `/blog` |
| Login / Sign-up | `/login`, `/signup` |

The app uses its existing pathname-based routing; no router dependency is required.

## Project structure

```
index.html                  fonts (Fredoka, Manrope), meta tags
public/assets/              all images (named by their original design-canvas id)
src/main.jsx                app entry point and shared design CSS
src/App.jsx                 pathname routing and page selection
src/routes.js               shared page paths and navigation targets
src/lib/session.js          placeholder auth, balance and service state
src/styles/tokens.css       PlayJuwa design tokens (colours, spacing, radii, type)
src/styles/ds.css           design-system component styles (.pj-btn, .pj-badge, …)
src/pages/                  integrated page components, sections and scoped styles
src/components/ds.jsx       Button, Badge, CategoryTile, GameCard, SectionHeader
src/landing/Landing.jsx     existing landing page state and data
src/landing/sections/*.jsx  existing landing page sections
src/landing/routes.js       re-exports shared route constants
src/landing/assets.js       image id → /assets/... lookup for images chosen in code
src/landing/css.js          helper that turns an inline CSS string into a style object
```

### Integration status

- Shared page navigation is defined in `src/routes.js`; the landing page re-exports its route constants.
- Existing platform cards use the project catalog. Game launches and platform credentials are unavailable until their services are connected.
- Authentication, wallet balances, payments, withdrawals, chat, reward claims, and live promotion data are not connected. The UI should show unavailable states rather than simulated success or sample account balances.
- Blog entries and live purchase activity remain empty until real records and destinations are provided.
- Login and sign-up routes open the landing-page auth modal. In Vite development mode only, login accepts any non-empty username with an optional password and stores a test session for the current browser tab. Production builds do not enable this test login. Sign-up remains unavailable until an authentication provider is connected.
- The daily spin and reward claims require their respective services. No reward or balance is generated locally.
- Verify promotional values, reward terms, eligibility and compliance copy with the product owner before connecting or publishing live offers.

### Page implementation

Each page lives in `src/pages/<page>/`; page sections are in that folder's `sections/` subdirectory. Page styles are loaded only while the page is mounted. Shared session props are in `src/lib/session.js`.

### Notes

- `React.StrictMode` is left off on purpose. The page installs its animation layers once on mount, and StrictMode's double mount in development would install them twice.
- The Halloween layer is seasonal. To turn it off by default, change the page's initial state or remove its seasonal sections.
