import{test,expect} from '@playwright/test';

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

      {
        username:'visual_user',
        password:'secret_sauce',
        shouldPass: true
    }
];

testUsers.forEach(user => {
    test(`Login with ${user.username}`, async({page}) => {
    await page.goto('https://WWW.saucedemo.com/');
    await page.locator('input#user-name').fill('standard_user');
    await page.locator('input#password').fill('secret_sauce');
    await page.locator('input#login-button').click();

    if (user.shouldPass)
    {
       await expect(page).toHaveURL(/inventory/);
    }else{
        await expect(page.locator('.error-message')).toBeVisible();
    }
});

});




   



   
