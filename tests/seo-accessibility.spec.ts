import { test, expect } from '@playwright/test';

test.describe('SEO & Meta Tags', () => {
  test('should have proper meta tags on home page', async ({ page }) => {
    await page.goto('/');
    
    // Check title
    const title = await page.title();
    expect(title).toBeTruthy();
    expect(title.length).toBeGreaterThan(0);
    
    // Check meta description
    const description = await page.locator('meta[name="description"]').getAttribute('content');
    expect(description).toBeTruthy();
    expect(description!.length).toBeGreaterThan(50);
    
    // Check OG tags
    const ogTitle = await page.locator('meta[property="og:title"]').getAttribute('content');
    expect(ogTitle).toBeTruthy();
    
    const ogDescription = await page.locator('meta[property="og:description"]').getAttribute('content');
    expect(ogDescription).toBeTruthy();
  });

  test('should update title when navigating to different pages', async ({ page }) => {
    await page.goto('/');
    const homeTitle = await page.title();
    
    await page.click('text=Experience');
    await page.waitForURL('**/experience');
    
    const experienceTitle = await page.title();
    expect(experienceTitle).toContain('Experience');
    expect(experienceTitle).not.toBe(homeTitle);
  });

  test('should have JSON-LD structured data', async ({ page }) => {
    await page.goto('/');
    
    // Check for structured data script
    const structuredData = await page.locator('script[type="application/ld+json"]').count();
    expect(structuredData).toBeGreaterThan(0);
  });
});

test.describe('Analytics & Performance', () => {
  test('should load without console errors', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });
    
    await page.goto('/');
    
    // Filter out known safe errors (like network errors in dev)
    const criticalErrors = errors.filter(e => 
      !e.includes('DevTools') && 
      !e.includes('manifest') &&
      !e.includes('favicon')
    );
    
    expect(criticalErrors.length).toBe(0);
  });

  test('should have reasonable page load time', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    const loadTime = Date.now() - startTime;
    
    // Page should load within 5 seconds
    expect(loadTime).toBeLessThan(5000);
  });
});

test.describe('Accessibility', () => {
  test('should have proper heading hierarchy', async ({ page }) => {
    await page.goto('/');
    
    // Check that h1 exists
    const h1Count = await page.locator('h1').count();
    expect(h1Count).toBeGreaterThanOrEqual(1);
  });

  test('should have accessible links', async ({ page }) => {
    await page.goto('/');
    
    // All links should have accessible names
    const links = await page.locator('a').all();
    
    for (const link of links) {
      const text = await link.textContent();
      const ariaLabel = await link.getAttribute('aria-label');
      
      // Link should have either text content or aria-label
      expect(text || ariaLabel).toBeTruthy();
    }
  });

  test('should have alt text for images', async ({ page }) => {
    await page.goto('/');
    
    const images = await page.locator('img').all();
    
    for (const img of images) {
      const alt = await img.getAttribute('alt');
      // All images should have alt attribute (even if empty for decorative images)
      expect(alt).not.toBeNull();
    }
  });
});

test.describe('External Links', () => {
  test('should have working social media links in footer', async ({ page }) => {
    await page.goto('/');
    
    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    
    // Check LinkedIn link
    const linkedIn = page.locator('a[href*="linkedin.com"]').first();
    await expect(linkedIn).toHaveAttribute('href', /linkedin\.com/);
    await expect(linkedIn).toHaveAttribute('target', '_blank');
    await expect(linkedIn).toHaveAttribute('rel', /noopener/);
    
    // Check GitHub link
    const github = page.locator('a[href*="github.com"]').first();
    await expect(github).toHaveAttribute('href', /github\.com/);
    await expect(github).toHaveAttribute('target', '_blank');
    
    // Check email link
    const email = page.locator('a[href^="mailto:"]').first();
    await expect(email).toHaveAttribute('href', /mailto:/);
  });
});
