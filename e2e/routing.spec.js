import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {

  test('show home page', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    await expect(page.locator('h1')).toHaveText('Home Page');
  });

  test('should click "calendar" and navigate to the calendar page', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    await page.locator('button:has-text("Calendar")').click();
    await expect(page).toHaveURL('http://localhost:5173/calendar');
    await expect(page.locator('h1')).toHaveText('This is the Calendar Page');
  });

  test('should click "login" and navigate to the login page', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    await page.locator('button:has-text("Log In")').click();
    await expect(page).toHaveURL('http://localhost:5173/login');
    await expect(page.locator('h1')).toHaveText('This is the Login Page');
  });

  test('should click "mission" and navigate to the mission page', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    await page.locator('button:has-text("mission")').click();
    await expect(page).toHaveURL('http://localhost:5173/mission');
    await expect(page.locator('h1')).toHaveText('This is the Mission Page');
  });

  test('should click "chat" and navigate to the chat page', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    await page.locator('button:has-text("Chat")').click();
    await expect(page).toHaveURL('http://localhost:5173/chat');
    await expect(page.locator('h1')).toHaveText('This is the Chat Page');
  });

});