import { test, expect } from '@playwright/test';

test.describe('Chat Page', () => {
    test("Chat is hidden when not logged in", async ({ page }) => {
        await page.goto("/");
        await expect(page.getByRole("button", { name: "Community Chat"})).not.toBeVisible();
    });

    test("Able to access the chat tab after being logged in", async ({ page }) => {
        await page.goto("/");

        await page.getByRole("button", { name: "Login" }).click();

        const dialog = page.getByRole("dialog");
        await expect(dialog).toBeVisible();

        await page.getByLabel("Email").fill("test@example.com");
        await page.getByLabel("Password").fill("password123");

        await page.getByRole("button", { name: "Login" }).click();

        await page.getByRole("button", { name: "Community Chat" }).click();
        await page.getByRole("heading", { name: "Community Chat" }).click();
    });


    test("Able to type and send a message", async ({ page }) => {
        await page.goto("/");

        await page.getByRole("button", { name: "Login" }).click();

        const dialog = page.getByRole("dialog");
        await expect(dialog).toBeVisible();

        await page.getByLabel("Email").fill("test@example.com");
        await page.getByLabel("Password").fill("password123");

        await page.getByRole("button", { name: "Login" }).click();

        await page.getByRole("button", { name: "Community Chat" }).click();

        await page.getByPlaceholder("Type your message...").fill("test");
    });

});