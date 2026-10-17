# PlayJuwa Landing Page: Design Specification

The source of truth is the `Main` board on the PlayJuwa design canvas, version 183, exported on 2026-10-17. Every value below comes from that board's code. The exact numbers live in `src/styles/tokens.css` and `src/styles/landing.css`; this document explains them.

## 1. Visual system

### Colour

The theme is immersive dark, with purple as the structure and gold as the reward/action colour.

| Token | Value | Use |
|---|---|---|
| `--background` | `#080b16` | Page ground |
| `--surface` | `#141827` | Header bar, sidebar, footer bands |
| `--card` | `#20223a` | Cards, tiles, inputs |
| `--card-violet` | `#1e1640` | Reward, benefit and promo panels |
| `--deep-purple` | `#32105f` | Hero and promo grounds, far stop of purple gradients |
| `--purple` | `#6d35d9` | Secondary buttons, active nav item, selected tile (fill only) |
| `--violet-400` | `#8b63f0` | Outline-button borders, focus borders, icon strokes |
| `--violet-300` | `#a78bfa` | Purple text: links, provider names, "View All" |
| `--line` | `#2e2a55` | Hairlines and card edges (decorative only) |
| `--gold` | `#ffb800` | Primary CTA, prize amounts, eyebrows |
| `--yellow` | `#ffd21f` | Headline accent words, focus ring |
| `--orange` | `#ff6a00` | Warm end of the gold gradient, "Hot" badges |
| `--success` | `#22c55e` (and `#4ade80` in the page) | Win amounts, SC values |
| `--live` | `#d92e52` | LIVE badge, notification dots |
| `--ink` / `--ink-muted` | `#ffffff` / `#b7b8c5` | Primary and secondary text |

Gradients used throughout:

- **Gold CTA:** `linear-gradient(180deg, #ffd21f 0%, #ffb800 55%, #ff6a00 100%)` with a gloss bevel (`inset 0 1px 0 rgba(255,255,255,.45), inset 0 -2px 0 rgba(0,0,0,.18)`) and a gold glow (`0 8px 24px rgba(255,184,0,.35)`).
- **Purple:** `linear-gradient(135deg, #6d35d9, #32105f)`.
- **Gold text:** the gold gradient clipped to text. It's used for accent words such as "Big Wins", "Platforms", "Games" and "Weekly Wins".
- **Panels:** violet-to-navy vertical gradients with a 1–1.5px inset violet border (`rgba(139,92,246,.4–.8)`) and a soft purple glow (`0 8px 32px rgba(109,53,217,.45)`).
- **Mobile tab bar:** `linear-gradient(180deg, rgba(32,18,74,.96), rgba(14,10,36,.97))`, with a gold radial glow under the centre and a purple → gold → purple hairline.

### Typography

- **Fredoka** (300–700) is the brand face for everything (`--font-sans`). **Manrope** (400–800) is loaded for small UI numerals and labels on a few components. Both come from Google Fonts.
- Scale (desktop):
  - Display: 64/68, weight 700. Hero only.
  - H1: 48/56, weight 700.
  - Section title (H2): 32/40, weight 600. Accent word in gold.
  - H3: 24/32.
  - H4: 20/28.
  - Body: 16/24.
  - Small: 14/20.
  - Caption: 12/16.
  - Eyebrow: 12/16, weight 600, uppercase, `.08em` tracking, gold.
- Mobile section titles drop to about 20–22px. Hero titles are uppercase with `-.02em` tracking.

### Spacing, radii, elevation

- **Spacing:** 4-point base with steps of 4, 8, 16, 24, 32, 40, 48, 64 and 80. Sections are about 64px apart on desktop and about 24–28px apart on mobile.
- **Radii:**
  - 12px: small buttons, inputs.
  - 16px: buttons, tiles, game cards.
  - 20px: feature and benefit cards.
  - 24px: hero, promo panels, final CTA.
  - Pill (999px): badges, "View All", icon discs.
- **Elevation:** cards rest on `0 4px 16px rgba(0,0,0,.35)`. On hover they get the purple glow. There is only one gold-glow CTA per viewport.

## 2. Page anatomy, top to bottom

1. **Seasonal Halloween layer.** Decorative, `aria-hidden`. Witches, bats, ghosts, a spider, falling leaves and stars drift over the page. Two floating buttons sit bottom-left: a pumpkin on/off toggle and a "cyclone" button that plays a swirl burst.
2. **Sidebar** (desktop ≥1024px only, fixed left).
   - PlayJuwa logo.
   - LOBBY group: Platforms, and Casino with a collapsible sub-list.
   - MENU group: Daily Spin, Daily Bonus (with a "FREE" badge), Promotions, Referral, VIP, Buy SC, Withdraw SC.
   - Help group: How to play, Support, How to Install, Blog posts.
   - A "Daily Rewards: Spin the Wheel" banner card.
   - A social row (TikTok, Instagram, YouTube, Telegram, Facebook) and a sound toggle.
   - Each item has a tinted icon chip, and the active item is highlighted.
3. **Header** (sticky).
   - Desktop: a search field ("Search games, providers…"), Login (outline) and Sign Up (gold) buttons, and a gift button with a red notification dot.
   - Mobile: the logo, a search icon button, Login, Sign Up and the gift button.
   - Below 1024px, a slide-in menu panel holds the same navigation as the sidebar.
4. **Hero.** A full-bleed image carousel of 5 banner slides ("Your Game. Your Winnings." and others). It crossfades, autoplays every 5s, and has pill-shaped dot controls. Desktop is about 490px tall inside a 24px-radius frame.
5. **Quick actions.** Four tiles with 3D art: Deposit, Withdraw, VIP Games (with a "HOT" badge) and Download. On desktop each has a label, a sub-label and an arrow disc. On mobile they're compact.
6. **Recent Big Wins.** A horizontally scrolling marquee of win cards: game art (or a letter monogram), masked player name, city, and the amount with a coin icon.
7. **Top Game Platforms.** Platform cards (Golden Dragon, Ultra Panda, Egame99, Vblink, …) with "NEW" badges, a "Sign up & Play" sub-label and a "View All" card.
8. **Slot Games.** A 3D coverflow carousel of 12 titles. The centre card is enlarged, the side cards are rotated and dimmed, and there are prev/next arrows, a caption with title, provider and "n / 12", and a "HOT"/"INSTANT" ribbon. It supports drag, wheel and arrow keys.
9. **No Purchase Necessary.** A banner with a 3D slot-machine illustration and a "Start Playing Now" gold CTA. The logo glows and a light sheen sweeps across.
10. **Hottest Casino Games.** A 24-tile game art grid with a "1,000+ Slot Games" pill. Tiles show a play overlay on hover.
11. **Browse Games.**
    - Two promo banners: "100% Welcome Bonus" and "Spin Every 24 Hours".
    - Category filter chips with icons: All Games, Slots, Live Casino, Sports, Fishing and more.
    - A "New Games" shelf with a flame icon. Cards have a favourite (heart) toggle, a provider and a play button.
12. **Daily Spin.** A playable 8-segment prize wheel with light bulbs around the rim, a pointer, a gold hub and a "Spin Now" button.
    - Prizes: Bonus SC, Mystery Prize, Free Spin, Lucky Chip, Gift Box, VIP Reward, Extra Spin, Free Game.
    - A spin takes 5.6s and lands on a random segment, then a 24h cooldown countdown starts.
13. **How to Play in 3 Easy Steps.** Hero art on the left and three numbered gold steps on the right:
    - Sign Up & Get Rewards: 15,000 GC, 0.5 SC and a +100% Bonus, with a Claim Now button.
    - Play Slots, Fish, Tables and More: four category art tiles.
    - Redeem Your SC Instantly.
14. **Biggest Weekly Wins.** A ranked table with gold, silver and bronze medals, a player avatar, multiplier and total win, plus a "This week" chip.
15. **Why Join Us.** A row of benefit cards: 24/7 Support, Same-Day Redemption, Safe & Secure, Join Millions of Players.
16. **What Players Say.** A horizontal review rail with star ratings, quotes and avatars. It snaps and has arrow controls.
17. **FAQ.** An accordion of 5 questions. One opens at a time.
18. **Final CTA.** "One Account. 20+ Platforms + Instant Cashout" on a purple-gold band with a large pill CTA, "Create Free Account →".
19. **Footer.**
    - Logo with tagline, plus a social row.
    - Four link columns: Platforms, Support, Games (19 game links) and Legal. These become accordions on mobile.
    - Legal nav and copyright.
    - An animated castle/night-sky illustration band (twinkle, float, pan).
20. **Mobile bottom tab bar** (<641px). Casino, Platform, a raised gold-coin **Deposit** in the centre, Bonus (with a dot) and Chat. The active tab gets a gold pill and an underline.
21. **Overlays.**
    - A "log in to continue" prompt.
    - The Login and Sign-up modal: email/password, show-password toggle, terms checkbox, inline validation and a success state.
    - The **Daily Bonus popup**, described under section 4 below.

## 3. Responsive behaviour

The CSS is mobile-first, with breakpoints at 641, 1024, 1280, 1360, 1600 and 1700px.

| | Mobile (≤640) | Tablet (641–1023) | Desktop (≥1024) |
|---|---|---|---|
| Navigation | Compact header with logo and auth buttons, slide-in menu, fixed bottom tab bar | Header with menu button and slide-in panel; no tab bar | Fixed left sidebar (`--side` width) plus sticky header with search; content offset by the sidebar |
| Gutter | Hero, quick actions and rails run edge to edge; headings inset about 16–24px | Same as mobile | Content starts after the sidebar; rails bleed to the right edge |
| Hero | ~212px tall, art masked from 32% across, copy at 64% width | Taller, larger type | ~490px, full-width banner images |
| Quick actions | 4 compact tiles in one row | 4 tiles with labels | 4 wide tiles with sub-label and arrow |
| Wins / platforms / reviews | Horizontal scroll-snap rails | Rails | Rails with arrow buttons and "View All" |
| Slot coverflow | Centre card about 150px wide, side cards peek | Wider | Full 3D spread |
| Hottest games | 3-row horizontal rail, about 3.3 tiles visible, scroll-snap | 6-column grid | 8-column grid (3 rows) |
| How to Play | Stacked: art on top, steps below | Stacked | Two columns |
| Footer | Link columns become accordions | 2 columns | 4 columns |
| Daily Bonus popup | Fits viewport width (about 94vw) | Max 760px | Max 760px, centred |

Images keep their aspect ratio (`object-fit: cover`), and tiles size by aspect ratio rather than a fixed height. `safe-area-inset-bottom` is respected under the tab bar. Hover-only effects are gated behind `@media (hover:hover)`.

## 4. Motion and interaction

Every animation is switched off or reduced under `prefers-reduced-motion: reduce`.

- **Buttons:** hover lifts by 2px and brightens the gold buttons' glow. Pressing scales to .98. Focus shows a 2px yellow ring with a 2px offset. Disabled is 45% opacity.
- **Cards:** hover lifts 3–4px and adds the purple glow. Game tiles show a dark overlay with a gold "Play" pill. Coverflow cards get a moving sheen (`pjc-sheen`).
- **Tap and click sparkle:** every press draws a canvas burst at the pointer: gold and purple particles, a lens-flare star, light rays and twinkles, plus an outline pulse on the pressed control.
- **Scroll reveals:** sections rise and fade in (`lp-rise`) with staggered children. Scroll-driven edge scaling (`pjr-edge`) applies on the rails.
- **Carousels:**
  - The hero crossfades every 5s; it stays still under reduced motion.
  - The wins marquee loops every 44s (`lp-marquee`).
  - The coverflow takes drag, wheel and keys and settles with a spring.
  - The review rail snaps.
- **Daily Spin:** the wheel spins with `cubic-bezier(.17,.67,.12,.99)` over 5.6s. The bulbs chase (`lp-bulb`), the pointer ticks on each segment (`lp-tick`), the result pops (`lp-pop`), and the cooldown counts down live.
- **No Purchase Necessary:** a float, pulse and flowing light (`pjn-*`).
- **Mobile tab bar:** the centre coin turns slowly (`tb-turn`) with twinkles (`tb-tw`).
- **Modals:** auth slides up (`lp-au-up`) and the success state pops (`lp-au-pop`). Escape closes them, focus is trapped and focus returns when they close.
- **Daily Bonus popup:**
  - Appears 3s after the window `load` event.
  - Pops in at scale .35 → 1.04 → 1 with no fade, over a dark blurred backdrop, with a breathing purple-and-gold glow.
  - Close it with ✕, a backdrop click or Escape.
  - Claim Now closes it, scrolls to the Daily Spin wheel and spins it.
  - Shows once per day (`localStorage` key `pj_daily_bonus_seen`).
  - Waits while any login, sign-up, menu or other modal is open.
- **Halloween layer:** looping keyframes for flying, bobbing, falling and swaying, plus a wind gust and the cyclone effect. It can be switched off.

## 5. Assets

All 137 images were exported from the design file and are included under `public/assets/`. They are named by their design-canvas id, because the canvas doesn't store human-readable names. Nothing was replaced with a placeholder.

- **Logo:** `9048a242fcde0c3b392353f435007399.png`. It's used in the sidebar, header and footer, and as the favicon.
- **Hero banners, promo banners and the How to Play art:** large `.webp`/`.png`/`.jpg` files.
- **Game art:** 24 "Hottest Casino Games" thumbnails (`.jpg`), plus slot coverflow art, platform logos and win-card art.
- **3D icons:** quick action art, step icons, category icons and the Daily Bonus reward icons (`.png`/`.webp`).
- **Small SVG icons:** social and category glyphs. Most UI icons are inline SVG inside the section files.
- **Daily Bonus popup banner:** `daily-bonus.webp`. It's your uploaded artwork, cut out of its blurred background with transparency.
- **Fonts:** Fredoka and Manrope from Google Fonts, linked in `index.html`. They aren't bundled. To self-host, download them from Google Fonts into `public/fonts/` and add `@font-face` rules.

`src/landing/assets.js` maps ids to file paths for the images the code picks dynamically (game thumbnails and category icons).
