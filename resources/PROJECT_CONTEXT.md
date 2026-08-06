# DeepSquad Website - Project Context

## Overview
Indie studio website for DeepSquad (DeepDev), featuring mobile 2D simulator games:
- **Developer Simulator** (`devSim.html`, `ru/devSim.html`)
- **Bank Simulator** (`banksim.html`, `ru/banksim.html`)

## Design System
- **Fonts**: `Poppins` for body text, `Montserrat` for headings.
- **Color Palette**:
  - `--primary`: `#6C5CE7`
  - `--primary-dark`: `#5649C0`
  - `--secondary`: `#00CEFF`
  - `--dark`: `#2D3436`
  - `--light`: `#F8F9FD`
  - `--accent`: `#FD79A8`
  - `--gray`: `#636E72`

## Key Architecture & Features
- **Universal Roadmap Page** (`roadmap.html`, `ru/roadmap.html`):
  - Accepts game parameter via URL (`?id=devsim` or `?id=banksim`).
  - Primary API Endpoint: Vercel serverless backend at `https://deepdevappsinf.vercel.app/api` (with failover to static `data/roadmap.json`).
  - Google reCAPTCHA v2 Security Verification (`6LdEH3gtAAAAANP4w2zB4eZ_HSgQD8Mp89fY_WKl`) on upvoting & feature suggestions.
  - Interactive features: Game Switcher, Status Filters, Category Filters, Live Search, Upvote System with server & localStorage persistence, Grid/Timeline Views, Suggestion Modal dialog.
  - **Developer Simulator Roadmap**: Empty state stub ("Скоро тут появится информация").
  - **Bank Simulator Roadmap**: 5 detailed updates (Emergency Events, VIP Client Contracts, Stock Market & Crypto, Collector Fleet, Daily Quests & Bank Pass).
- **Backend Architecture** (`backend/`):
  - Serverless functions for Vercel deployment: `api/roadmap.js`, `api/upvote.js` (reCAPTCHA Secret verification `6LdEH3gtAAAAAFkd8w1isK59tj-lpEEYlL4MqJ1Z`), `api/suggest.js`.
  - CORS Enabled (`Access-Control-Allow-Origin: *`).
- **Internationalization**: `translations.js` & `language-switch.js` supporting English and Russian (`data-i18n`).
