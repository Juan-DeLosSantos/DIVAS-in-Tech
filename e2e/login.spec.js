import { test, expect } from '@playwright/test';

test.describe('Log In', () => {
    test("Login text boxes work", async ({ page }) => {
        await page.goto("/");

        await page.getByRole("button", { name: "Login" }).click();

        const dialog = page.getByRole("dialog");
        await expect(dialog).toBeVisible();

        await page.getByLabel("Email").fill("test@example.com");
        await page.getByLabel("Password").fill("password123");
    });

    test("Is able to log in successfully", async ({ page }) => {
        await page.goto("/");

        await page.getByRole("button", { name: "Login" }).click();

        const dialog = page.getByRole("dialog");
        await expect(dialog).toBeVisible();

        await page.getByLabel("Email").fill("test@example.com");
        await page.getByLabel("Password").fill("password123");

        await page.getByRole("button", { name: "Login" }).click();
    });

    test("Is able to log out successfully", async ({ page }) => {
        await page.goto("/");

        await page.getByRole("button", { name: "Login" }).click();

        const dialog = page.getByRole("dialog");
        await expect(dialog).toBeVisible();

        await page.getByLabel("Email").fill("test@example.com");
        await page.getByLabel("Password").fill("password123");

        await page.getByRole("button", { name: "Login" }).click();

        await page.getByRole("button", { name: "Logout" }).click();
    });

});