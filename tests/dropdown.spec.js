import{test,expect} from '@playwright/test';

test('Select dropdown Option', async({page}) => {
    await page.goto('https://WWW.saucedemo.com/');
    await page.locator('input#user-name').fill('standard_user');
    await page.locator('input#password').fill('secret_sauce');
    await page.locator('input#login-button').click();
    await page.locator('select.product_sort_container').selectOption('lohi');
    await expect(page.locator('select.product_sort_container')).toHaveValue('lohi');

});