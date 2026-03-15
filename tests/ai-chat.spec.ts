import { test, expect } from '@playwright/test';

test.describe('AI Chatbot', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display chatbot floating button', async ({ page }) => {
    // Look for the floating chat button (MessageSquare icon)
    const chatButton = page.locator('button').filter({ 
      has: page.locator('svg') 
    }).last();
    
    await expect(chatButton).toBeVisible();
  });

  test('should open chatbot when button is clicked', async ({ page }) => {
    // Click the floating chat button
    const chatButton = page.locator('button').filter({ 
      has: page.locator('svg') 
    }).last();
    
    await chatButton.click();
    
    // Wait for chat window to appear
    await page.waitForTimeout(500);
    
    // Check for chat header
    await expect(page.locator('text=Anweshan\'s AI')).toBeVisible();
    
    // Check for initial greeting message
    await expect(page.locator('text=/How can I help you/i')).toBeVisible();
  });

  test('should have input field and send button', async ({ page }) => {
    // Open chatbot
    const chatButton = page.locator('button').filter({ 
      has: page.locator('svg') 
    }).last();
    await chatButton.click();
    await page.waitForTimeout(500);
    
    // Check for input field
    const input = page.locator('input[placeholder*="Ask about"]');
    await expect(input).toBeVisible();
    
    // Check for send button
    await expect(page.locator('button[type="submit"]').last()).toBeVisible();
  });

  test('should close chatbot when X button is clicked', async ({ page }) => {
    // Open chatbot
    const chatButton = page.locator('button').filter({ 
      has: page.locator('svg') 
    }).last();
    await chatButton.click();
    await page.waitForTimeout(500);
    
    // Click close button (X icon)
    const closeButton = page.locator('button').filter({ has: page.locator('svg') }).last();
    await closeButton.click();
    
    // Chatbot should disappear
    await page.waitForTimeout(500);
    await expect(page.locator('text=Anweshan\'s AI')).not.toBeVisible();
  });

  test('should display "Powered by Firebase AI SDK & Gemini" text', async ({ page }) => {
    // Open chatbot
    const chatButton = page.locator('button').filter({ 
      has: page.locator('svg') 
    }).last();
    await chatButton.click();
    await page.waitForTimeout(500);
    
    // Check for the Gemini branding
    await expect(page.locator('text=/Gemini/i')).toBeVisible();
  });
});
