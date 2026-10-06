import{test,expect} from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';

test('login Successfully',async({page}) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('practice','SuperSecretPassword!');
    await expect(page).toHaveURL(/secure/);
  
});


test.only('login UnSuccessfully',async({page}) => {
   const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('practice','WrongPassword!');
    //await page.pause();
    await expect(page.locator('#flash')).toBeVisible();
  
});



    



