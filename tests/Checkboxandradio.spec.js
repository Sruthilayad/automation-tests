import{test,expect} from '@playwright/test';

test('Check and Uncheckboxes', async({page}) => {
    await page.goto('https://practice.expandtesting.com/checkboxes');
    await page.locator('input.form-check-input').first().check();
    await expect (page.locator('input.form-check-input').first()).toBeChecked();
    await page.locator('input.form-check-input').first().uncheck();
     await expect (page.locator('input.form-check-input').first()).not.toBeChecked();
});

test.only('select Radio button', async({page}) => {
    await page.goto('https://practice.expandtesting.com/radio-buttons');
    await page.locator('input[value="red"]').check();
    await expect (page.locator('input[value="red"]')).toBeChecked();
  
});