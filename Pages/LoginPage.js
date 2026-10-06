export class LoginPage  {
    constructor (page) {
        this.page = page;

        this.emailInput = page.locator('input[name="username"]')
        this.passwordInput = page.locator('input[name="password"]')
        this.submitButton = page.locator('button[type="submit"]')
        this.alertMessage = page.locator('#flash')
    }

async goto() {
    await this.page.goto('https://practice.expandtesting.com/login');
}

async login (username, password) {
    await this.emailInput.fill(username);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
}
    
 async isAlertVisible(){
    return await this.alertMessage.isVisible();
 }
}


    
