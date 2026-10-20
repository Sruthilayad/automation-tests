export class SauceDemoLoginPage {
    constructor(page){
        this.page = page;
        this.usernameInput = page.locator('input#user-name');
        this.passwordInput = page.locator('input#password');
        this.loginInput = page.locator('input#login-button');
    }

    async login (username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginInput.click();

    }

}