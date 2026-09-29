// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { config } from 'node:process';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const Config = ({
  testDir: './tests',
  timeout:30 *1000, //timeout applicable for everysteps
  expect : {
  timeout: 5000, //this timeout assertion validation
  },

  reporter : 'html',
  use: {

    browserName : 'chromium',
    headless : false
    
  },
   
});

module.exports=  Config

