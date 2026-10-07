export class DashboardPage{
    constructor (page) {
        this.page = page;

        this.heading = page.locator('h1');
        this.logoutbutton = page.locator('i.icon-2x icon-signout');
     }

    async isHeadingVisible() {
        return await this.heading.isVisible();
    }

    async logout(){
        await this.logoutbutton.click();
    }
}