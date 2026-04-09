const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/HomePage');

test('Home Page Validation', async ({ page }) => {

  const homePage = new HomePage(page);

  await page.goto('https://www.facebook.com/');

  await expect(page).toHaveURL(/facebook/);
});