import { test, expect } from '@playwright/test';

test.describe('Contact Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact');
  });

  test('should display contact form with all required fields', async ({ page }) => {
    // Check form fields exist
    await expect(page.locator('input[placeholder*="John Doe"]')).toBeVisible();
    await expect(page.locator('input[type="email"]')).toBeVisible();
    await expect(page.locator('input[placeholder*="Leadership"]')).toBeVisible();
    await expect(page.locator('textarea')).toBeVisible();
    
    // Check submit button exists
    await expect(page.locator('button[type="submit"]')).toBeVisible();
  });

  test('should show validation for empty required fields', async ({ page }) => {
    // Click submit without filling form
    await page.click('button[type="submit"]');
    
    // Browser will show validation messages for required fields
    const nameInput = page.locator('input[placeholder*="John Doe"]');
    const isValid = await nameInput.evaluate((el: HTMLInputElement) => el.validity.valid);
    expect(isValid).toBe(false);
  });

  test('should validate email format', async ({ page }) => {
    const emailInput = page.locator('input[type="email"]');
    
    // Fill with invalid email
    await emailInput.fill('invalid-email');
    
    const isValid = await emailInput.evaluate((el: HTMLInputElement) => el.validity.valid);
    expect(isValid).toBe(false);
  });

  test('should accept valid form data', async ({ page }) => {
    // Fill all fields with valid data
    await page.fill('input[placeholder*="John Doe"]', 'Test User');
    await page.fill('input[type="email"]', 'test@example.com');
    await page.fill('input[placeholder*="Leadership"]', 'Test Subject');
    await page.fill('textarea', 'This is a test message for the contact form.');
    
    // All fields should be valid
    const nameInput = page.locator('input[placeholder*="John Doe"]');
    const emailInput = page.locator('input[type="email"]');
    
    const nameValid = await nameInput.evaluate((el: HTMLInputElement) => el.validity.valid);
    const emailValid = await emailInput.evaluate((el: HTMLInputElement) => el.validity.valid);
    
    expect(nameValid).toBe(true);
    expect(emailValid).toBe(true);
  });
});

test.describe('Contact Page Content', () => {
  test('should display contact information', async ({ page }) => {
    await page.goto('/contact');
    
    // Check for email link
    await expect(page.locator('a[href^="mailto:"]')).toBeVisible();
    
    // Check for LinkedIn link
    await expect(page.locator('a[href*="linkedin.com"]')).toBeVisible();
    
    // Check for GitHub link
    await expect(page.locator('a[href*="github.com"]')).toBeVisible();
  });

  test('should display availability status', async ({ page }) => {
    await page.goto('/contact');
    
    // Check for availability text
    await expect(page.locator('text=/availability/i')).toBeVisible();
  });
});
