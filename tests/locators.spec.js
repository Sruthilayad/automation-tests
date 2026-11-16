import{test,expect} from '@playwright/test';

test("Login using user-facing locators",async ({page})=>{
    await page.goto('https://saucedemo.com/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button',{name:'Login'}).click();
    await page.waitForLoadState('networkidle');
    await expect(page.getByText('Products')).toBeVisible();
    await expect(page).toHaveURL(/inventory/);
    await page.locator('#add-to-cart-sauce-labs-backpack').nth(0).click();
    await expect (page.locator('.shopping_cart_badge')).toBeVisible();
});