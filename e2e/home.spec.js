import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {

  test("Home page loads and hero title is visible", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: "Divas in Technology" }))
    .toBeVisible();
  });

  test('show home page', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Divas In Technology/);
  });

  test("Navbar link to Login works", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("button", { name: "Login" }).click();

    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();
  });


});