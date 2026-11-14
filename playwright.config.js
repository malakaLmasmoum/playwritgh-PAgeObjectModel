// playwright.config.js
const { defineConfig, devices } = require("@playwright/test");

module.exports = defineConfig({
  testDir: "./tests",
  timeout: 60000,
  fullyParallel: true,
  reporter: "html",
  use: {
    timeout: 60000,
    trace: "on-first-retry",
    // إجبار Playwright على استخدام ملف chrome.exe المحلي مباشرة
    launchOptions: {
      executablePath:
        "C:\\Users\\HP\\AppData\\Local\\ms-playwright\\chromium-1254\\chrome-win64\\chrome.exe",
    },
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
