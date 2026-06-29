import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,

  use: {
    baseURL: 'https://www.saucedemo.com',
    browserName: 'chromium',
    headless: false,   // IMPORTANT for UI debugging
    trace: 'on'
  }
});