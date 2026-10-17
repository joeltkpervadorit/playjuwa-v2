# Implementation Prompt (give this to your coding assistant)

Copy everything below the line into Claude Code, Cursor or a similar assistant. Open it in the root of the unzipped `playjuwa-landing` project.

---

You are working on **PlayJuwa**, a sweepstakes-casino landing page. Your task is to deliver **only the landing page** as a polished, production-quality **React 18 + Vite 5** app, written in plain **JavaScript and CSS**. Do not use TypeScript, Tailwind, UI kits or animation libraries.

## Starting point

This folder already contains a working port of the approved design:

- `docs/DESIGN_SPEC.md` is the full visual, responsive and motion specification. Read it first; it is the source of truth.
- `public/assets/` holds all 137 real images exported from the design. Use only these. Never substitute placeholders or stock images, and never invent new artwork. If something seems missing, stop and tell me.
- `src/styles/tokens.css` holds the design tokens (colours, spacing, radii, type), and `src/styles/ds.css` holds the design-system component styles.
- `src/styles/landing.css` holds all page styles and keyframes, mobile-first, with breakpoints at 641, 1024, 1280, 1360, 1600 and 1700px.
- `src/components/ds.jsx` contains Button, Badge, CategoryTile, GameCard and SectionHeader.
- `src/landing/Landing.jsx` is one class component holding all state, data, handlers and animation engines. `renderVals()` computes a `v` object that is passed to every section.
- `src/landing/sections/*.jsx` contains 25 section components that render the markup (Header, Sidebar, HeroImgsSection, QuickActions, WinsSection, PlatformsSection, SlotsSection, NpnSection, PopularSection, GamesSection, SpinSection, HowSection, WeeklySection, SupportSection, PromotionsSection, FaqSection, FinalSection, Footer, MobileTabBar, AuthModal, LoginPrompt, Background and the Halloween layers).
- `src/landing/routes.js` sets where nav links point.

Run `npm install && npm run dev` and compare the result against the screenshots in `docs/screenshots/` before you change anything. **The current output is the visual baseline.** Any refactor must keep it pixel-identical at 390px, 834px and 1440px widths.

## Goals

1. **Refactor for maintainability without changing the visuals.**
   - Move the static content arrays (hero slides, platforms, slot games, hot games, categories, new games, wheel prizes, weekly wins, reviews, FAQ, footer links) out of `Landing.jsx` into `src/data/*.js`.
   - Replace the long `renderVals()` with smaller pieces, either:
     - (a) one function component per section with its own local state where the state is local (FAQ accordion, coverflow index, review rail, footer accordions), or
     - (b) custom hooks: `useHeroCarousel`, `useDailySpin`, `useCoverflow`, `useDailyBonusPopup`, `useAuthModal`, `useReducedMotion`.
   - Keep shared state (menu open, auth modal, active section, sound) in `Landing` or a small React context.
   - Convert the imperative installers in `Landing.jsx` (`installTapFx`, `installMotion`, `installNpnPop`, `installDailyBonus`) into effects inside dedicated modules under `src/effects/`. Each effect must clean up its listeners, animation frames and timers on unmount, and must be safe under `React.StrictMode`. Once they are, turn StrictMode on in `main.jsx`.
   - Split `landing.css` into one CSS file per section, imported by that section's component (for example `sections/Hero/Hero.css`). Keep the class names and the rules unchanged. Keep `tokens.css` and `ds.css` global.
   - Give the images readable names (for example `logo.png`, `hero-1.webp`, `game-sweet-bonanza.jpg`). Update every reference and remove `src/landing/assets.js` once nothing uses id lookups.
2. **Keep every interaction working:**
   - **Hero carousel:** 5s autoplay, dots.
   - **Recent wins marquee.**
   - **Slot coverflow:** drag, wheel, arrows and keyboard.
   - **Category filter chips** and **favourite toggles.**
   - **Daily Spin wheel:** 8 prizes, 5.6s spin, 24h cooldown with a live countdown, pointer tick and result pop.
   - **FAQ accordion.**
   - **Review rail.**
   - **Mobile menu panel and bottom tab bar:** Casino, Platform, Deposit (raised centre coin), Bonus, Chat.
   - **Footer accordions** on mobile.
   - **Halloween seasonal layer:** with its on/off toggle and cyclone button.
   - **Tap/click sparkle canvas effect.**
   - **Scroll reveals.**
3. **Daily Bonus popup** (`public/assets/daily-bonus.webp`):
   - Show it 3s after `window` `load`, centred, popping in at scale .35 → 1.04 → 1 with no fade-in.
   - Put a dark blurred backdrop behind it and a subtle purple and gold glow.
   - Close it with ✕, a backdrop click or Escape.
   - Claim Now scrolls to `#spin` and starts the wheel spin.
   - Show it at most once per calendar day (`localStorage` key `pj_daily_bonus_seen`), not on every navigation.
   - Never show it while the login, sign-up, menu or any other modal is open. Wait until they close.
   - It must be responsive, trap focus, restore focus on close, and respect `prefers-reduced-motion`.
   - Build it as a React component (`<DailyBonusModal />`) rendered through a portal instead of DOM injection.
4. **Login and Sign-up modals stay front-end only.**
   - Keep the validation and success states as they are.
   - Expose `onLogin(values)` and `onSignup(values)` props that do nothing by default.
5. **Accessibility:**
   - Use semantic landmarks.
   - Every icon-only button has an `aria-label`.
   - Focus rings use 2px `--yellow` with a 2px offset.
   - Modals use `role="dialog"` and `aria-modal`.
   - Carousels are keyboard operable.
   - Colour contrast stays as in the tokens.
   - All motion is disabled under `prefers-reduced-motion: reduce`.
6. **Performance:**
   - Lazy-load images below the fold (`loading="lazy"`, plus `decoding="async"`).
   - Give images explicit width/height or `aspect-ratio` so nothing shifts on load.
   - Preload the first hero image.
   - Run requestAnimationFrame loops only while needed.
   - Don't add dependencies beyond `react`, `react-dom`, `vite` and `@vitejs/plugin-react`.

## Out of scope

Do not build any of these:

- Authentication.
- Payments, deposits or withdrawals.
- Backend APIs or databases.
- Real game launching.
- Any other pages (Casino, Buy, Wallet, Withdraw).

Links to those destinations go through `src/landing/routes.js`. Leave them as on-page anchors or `#` placeholders, and add a comment explaining how to wire a router later.

## Target folder structure

```
src/
  main.jsx
  App.jsx
  styles/          tokens.css, ds.css, base.css (resets, body, .lp shell)
  components/      Button, Badge, GameCard, SectionHeader, IconButton, Modal, Carousel primitives
  effects/         tapFx.js, scrollMotion.js, halloween.js (each exports an install/cleanup pair)
  hooks/           useReducedMotion, useHeroCarousel, useDailySpin, useCoverflow, useDailyBonusPopup, useLockBodyScroll
  data/            heroSlides, platforms, slotGames, hotGames, categories, newGames, prizes, weeklyWins, reviews, faqs, footerLinks
  landing/
    Landing.jsx    page composition and shared state only
    routes.js
    sections/
      Header/ Sidebar/ MobileTabBar/ Hero/ QuickActions/ RecentWins/ Platforms/ SlotCoverflow/
      NoPurchase/ HottestGames/ BrowseGames/ DailySpin/ HowToPlay/ WeeklyWins/ WhyJoin/
      Reviews/ Faq/ FinalCta/ Footer/ AuthModal/ DailyBonusModal/ Halloween/
      (each folder: Component.jsx + Component.css)
public/assets/     real exported images (renamed)
```

## How to work

1. Run the baseline. Take screenshots at 390×844, 834×1112 and 1440×900 (top of page and full page), and save them to `docs/baseline/`.
2. Refactor one section at a time. After each section, re-run and compare against the baseline. Fix any visual regression before you move on.
3. Finish with `npm run build` with zero errors and no React warnings in the console. Then do a manual pass:
   - Every button and link responds.
   - The Daily Bonus popup appears once and then stays hidden after a reload on the same day.
   - The wheel spins and its cooldown persists across reloads.
   - The menu, modals and tab bar work on mobile.
4. Report what changed, any deviation from the baseline, and anything you could not do.
