const {test} = require('@playwright/test');

test('BrowserContext Playwright test', async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("http://rahulshettyacademy.com/loginpagePractise/");
});

test.only('Page Playwright test', async ({page}) => {
    await page.goto("https://google.com");
});