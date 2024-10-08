# PlaywrightPractice

## To install playwright: npm install playwright

## To run playwright test: npx playwright test

## To run the tests in head mode: npx playwright test --headed

## By default: playwright tests run in headless mode

## To run specific test among multiple tests: use test.only('title', async ({....}) => {....});

## To start playwright tests in debug mode: npx playwright test (optional: tests/filename) --debug

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
### 7. To search partially an attribute value: [attribute*='value']
### 8. To search for text content: await page.locator("locator").textContent()
### 9. To find the first element from the list of web elements returned by the locator: await page.locator("locator").first().textContent()
### 10. To find the nth element from the list of web elements returned by the locator: await page.locator("locator").nth(index).textContent()
### 11. To find all the elements from the list of web elements returned by the locator: await page.locator("locator").allTextContents()
### 12. To wait till elements are loaded: await page.waitForLoadState('networkidle'); -> this will wait till all the network calls are completed and network is in IDLE state... Sometimes it can be flaky, so to rule out that, an additional logic can be applied: await page.locator("locator").last().waitFor(); -> this will wait for the last element to be loaded
### 13. To check if radio buttons and checkboxes are selected or not: await expect(page.locator("locator")).toBeChecked();
### 14. To uncheck radio buttons and checkboxes: await page.locator("locator").uncheck();
### 15. To check if the radio buttons and checkboxes are unchecked: expect(await page.locator("locator").isChecked()).toBeFalsy();
### 16. To access select dropdowns: const dropdown = page.locator("locator"); await dropdown.selectOption("value");
### 17. To check if the locator have the attribute value: const variable = page.locator("locator"); await expect(variable).toHaveAttribute("attribute", "attribute_value");
### 18. To move to child window: const variable = page.locator("locator"); const [newPage] = await Promise.all([context.waitForEvent("page"), variable.click(),]); await expect(newPage).toHaveTitle("string");