//importing annotation from PW jar to recognize the test
const {test,expect} = require('@playwright/test');

//first argument is TC name and 2nd is function
test('First Browser playwright test',async ({browser,page})=>
{
    //chrome -plugins
    //const context =await browser.newContext();
    //const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

});

test ('page playwright test',async ({page})=>
{
    await page.goto("https://google.com");
    console.log(await page.title());
    //assertion
    await expect (page).toHaveTitle("Google");
});
