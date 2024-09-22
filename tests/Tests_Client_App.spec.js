const {test} = require('@playwright/test');

test('Element Validation', async ({page}) => {
    await page.goto("https://rahulshettyacademy.com/client/");
    await page.locator("input[id='userEmail']").fill("training.shreesha@gmail.com");
    await page.locator("input[id='userPassword']").fill("Train123");
    await page.locator("#login").click();
    await page.waitForLoadState('networkidle');
    await page.locator(".card b").last().waitFor();
    const titles = await page.locator(".card b").allTextContents();
    console.log(titles);
});