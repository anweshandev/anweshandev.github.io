# E2E Tests with Playwright

This directory contains end-to-end tests for the portfolio website using [Playwright](https://playwright.dev/).

## Test Structure

- **`navigation.spec.ts`** - Tests for page navigation, routing, legal pages, theme switching, and responsive behavior
- **`contact.spec.ts`** - Tests for the contact form validation and submission
- **`ai-chat.spec.ts`** - Tests for the AI chatbot UI interactions
- **`seo-accessibility.spec.ts`** - Tests for SEO meta tags, accessibility, performance, and external links

## Running Tests

### Prerequisites

Install dependencies:
```bash
pnpm install
```

Install Playwright browsers:
```bash
pnpm exec playwright install
```

### Commands

```bash
# Run all tests headlessly
pnpm test

# Run tests with UI mode (interactive debugging)
pnpm test:ui

# Run tests in headed mode (see the browser)
pnpm test:headed

# Debug tests step-by-step
pnpm test:debug

# Run specific test file
pnpm exec playwright test navigation.spec.ts

# Run tests for specific browser
pnpm exec playwright test --project=chromium
pnpm exec playwright test --project=firefox
pnpm exec playwright test --project=webkit
```

## Test Coverage

The test suite covers:

✅ **Navigation**
- Home page loads correctly
- All navigation links work (Experience, Projects, Leadership, Awards, Contact)
- Legal page navigation from footer and navbar
- Theme toggle functionality
- Mobile menu behavior

✅ **Contact Form**
- All form fields are visible
- Form validation for required fields
- Email format validation
- Form accepts valid data

✅ **AI Chatbot**
- Floating chat button displays
- Chat window opens and closes
- Input field and send button present
- Displays Gemini branding

✅ **SEO & Accessibility**
- Meta tags present and properly configured
- Title updates on page navigation
- Structured data (JSON-LD) present
- Proper heading hierarchy
- Accessible links with text or aria-label
- Images have alt attributes
- External links properly configured

✅ **Performance**
- Page loads without console errors
- Reasonable page load times

## Browser Coverage

Tests run on:
- **Desktop**: Chrome, Firefox, Safari
- **Mobile**: Pixel 5 (Chrome), iPhone 12 (Safari)

## CI/CD Integration

Tests automatically run on pull requests to the `v3` branch via GitHub Actions (`.github/workflows/pr-tests.yml`).

The PR workflow includes:
1. **Lint** - ESLint checks
2. **TypeCheck** - TypeScript compilation
3. **Build** - Production build verification
4. **E2E Tests** - Playwright tests across all browsers

PRs cannot be merged until all tests pass.

## Writing New Tests

Follow the existing patterns:

```typescript
import { test, expect } from '@playwright/test';

test.describe('Feature Name', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/your-page');
  });

  test('should do something', async ({ page }) => {
    // Your test logic
    await expect(page.locator('selector')).toBeVisible();
  });
});
```

## Debugging Tips

1. **Use UI mode** for interactive debugging:
   ```bash
   pnpm test:ui
   ```

2. **Use headed mode** to see what's happening:
   ```bash
   pnpm test:headed
   ```

3. **Add `await page.pause()`** to pause execution and inspect:
   ```typescript
   test('my test', async ({ page }) => {
     await page.goto('/');
     await page.pause(); // Opens inspector
   });
   ```

4. **Check screenshots** - Playwright automatically captures screenshots on failure in `test-results/`

5. **View HTML report** after test run:
   ```bash
   pnpm exec playwright show-report
   ```

## Configuration

Test configuration is in `playwright.config.ts` at the project root.

Key settings:
- **Base URL**: `http://localhost:5173`
- **Timeout**: 120 seconds for web server startup
- **Retries**: 2 retries on CI, 0 locally
- **Screenshots**: Captured on failure
- **Traces**: Captured on first retry

## Resources

- [Playwright Documentation](https://playwright.dev/)
- [Best Practices](https://playwright.dev/docs/best-practices)
- [Debugging Guide](https://playwright.dev/docs/debug)
