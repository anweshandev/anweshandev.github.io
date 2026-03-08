# Anweshan.dev

> A high-signal developer portfolio built to present engineering leadership, architecture thinking, and AI product execution through a fast, modern, interactive web experience.

Live site: [anweshan.cv](https://anweshan.cv)

## Overview

This project is the personal portfolio of Anweshan Roy Chowdhury, built as more than a static resume site. It is designed as a developer showcase: a production-grade React application that combines narrative portfolio content, rich motion design, 3D elements, legal/compliance pages, analytics, Firestore-backed contact capture, and an AI assistant powered by Firebase AI SDK with Google Gemini.

The goal is simple: present technical credibility through the product itself.

## What Makes It Interesting

- Built with React 19, TypeScript, Vite, and Tailwind CSS 4.
- Uses route-based lazy loading for portfolio sections and legal pages.
- Includes an AI chatbot that answers questions about experience and projects using Firebase AI SDK and Google Gemini.
- Stores contact submissions in Firestore.
- Uses Firebase App Check with reCAPTCHA Enterprise.
- Tracks page views and user interactions with Google Analytics.
- Ships with a service worker via Workbox for production readiness.
- Includes legal pages for Terms of Service and Privacy/Cookie Policy.
- Structured as a real deployable application on Firebase Hosting, not a brochure page.

## Experience Design

This portfolio is meant to feel opinionated and technical at the same time.

- Bold typography using Montserrat and Inter.
- Motion-driven UI with Motion.
- Interactive visual elements using Three.js / React Three Fiber.
- A compact legal navigation layer in both the footer and navbar.
- Portfolio storytelling that highlights architecture, leadership, product thinking, and delivery impact.

## Core Product Areas

### Portfolio Pages

The application is organized into focused sections for:

- Home
- Experience
- Projects
- Leadership
- Awards
- Contact
- Terms of Service
- Privacy Policy

### AI Assistant

The chatbot provides a conversational layer over the portfolio.

- Implemented in the client using Firebase AI SDK.
- Uses a server-configured template with Google Gemini.
- Designed to help visitors explore projects, background, and technical capabilities.
- Covered by legal disclosures describing AI-based parsing and processing.

### Contact Flow

The contact page is not decorative. It is wired to persist inquiries.

- Captures name, email, subject, and message.
- Persists submissions to Firestore.
- Protected with Firebase App Check and reCAPTCHA Enterprise.

## Tech Stack

### Frontend

- React 19
- TypeScript
- Vite 8
- Tailwind CSS 4
- React Router 7
- Motion
- Lucide React

### Visual / Interactive

- Three.js
- React Three Fiber
- Drei

### Backend / Platform

- Firebase Hosting
- Firestore
- Firebase Analytics
- Firebase App Check
- Firebase AI SDK
- Firebase Functions scaffold

### AI

- Google Gemini via Firebase AI SDK

### Tooling

- ESLint
- TypeScript project references
- Workbox
- pnpm

## Architecture Notes

This codebase deliberately keeps the frontend lean while integrating production platform services.

- The site is a client-rendered SPA with Firebase Hosting rewrites to `index.html`.
- Firestore is used directly from the client for contact capture.
- Analytics is loaded safely in the browser and page views are tracked on route changes.
- App Check is initialized in the browser using `ReCaptchaEnterpriseProvider`.
- The AI assistant uses `getTemplateGenerativeModel` through Firebase AI.
- A minimal Firebase Functions project exists and is ready for backend expansion.
- In development, Firestore points to the local emulator.

## Project Structure

```text
src/
	components/
		contact/
			AIChat.tsx
		home/
			Hero3D.tsx
		layout/
			Footer.tsx
			MainLayout.tsx
			Navbar.tsx
			SEO.tsx
	hooks/
		useAnalytics.ts
		useScrollToTop.ts
	lib/
		firebase.ts
	pages/
		Home.tsx
		Experience.tsx
		Projects.tsx
		Leadership.tsx
		Awards.tsx
		Contact.tsx
		TermsOfService.tsx
		PrivacyPolicy.tsx
	data.ts
	App.tsx
functions/
	src/
		index.ts
```

## Local Development

### Prerequisites

- Node.js 20+
- pnpm
- Firebase project credentials

### Install

```bash
pnpm install
```

### Run the app

```bash
pnpm dev
```

### Build for production

```bash
pnpm build
```

### Preview production build

```bash
pnpm preview
```

### Lint

```bash
pnpm lint
```

## Environment Variables

The frontend expects Firebase configuration through Vite environment variables.

```env
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
VITE_FIREBASE_MEASUREMENT_ID=
VITE_RECAPTCHA_ENTERPRISE_KEY=
```

## Deployment Model

This project is configured for Firebase deployment.

- Static assets are built into `build/`.
- Firebase Hosting serves the SPA.
- Hosting rewrites all routes to `index.html`.
- Workbox injects the service worker during `postbuild`.
- Firebase emulators are configured for local development.

## Showcase Themes

The content and implementation emphasize a specific developer brand:

- Engineering leadership over isolated code samples.
- Architecture thinking over surface-level UI polish.
- AI product integration with practical delivery constraints.
- Production-minded frontend engineering.
- Modern cloud-native tooling with a lightweight deployment story.

## Selected Signal From The Portfolio Content

The site content highlights work across:

- AI-driven product development
- SaaS platform architecture
- Mobile engineering
- Cloud optimization
- IoT and BLE integrations
- Enterprise logistics and operations software
- Technical leadership and team-building

## Legal & Compliance

The project includes:

- Terms of Service
- Privacy Policy
- Cookie Policy language
- AI-processing disclosures for the chatbot
- Google Analytics and reCAPTCHA disclosures

## Why This Repo Exists

This repository demonstrates how a personal brand site can still be engineered like a serious product.

It is a portfolio, but it is also a statement about taste, technical range, and execution discipline.

## Author

**Anweshan Roy Chowdhury**

- Portfolio: [anweshan.cv](https://anweshan.cv)
- GitHub: [@anweshandev](https://github.com/anweshandev)
- LinkedIn: [linkedin.com/in/anweshandev](https://linkedin.com/in/anweshandev)
- Email: [me@anweshan.cv](mailto:me@anweshan.cv)
