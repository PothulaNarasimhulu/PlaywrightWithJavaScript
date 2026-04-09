const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({

  testDir: './tests',

  projects: [
    {
      name: 'setup',
      testMatch:[/login.spec.js/,/homepage.spec.js/], 
    },
    {
      name: 'tests',
      use: { storageState: 'storageState.json' },
      dependencies: ['setup'],
    },
  ],

});