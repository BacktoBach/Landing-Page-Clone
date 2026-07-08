# Quantix Landing Page

Quantix is a responsive SaaS landing page built with React, Vite, and Tailwind CSS. The page presents an analytics product with a dark visual style, hero dashboard mockup, feature tabs, animated statistics, pricing plans, newsletter signup, and footer navigation.

## Features

- Responsive landing page layout for desktop and mobile.
- Fixed navigation with mobile menu support.
- Hero section with product messaging, CTA buttons, trusted-by row, and analytics mockup.
- Interactive feature tabs for dashboard, funnels, SDK, session replay, and privacy views.
- Scroll-triggered reveal animations powered by AOS.
- Animated metric counters powered by React CountUp.
- Pricing section with monthly/annual toggle.
- Newsletter signup form with lightweight client-side handling.

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS 4
- AOS
- React CountUp
- ESLint

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Check lint:

```bash
npm run lint
```

## Project Structure

```text
src/
  App.jsx
  main.jsx
  index.css
  components/
    Navbar.jsx
    Hero.jsx
    Features.jsx
    Stats.jsx
    Pricing.jsx
    Newsletter.jsx
    Footer.jsx
public/
  favicon.svg
  icons.svg
```

## Animation Notes

AOS is initialized once in `src/App.jsx`, then refreshed after the initial render so scroll animations stay stable during development reloads. The main landing page sections use `data-aos` attributes for reveal effects.

The statistics in `src/components/Stats.jsx` use React CountUp through the `useCountUp` hook with scroll spy enabled, so the numbers animate when the stats section enters the viewport.

The root page background is set in both `src/App.jsx` and `src/index.css` to keep the landing page dark while animated elements are waiting to enter.

If Vite keeps an old optimized dependency cache during local development, restart with:

```bash
npm run dev -- --force
```
