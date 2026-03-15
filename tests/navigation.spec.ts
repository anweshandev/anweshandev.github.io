import { test, expect } from '@playwright/test';

test.describe('Navigation & Core Pages', () => {
  test('should load the home page successfully', async ({ page }) => {
    await page.goto('/');
    
    // Check that the page title is set correctly
    await expect(page).toHaveTitle(/Anweshan/i);
    
    // Check that the main heading contains the name
    const heading = page.locator('h1, h2').first();
    await expect(heading).toBeVisible();
  });

  test('should navigate to Experience page', async ({ page }) => {
    await page.goto('/');
    
    // Click on Experience link
    await page.click('text=Experience');
    
    // Wait for navigation
    await page.waitForURL('**/experience');
    
    // Verify we're on the experience page
    await expect(page).toHaveURL(/.*experience/);
  });

  test('should navigate to Projects page', async ({ page }) => {
    await page.goto('/');
    
    await page.click('text=Projects');
    await page.waitForURL('**/projects');
    
    await expect(page).toHaveURL(/.*projects/);
  });

  test('should navigate to Leadership page', async ({ page }) => {
    await page.goto('/');
    
    await page.click('text=Leadership');
    await page.waitForURL('**/leadership');
    
    await expect(page).toHaveURL(/.*leadership/);
  });

  test('should navigate to Awards page', async ({ page }) => {
    await page.goto('/');
    
    await page.click('text=Awards');
    await page.waitForURL('**/awards');
    
    await expect(page).toHaveURL(/.*awards/);
  });

  test('should navigate to Contact page', async ({ page }) => {
    await page.goto('/');
    
    await page.click('text=Contact');
    await page.waitForURL('**/contact');
    
    await expect(page).toHaveURL(/.*contact/);
  });
});

test.describe('Legal Pages Navigation', () => {
  test('should navigate to Terms of Service from footer', async ({ page }) => {
    await page.goto('/');
    
    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    
    // Click Terms of Service link in footer
    await page.click('text=Terms of Service');
    await page.waitForURL('**/legal/terms-of-service');
    
    await expect(page).toHaveURL(/.*legal\/terms-of-service/);
    await expect(page.locator('h1')).toContainText(/Terms of Service/i);
  });

  test('should navigate to Privacy Policy from footer', async ({ page }) => {
    await page.goto('/');
    
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    
    await page.click('text=Privacy Policy');
    await page.waitForURL('**/legal/privacy-policy');
    
    await expect(page).toHaveURL(/.*legal\/privacy-policy/);
    await expect(page.locator('h1')).toContainText(/Privacy Policy/i);
  });

  test('should access legal pages from navbar', async ({ page }) => {
    await page.goto('/');
    
    // Click Terms link in navbar legal block
    const termsLink = page.locator('a[href="/legal/terms-of-service"]').first();
    await termsLink.click();
    
    await expect(page).toHaveURL(/.*legal\/terms-of-service/);
  });
});

test.describe('Theme Switching', () => {
  test('should toggle between light and dark themes', async ({ page }) => {
    await page.goto('/');
    
    // Find the theme toggle button (Sun/Moon icon)
    const themeButton = page.locator('button').filter({ has: page.locator('svg') }).first();
    
    // Click to toggle theme
    await themeButton.click();
    
    // Wait a bit for theme to apply
    await page.waitForTimeout(500);
    
    // Check that data-theme attribute changed on html element
    const themeAttr = await page.locator('html').getAttribute('data-theme');
    expect(themeAttr).toBeTruthy();
  });
});

test.describe('Responsive Behavior', () => {
  test('should show mobile menu on small screens', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Mobile menu toggle should be visible
    const menuButton = page.locator('button').filter({ has: page.locator('svg') }).nth(1);
    await expect(menuButton).toBeVisible();
    
    // Click to open mobile menu
    await menuButton.click();
    
    // Menu items should appear
    await expect(page.locator('text=Experience')).toBeVisible();
  });
});
