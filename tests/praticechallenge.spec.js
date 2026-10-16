import{test,expect} from '@playwright/test';

test('Remove multiple items from cart', async({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('input#user-name').fill('standard_user');
    await page.locator('input#password').fill('secret_sauce');
    await page.locator('input#login-button').click();
    await page.waitForLoadState('networkidle');
    await page.locator('button#add-to-cart-sauce-labs-backpack').first().click();
    await page.locator('button#add-to-cart-sauce-labs-bike-light').click();
    await page.locator('button#add-to-cart-sauce-labs-bolt-t-shirt').click();
    await page.locator('button#remove-sauce-labs-bike-light').first().click();
    await page.locator('button#remove-sauce-labs-bolt-t-shirt').click();
    await expect(page.locator('button#add-to-cart-sauce-labs-bolt-t-shirt')).toBeVisible();
});

test('Verify Product Prices', async({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('input#user-name').fill('standard_user');
    await page.locator('input#password').fill('secret_sauce');
    await page.locator('input#login-button').click();
    await page.waitForLoadState('networkidle');
    const priceText = await page.locator('.inventory_item_price').first().textContent();
    console.log('Product Price is :',priceText);
    await expect(page.locator('.inventory_item_price').first()).toBeVisible();
});


const testUsers = [
    {
        username:'standard_user',
        password:'secret_sauce',
        shouldPass: true
    },

    {
        username:'problem_user',
        password:'secret_sauce',
        shouldPass: true
    },

];

testUsers.forEach(user => {
    test.only(`Multiple checkout attempts ${user.username}`, async({page}) => {
    await page.goto('https://WWW.saucedemo.com/');
    await page.locator('input#user-name').fill('standard_user');
    await page.locator('input#password').fill('secret_sauce');
    await page.locator('input#login-button').click();
    await page.waitForLoadState('networkidle');
    await page.locator('button#add-to-cart-sauce-labs-backpack').first().click();
    await page.locator('.shopping_cart_link').click();
    await page.locator('button[name="checkout"]').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');
   
});
});








