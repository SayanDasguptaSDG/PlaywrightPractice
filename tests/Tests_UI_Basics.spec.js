const {test, expect} = require('@playwright/test');

test('BrowserContext Playwright test', async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("http://rahulshettyacademy.com/loginpagePractise/");
});

test('Page Playwright test', async ({page}) => {
    await page.goto("https://google.com");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");
});