import{test,expect} from '@playwright/test';

test('Check and Uncheckboxes', async({page}) => {
    await page.goto('https://practice.expandtesting.com/checkboxes');
    await page.locator('input.form-check-input').first().check();
    await expect (page.locator('input.form-check-input').first()).toBeChecked();
    await page.locator('input.form-check-input').first().uncheck();
     await expect (page.locator('input.form-check-input').first()).not.toBeChecked();
});

test('select Radio button', async({page}) => {
    await page.goto('https://practice.expandtesting.com/radio-buttons');
    await page.locator('input[value="red"]').check();
    await expect (page.locator('input[value="red"]')).toBeChecked();
  
});

test.only('JS alert success message', async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    page.on('dialog',dialog => dialog.accept());
    await page.getByRole('button',{name:'Click for JS Alert'}).click();
    await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');
  
});