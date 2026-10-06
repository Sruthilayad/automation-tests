const {test,expect} = require('@playwright/test');

test.only('Clientsite playwright test',async ({browser})=>
{
    //chrome -plugins
    const context = await browser.newContext();
    const page = await context.newPage();
    const productName = 'ZARA COAT 3';
    const products = page.locator(".card body");
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator('#userEmail').fill("anshika@gmail.com");
    await page.locator('#userPassword').fill("Chrome@2026");
    await page.locator('#login').click();
    await page.waitForLoadState('networkidle');
    await page.locator(".card-body").first().waitFor();
    
    const titlecards = await page.locator('.card-body b').allTextContents();
    console.log(titlecards);

    const count = await products.count();
    for (let i = 0; i < count; i++)
        {

        if (await products.nth(i).locator("b").textContent() === productName)
            {

                await products.nth(i).locator("text= Add To Cart").click();
                break;
            }

    }
 
await page.locator("[routerlink*='cart']").click();
 //await page.locator("div li").first().waitFor();
 //await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
 

 await page.getByRole('button',{name: 'checkout'})
await page.getByPlaceholder('Select Country').pressSequentially("india",{delay:150})

await page.locator("a.btnn.action__submit.ng-star-inserted").click();
await expect(page.locator("hero-primary")).toHaveText(" Thankyou for the order.")

await page.getByText('| 69ce4f79f86ba51a654098ab |')
    

} );