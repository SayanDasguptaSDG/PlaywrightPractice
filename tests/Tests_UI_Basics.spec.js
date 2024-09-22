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

test('Web Browser Context Validation Error Login', async ({page}) => {
    await page.goto("http://rahulshettyacademy.com/loginpagePractise/");
    await page.locator("input[id='username']").fill("rahulshetty");
    await page.locator("input[id='password']").fill("learning");
    await page.locator("#signInBtn").click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('Incorrect');
});

test('Web Browser Context Validation', async ({page}) => {
    await page.goto("http://rahulshettyacademy.com/loginpagePractise/");
    await page.locator("input[id='username']").fill("rahulshettyacademy");
    await page.locator("input[id='password']").fill("learning");
    await page.locator("#signInBtn").click();
    console.log(await page.locator(".card-body a").first().textContent());
    console.log(await page.locator(".card-body a").nth(1).textContent());
    console.log(await page.locator(".card-body a").allTextContents());
});

test('UI Controls', async ({page}) => {
    await page.goto("http://rahulshettyacademy.com/loginpagePractise/");
    await page.locator("input[id='username']").fill("rahulshettyacademy");
    await page.locator("input[id='password']").fill("learning");

    await page.locator(".customradio [value='user']").click();
    await page.locator("#okayBtn").click();
    await expect(page.locator(".customradio [value='user']")).toBeChecked();

    const dropdown = page.locator("select.form-control")
    await dropdown.selectOption("consult");

    await page.locator("input[type='checkbox']").click();
    await expect(page.locator("input[type='checkbox']")).toBeChecked();
    await page.locator("input[type='checkbox']").uncheck();
    expect(await page.locator("input[type='checkbox']").isChecked()).toBeFalsy();

    const documentsLink = page.locator("a[href*='documents-request']");
    await expect(documentsLink).toHaveAttribute("class", "blinkingText");

    await page.locator("#signInBtn").click();
});

test.only("Child windows handling", async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("http://rahulshettyacademy.com/loginpagePractise/");
    const documentsLink = page.locator("a[href*='documents-request']");
    const [newPage] = await Promise.all([
        context.waitForEvent("page"),
        documentsLink.click(),
    ]);
    await expect(newPage).toHaveTitle("RS Academy");
    const extractedUsername = (await newPage.locator(".red").textContent()).split("@")[1].split(".")[0];
    console.log(extractedUsername);
    
    await page.locator("input[id='username']").fill(extractedUsername);
    console.log(await page.locator("input[id='username']").textContent());
    await page.locator("input[id='password']").fill("learning");
    await page.locator("#signInBtn").click();
});