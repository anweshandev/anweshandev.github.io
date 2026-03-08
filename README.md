# Anweshan.dev

> A portfolio engineered like a product: recruiter-friendly on the surface, technically credible underneath.

Live site: [anweshan.cv](https://anweshan.cv)

## What This Is

This repository powers the personal website of Anweshan Roy Chowdhury. It is designed to do two jobs well:

- Give recruiters and hiring managers a fast, high-signal summary of engineering leadership, architecture range, and product impact.
- Give developers a real codebase to inspect, with production-minded frontend architecture, Firebase integration, AI features, analytics, and legal/compliance considerations.

It is not a static resume page. It is a deployable React application with interactive UI, structured portfolio content, Firestore-backed contact workflows, and an AI assistant powered by Firebase AI SDK with Google Gemini.

## If You're A Recruiter

This project is intended to communicate the following quickly:

- Engineering leadership, not just implementation skill.
- Comfort across frontend, mobile, cloud, AI, and platform integration.
- Ability to turn personal branding into a polished, working product.
- Attention to production concerns such as analytics, security controls, legal policies, and deployment.

The site content highlights experience across:

- AI-driven product development
- SaaS platform architecture
- Mobile engineering
- Cloud optimization
- IoT and BLE integrations
- Enterprise logistics and operations software
- Technical leadership and team-building

## If You're A Developer

This repo is worth a look if you care about:

- React 19 + TypeScript + Vite architecture
- Tailwind CSS 4 styling with strong visual identity
- Route-based lazy loading
- Firebase Hosting, Firestore, Analytics, App Check, and AI SDK integration
- Client-side AI chat UX backed by Google Gemini
- Service worker generation with Workbox
- Balancing product polish with practical deployment constraints

## Product Highlights

- Built with React 19, TypeScript, Vite, and Tailwind CSS 4.
- Uses route-based lazy loading for portfolio sections and legal pages.
- Includes an AI chatbot that answers questions about experience and projects using Firebase AI SDK and Google Gemini.
- Stores contact submissions in Firestore.
- Uses Firebase App Check with reCAPTCHA Enterprise.
- Tracks page views and user interactions with Google Analytics.
- Ships with a service worker via Workbox for production readiness.
- Includes Terms of Service and Privacy/Cookie Policy pages with AI-processing disclosures.
- Runs as a real Firebase-hosted SPA, not a mock portfolio shell.

## Design Direction

This portfolio is intentionally opinionated.

- Bold typography using Montserrat and Inter.
- Motion-driven UI with Motion.
- Interactive visual elements using Three.js / React Three Fiber.
- Compact legal navigation in both navbar and footer.
- Portfolio storytelling that emphasizes delivery impact, systems thinking, and technical range.

## Core Product Areas

### Portfolio Pages

The app includes focused sections for:

- Home
- Experience
- Projects
- Leadership
- Awards
- Contact
- Terms of Service
- Privacy Policy

### AI Assistant

The chatbot adds a conversational interface on top of the portfolio.

- Implemented in the client using Firebase AI SDK.
- Uses a server-configured template with Google Gemini.
- Helps visitors explore projects, background, and technical capabilities.
- Covered by policy language describing AI-based parsing and third-party processing.

### Contact Flow

The contact experience is functional, not decorative.

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

The architecture keeps the frontend lean while still integrating real platform services.

- The site is a client-rendered SPA with Firebase Hosting rewrites to `index.html`.
- Firestore is used directly from the client for contact capture.
- Analytics is loaded safely in the browser and page views are tracked on route changes.
- App Check is initialized in the browser using `ReCaptchaEnterpriseProvider`.
- The AI assistant uses `getTemplateGenerativeModel` through Firebase AI.
- A minimal Firebase Functions project exists and is ready for backend expansion.
- In development, Firestore points to the local emulator.

## Why This Repo Is Useful To Review

For a recruiter, this repo shows how technical identity is translated into product form.

For a developer, it shows a compact example of a modern portfolio that still addresses:

- app structure
- deployment
- analytics
- AI integration
- abuse protection
- legal disclosure
- real data persistence

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

## Legal & Compliance

The project includes:

- Terms of Service
- Privacy Policy
- Cookie Policy language
- AI-processing disclosures for the chatbot
- Google Analytics and reCAPTCHA disclosures

## Why This Repo Exists

This repository demonstrates that a personal site can be treated like a serious software product.

It is a portfolio, but it is also a statement about engineering taste, implementation range, and execution discipline.

## Author

**Anweshan Roy Chowdhury**

- Portfolio: [anweshan.cv](https://anweshan.cv)
- GitHub: [@anweshandev](https://github.com/anweshandev)
- LinkedIn: [linkedin.com/in/anweshandev](https://linkedin.com/in/anweshandev)
- Email: [me@anweshan.cv](mailto:me@anweshan.cv)
