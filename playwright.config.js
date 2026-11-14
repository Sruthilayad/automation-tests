// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { config } from 'node:process';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',
  timeout:30 *1000, //timeout applicable for everysteps
  expect : {
  timeout: 5000, //this timeout assertion validation
  },
  fullyParallel:true,
  forbidOnly:!!process.env.CI,//fails the CI run if test.only is left in 
  retries:process.env.CI?2:0,
  reporter:[['html',{open:'never'}],['list']],
  use:{
    headless:!!process.env.CI,
    trace:'on',
    screenshot:'on'
  },
  projects:[
    {
      name : 'chromium',
      use:{...devices['Desktop Chrome']},

    },
  ],
     
});



