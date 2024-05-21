import { defineConfig, devices } from '@playwright/test';
require('dotenv').config();

export default defineConfig({
  timeout: 30000,
  testDir: './src/tests',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  reporter: [
    ["html", 
    {
      open: "never", 
      outputFolder: "html-reports/" 
    }],
  [
    "allure-playwright",
    {
      detail: true,
      outputFolder: "allure-reports/",
      suiteTitle: false,
    },
  ],
  ],
  use: {
    baseURL: 'https://demo.casino',
    viewport: { width: 1980, height: 1080 },
    ignoreHTTPSErrors: true,
    trace: 'on-first-retry',

    screenshot: 'only-on-failure',
    headless: process.env.HEADLESS_MODE === "TRUE"? true: false
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },


  ],
});
