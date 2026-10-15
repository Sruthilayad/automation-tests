import{test,expect} from '@playwright/test';

test ('Iframe element visibility', async({page}) => {
    await page.goto('https://practice.expandtesting.com/iframe');
     //await page.pause();

   const iframe = page.frameLocator('iframe').first();
   //await frame.locator('input.form-control').fill('test@email.com');
   await expect(iframe.locator('body')).toBeVisible();

});