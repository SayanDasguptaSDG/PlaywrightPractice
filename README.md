# PlaywrightPractice

## To install playwright: npm install playwright

## To run playwright test: npx playwright test

## To run the tests in head mode: npm playwright test --headed

## By default: playwright tests run in headless mode

## To run specific test among multiple tests: use test.only('title', async ({....}) => {....});

## Notes:
### 1. As JavaScript is asynchronous by nature, we have to use await in each step such that it waits for one step to complete and then the next step shall start
### 2. To use await, we have to let them compiler know that it is an async function by including async keyword