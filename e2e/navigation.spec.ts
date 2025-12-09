import { test, expect } from "@playwright/test";

test.describe('Navigation', () => {
    test("Navigation bar renders with base links", async ({ page }) => {
        await page.goto("/");

        await expect(page.getByRole("button", { name: "Home" })).toBeVisible();
        await expect(page.getByRole("button", { name: "Mission" })).toBeVisible();
        await expect(page.getByRole("button", { name: "Board" })).toBeVisible();
        await expect(page.getByRole("button", { name: "Partners" })).toBeVisible();
        await expect(page.getByRole("button", { name: "Calendar" })).toBeVisible();
    });

    test("Login button shows when user is logged out", async ({ page }) => {
        await page.goto("/");

        await expect(page.getByRole("button", { name: "Login" })).toBeVisible();
        await expect(page.getByRole("button", { name: "Logout" })).not.toBeVisible();
    });

    test("Navigation buttons internally callback correctly", async ({ page }) => {
        await page.goto("/");

        await page.getByRole("button", { name: "Mission" }).click();
        await expect(page.getByRole("heading", { name: "About Divas in Technology" })).toBeVisible();

        await page.getByRole("button", { name: "Board" }).click();
        await expect(page.getByRole("heading", { name: "Our Board Members" })).toBeVisible();

        await page.getByRole("button", { name: "Partners" }).click();
        await expect(page.getByRole("heading", { name: "Our Partners" })).toBeVisible();

        await page.getByRole("button", { name: "Calendar" }).click();
        await expect(page.getByRole("heading", { name: "Event Calendar" })).toBeVisible();
    });
});



