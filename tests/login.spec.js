
const { test } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');

test('Login Setup', async ({ page }) => {

  await page.goto('https://www.facebook.com/');

  const loginPage = new LoginPage(page);
  await loginPage.login('9848725287', 'Pnssss');

  // Wait for successful login
  await page.waitForURL(/facebook/);

  // Save session
  await page.context().storageState({ path: 'storageState.json' });

});