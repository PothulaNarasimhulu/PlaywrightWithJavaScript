const { chromium } = require('@playwright/test');

class BrowserLaunch {

  async launchBrowser() {
    console.log("Launching browser...");

    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();

    return { browser, page };
  }

}

module.exports = BrowserLaunch;