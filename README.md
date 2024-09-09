# PlaywrightPractice

## To install playwright: npm install playwright

## To run playwright test: npx playwright test

## To run the tests in head mode: npm playwright test --headed

## By default: playwright tests run in headless mode

## To run specific test among multiple tests: use test.only('title', async ({....}) => {....});

## Notes:
### As JavaScript is asynchronous by nature, we have to use await in each step such that it waits for one step to complete and then the next step shall start
### To use await, we have to let them compiler know that it is an async function by including async keyword
### Locator useful in Playwright: css selector and xpath
### Useful commands:
### 1. To invoke new context: await context = browser.nexContext()
### 2. To invoke new page: await page = context.newPage()
### 3. To navigate to some URL: await page.goto("url")
### 4. To handle locators: await page.locator("locator")
### 5. To get the title of the page: await page.title()
### 6. To assert: use expect() keyword, eg. await expect(page).toHaveTitle("Google");
### 7. To search partially an attribute value: [attribute='value']
### 8. To search for text content: await page.locator("locator").textContent()