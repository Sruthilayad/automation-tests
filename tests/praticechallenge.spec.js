import{test,expect} from '@playwright/test';
import{ SauceDemoLoginPage } from '../Pages/SauceDemoLoginPage';
import{ SauceDemoCartPage } from '../Pages/SauceDemoCartPage';

//Test 1: Login to Saucedemo
test('Login to saucedemo', async({page}) => {
    await page.goto('https://www.saucedemo.com/');

    const loginPage = new SauceDemoLoginPage(page);
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL(/inventory/);
});

//Test 2: Add to Cart and verify
test('Add item to Cart', async({page}) => {
    await page.goto('https://www.saucedemo.com/');
     const loginPage = new SauceDemoLoginPage(page);
      const cartPage = new SauceDemoCartPage(page);
    await loginPage.login('standard_user', 'secret_sauce');
    await cartPage.addItem();

    await expect(page.locator('.shopping_cart_badge')).toContainText('1');
    
});

/**Test 3: Data-driven Checkout
const testUsers = [
    {
        username:'standard_user',
        password:'secret_sauce'
    },

   ];

testUsers.forEach(user => {
    test(`Checkout with ${user.username}`, async({page}) => {
    await page.goto('https://WWW.saucedemo.com/');
      

    const loginPage = new SauceDemoLoginPage(page);
    const cartPage = new SauceDemoCartPage(page);

    await loginPage.login(testUsers.username, testUsers.password);
    await cartPage.addItem();
    await cartPage.goToCheckout();
    await page.pause();
    //await page.waitForLoadState('networkidle');
    
    //Fill checkout info
   // await cartPage.fillCheckoutInfo('john','Doe','12345');
    //await expect(page).toHaveURL(/checkout-step-two/);
    
   
});
});
**/







