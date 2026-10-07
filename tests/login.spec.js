import{test,expect} from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { DashboardPage } from '../Pages/DashboardPage';

test('User can login Successfully',async({page}) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('practice','SuperSecretPassword!');
    await expect(page).toHaveURL(/secure/);
  
});


test ('User can login UnSuccessfully',async({page}) => {
   const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('practice','WrongPassword!');
    //await page.pause();
    await expect(page.locator('#flash')).toBeVisible();
  
});


test ('Login with Empty Credentials shows error',async({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.submitButton.click();
    await page.waitForLoadState('networkidle');
    //await expect(page.locator('#flash')).toBeVisible();
   //await  expect(page).toHaveURL(/login/);
  
});
    



